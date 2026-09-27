import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanityWriteClient } from "@/lib/sanity";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { notifyTeam } from "@/lib/notify";
import { industryPages } from "@/content/industries";

// ─── Schema ────────────────────────────────────────────────────────────────────

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.enum([
    "custom-software",
    "web-app",
    "mobile-app",
    "seo-geo",
    "automation",
    "other",
  ]),
  budget: z.enum([
    "under-1k",
    "1k-5k",
    "5k-15k",
    "15k-50k",
    "50k-plus",
    "not-sure",
  ]),
  description: z.string().max(2000).optional(),
  _hp: z.string().max(0, "Bot detected"), // honeypot — must be empty
});

// Free "Website & Lead Leak Audit" requests from /industries/<slug> pages.
const industrySlugs = industryPages.map((page) => page.slug) as [string, ...string[]];

const AuditSchema = z.object({
  kind: z.literal("audit"),
  niche: z.enum(industrySlugs),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  business: z.string().trim().min(1, "Please enter your business name").max(150),
  website: z.string().trim().max(300).optional(),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  spend: z.enum(["under-1k", "1k-3k", "3k-10k", "10k-plus", "not-sure"]),
  pains: z.array(z.string().max(40)).max(10).default([]),
  calculator: z.string().max(600).optional(),
  utm: z.record(z.string().max(30), z.string().max(100)).optional(),
  _hp: z.string().max(0, "Bot detected"),
});

const isRateLimited = createRateLimiter({ prefix: "contact", max: 3, windowMinutes: 10 });

// ─── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Rate limit by IP. The IP is used only for this check — it isn't stored.
  if (await isRateLimited(getClientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  // Parse + validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if ((body as { kind?: string })?.kind === "audit") {
    return handleAudit(body);
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Validation failed.";
    return NextResponse.json({ error: firstError }, { status: 422 });
  }

  const data = parsed.data;

  // ── Write lead to Sanity (private document ID; listed in the admin panel) ─
  try {
    await sanityWriteClient.create({
      // The dataset is public (private datasets need a paid Sanity plan), but
      // documents whose ID contains a "." are only readable with a token.
      // Leads must always be created under "leads." to stay private.
      _id: `leads.${crypto.randomUUID()}`,
      _type: "lead",
      name: data.name,
      email: data.email,
      company: data.company ?? "",
      projectType: data.projectType,
      budget: data.budget,
      description: data.description ?? "",
      status: "new",
    });
  } catch (error) {
    console.error("[contact] Sanity database write failed:", error);
    return NextResponse.json(
      { error: "Could not save your project details. Please try again or email us directly." },
      { status: 500 }
    );
  }

  await notifyTeam(`New project enquiry from ${data.name}`, {
    Name: data.name,
    Email: data.email,
    Company: data.company,
    "Project type": data.projectType,
    Budget: data.budget,
    Description: data.description,
  });

  return NextResponse.json({ success: true }, { status: 200 });
}

async function handleAudit(body: unknown) {
  const parsed = AuditSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Validation failed.";
    return NextResponse.json({ error: firstError }, { status: 422 });
  }

  const data = parsed.data;
  const source = `industry:${data.niche}`;
  const utm = Object.entries(data.utm ?? {}).map(([key, value]) => `${key}=${value}`).join(" ");
  const description = [
    `Free audit request (${data.niche})`,
    data.website && `Website: ${data.website}`,
    `Country: ${data.country}`,
    data.pains.length > 0 && `Losing jobs to: ${data.pains.join(", ")}`,
  ]
    .filter(Boolean)
    .join("\n");
  const extra = [
    `pain=${data.pains.join(",") || "none"}`,
    data.calculator && `calculator: ${data.calculator}`,
    utm && `utm: ${utm}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sanityWriteClient.create({
      _id: `leads.${crypto.randomUUID()}`,
      _type: "lead",
      name: data.name,
      email: data.email,
      company: data.business,
      projectType: "industry-audit",
      budget: data.spend,
      description,
      source,
      extra,
      status: "new",
    });
  } catch (error) {
    console.error("[contact] Sanity write failed (audit):", error);
    return NextResponse.json(
      { error: "Could not save your request. Please try again or email us directly." },
      { status: 500 }
    );
  }

  await notifyTeam(`Free audit request: ${data.business} (${data.niche})`, {
    Name: data.name,
    Email: data.email,
    Business: data.business,
    Website: data.website,
    Country: data.country,
    "Marketing spend": data.spend,
    "Losing jobs to": data.pains.join(", "),
    Calculator: data.calculator,
    UTM: utm,
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
