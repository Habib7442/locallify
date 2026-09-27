import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanityWriteClient } from "@/lib/sanity";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { notifyTeam } from "@/lib/notify";

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

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Validation failed.";
    return NextResponse.json({ error: firstError }, { status: 422 });
  }

  const data = parsed.data;

  // ── Write lead to Sanity (private dataset; listed in the admin panel) ──────
  try {
    await sanityWriteClient.create({
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
