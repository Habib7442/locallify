import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanityWriteClient } from "@/lib/sanity";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { notifyTeam } from "@/lib/notify";

const ReviewSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  review: z.string().trim().min(10, "Please write a little more").max(1500),
  rating: z.number().int().min(1).max(5),
  _hp: z.string().max(0, "Bot detected").optional(), // honeypot — must be empty
});

const isRateLimited = createRateLimiter({ prefix: "reviews", max: 3, windowMinutes: 60 });

/**
 * Public review submission. Reviews always land unpublished and unverified:
 * they appear on the site only after approval in the admin panel, and the
 * "Verified" badge only ever comes from a sourceUrl set there.
 */
export async function POST(req: NextRequest) {
  if (await isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ReviewSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Validation failed." }, { status: 422 });
  }

  const { name, review, rating } = parsed.data;

  try {
    await sanityWriteClient.create({
      _type: "review",
      name,
      review,
      rating,
      is_published: false,
      is_verified: false,
    });
  } catch (error) {
    console.error("[reviews] Sanity write failed:", error);
    return NextResponse.json({ error: "Could not save your review. Please try again." }, { status: 500 });
  }

  await notifyTeam(`New review from ${name} (${rating}/5) — awaiting approval`, {
    Name: name,
    Rating: `${rating}/5`,
    Review: review,
  });

  return NextResponse.json({ success: true });
}
