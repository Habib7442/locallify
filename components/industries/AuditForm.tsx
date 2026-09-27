"use client";

import { useEffect, useId, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { CALCULATOR_EVENT, type CalculatorResultDetail } from "./RevenueCalculator";
import { track } from "@/lib/track";

export const SPEND_OPTIONS = [
  { value: "under-1k", label: "Under $1,000 / month" },
  { value: "1k-3k", label: "$1,000 – $3,000 / month" },
  { value: "3k-10k", label: "$3,000 – $10,000 / month" },
  { value: "10k-plus", label: "$10,000+ / month" },
  { value: "not-sure", label: "Not sure" },
] as const;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

interface Props {
  slug: string;
  niche: string;
  painOptions: { value: string; label: string }[];
}

const fieldClass =
  "h-12 w-full rounded-xl border border-border-default bg-bg-surface px-4 text-base text-text-primary outline-none focus:border-accent-primary";

export default function AuditForm({ slug, niche, painOptions }: Props) {
  const id = useId();
  const [pains, setPains] = useState<string[]>([]);
  const [calculator, setCalculator] = useState("");
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const onResult = (e: Event) => setCalculator((e as CustomEvent<CalculatorResultDetail>).detail.summary);
    window.addEventListener(CALCULATOR_EVENT, onResult);

    const params = new URLSearchParams(window.location.search);
    setUtm(Object.fromEntries(UTM_KEYS.flatMap((key) => (params.get(key) ? [[key, params.get(key)!.slice(0, 100)]] : []))));

    return () => window.removeEventListener(CALCULATOR_EVENT, onResult);
  }, []);

  const togglePain = (value: string) =>
    setPains((prev) => (prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "audit",
          niche: slug,
          name: form.get("name"),
          email: form.get("email"),
          business: form.get("business"),
          website: form.get("website") || undefined,
          country: form.get("country"),
          spend: form.get("spend"),
          pains,
          calculator: calculator || undefined,
          utm,
          _hp: form.get("_hp") || "",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      track("form_submit", { niche, pains: pains.join(",") });
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border-default bg-bg-surface p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent-primary" aria-hidden="true" />
        <p className="mt-4 text-xl font-semibold text-text-primary">Request received.</p>
        <p className="mt-2 text-text-secondary">
          We’ll review your site and Google presence and email your audit to you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border-default bg-bg-surface/60 p-6 sm:p-8" noValidate={false}>
      {/* Honeypot */}
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute h-0 w-0 opacity-0 pointer-events-none" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${id}-name`} className="text-sm font-medium text-text-primary">Your name *</label>
          <input id={`${id}-name`} name="name" required minLength={2} autoComplete="name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-email`} className="text-sm font-medium text-text-primary">Email *</label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-business`} className="text-sm font-medium text-text-primary">Business name *</label>
          <input id={`${id}-business`} name="business" required autoComplete="organization" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-website`} className="text-sm font-medium text-text-primary">Current website <span className="text-text-muted">(optional)</span></label>
          <input id={`${id}-website`} name="website" type="url" placeholder="https://" autoComplete="url" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-country`} className="text-sm font-medium text-text-primary">Country *</label>
          <input id={`${id}-country`} name="country" required defaultValue="United States" autoComplete="country-name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-spend`} className="text-sm font-medium text-text-primary">Monthly marketing spend *</label>
          <select id={`${id}-spend`} name="spend" required defaultValue="" className={fieldClass}>
            <option value="" disabled>Choose a range</option>
            {SPEND_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-text-primary">Where are you losing the most jobs?</legend>
        <div className="flex flex-wrap gap-2">
          {painOptions.map((option) => {
            const checked = pains.includes(option.value);
            return (
              <label
                key={option.value}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent-primary ${
                  checked ? "border-accent-primary bg-accent-soft text-text-primary" : "border-border-default text-text-secondary hover:border-border-strong"
                }`}
              >
                <input type="checkbox" className="sr-only" checked={checked} onChange={() => togglePain(option.value)} />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      {calculator && (
        <p className="rounded-xl bg-accent-soft px-4 py-3 text-sm text-text-secondary">
          Your calculator result will be included with this request.
        </p>
      )}

      {error && <p className="text-sm text-semantic-bad" role="alert">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full gap-2 disabled:opacity-60">
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Get my free audit
      </button>
      <p className="text-xs text-text-muted">
        No sales call required. By sending this you agree to our <a href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</a>.
      </p>
    </form>
  );
}
