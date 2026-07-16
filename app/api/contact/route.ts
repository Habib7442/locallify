import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

// ─── Rate limiting (simple in-memory, swap for Upstash in production) ──────────
// TODO: Replace with Upstash Redis when UPSTASH_REDIS_REST_URL is set.
const ipTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 min
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipTimestamps.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  ipTimestamps.set(ip, [...timestamps, now]);
  return false;
}

// ─── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
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

  // ── TODO: Send notification email via Resend ────────────────────────────────
  // Uncomment and install: pnpm add resend
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // await resend.emails.send({
  //   from: "Locallify Leads <hello@locallifyagency.com>",
  //   to: "hello@locallifyagency.com",
  //   subject: `New lead: ${data.name} — ${data.projectType}`,
  //   html: `
  //     <h2>New project inquiry</h2>
  //     <p><strong>Name:</strong> ${data.name}</p>
  //     <p><strong>Email:</strong> ${data.email}</p>
  //     <p><strong>Company:</strong> ${data.company ?? "—"}</p>
  //     <p><strong>Project type:</strong> ${data.projectType}</p>
  //     <p><strong>Budget:</strong> ${data.budget}</p>
  //     <p><strong>Description:</strong> ${data.description ?? "—"}</p>
  //   `,
  // });
  //
  // await resend.emails.send({
  //   from: "Locallify <hello@locallifyagency.com>",
  //   to: data.email,
  //   subject: "We got your inquiry — talk soon 👋",
  //   html: `
  //     <h2>Hey ${data.name.split(" ")[0]},</h2>
  //     <p>Thanks for reaching out. We've received your project details and someone
  //     from our team will be in touch within 24 hours.</p>
  //     <p>If you haven't booked a call yet, you can do so here:
  //     <a href="https://cal.com/locallify/discovery">cal.com/locallify/discovery</a></p>
  //     <p>— The Locallify Team</p>
  //   `,
  // });
  // ───────────────────────────────────────────────────────────────────────────

  // ── TODO: Append lead to Google Sheets ─────────────────────────────────────
  // Uncomment and install: pnpm add googleapis
  //
  // import { google } from "googleapis";
  // const auth = new google.auth.GoogleAuth({
  //   credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
  //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  // });
  // const sheets = google.sheets({ version: "v4", auth });
  // await sheets.spreadsheets.values.append({
  //   spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
  //   range: "Leads!A:H",
  //   valueInputOption: "USER_ENTERED",
  //   requestBody: {
  //     values: [[
  //       new Date().toISOString(),
  //       data.name,
  //       data.email,
  //       data.company ?? "",
  //       data.projectType,
  //       data.budget,
  //       data.description ?? "",
  //       ip,
  //     ]],
  //   },
  // });
  // ───────────────────────────────────────────────────────────────────────────

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log("[contact] New lead:", {
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      budget: data.budget,
    });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
