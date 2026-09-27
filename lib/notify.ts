/**
 * Emails the team when a lead or review comes in. Uses Resend's HTTP API
 * directly (no SDK dependency). Does nothing unless both env vars are set:
 *   RESEND_API_KEY      — from resend.com (sending domain must be verified)
 *   LEAD_NOTIFY_EMAIL   — where notifications go, e.g. hello@locallifyagency.com
 * Optional: LEAD_NOTIFY_FROM (defaults to Resend's onboarding sender).
 * Never throws: a failed email must not fail the visitor's submission —
 * the record is already saved in Sanity and visible in the admin panel.
 */
export async function notifyTeam(subject: string, fields: Record<string, string | undefined>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !to) return;

  const text = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_NOTIFY_FROM || "Locallify Website <onboarding@resend.dev>",
        to: [to],
        subject,
        text,
        ...(fields.Email && { reply_to: fields.Email }),
      }),
    });
    if (!res.ok) console.error("[notify] Resend responded", res.status, await res.text());
  } catch (error) {
    console.error("[notify] Failed to send notification:", error);
  }
}
