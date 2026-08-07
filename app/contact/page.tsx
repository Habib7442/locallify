"use client";

import React, { useState, useId, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CONTACT, SITE_URL } from "@/lib/site-config";

// ─── Types ─────────────────────────────────────────────────────────────────────

type ProjectType =
  | "custom-software"
  | "web-app"
  | "mobile-app"
  | "seo-geo"
  | "automation"
  | "other";

type BudgetRange =
  | "under-1k"
  | "1k-5k"
  | "5k-15k"
  | "15k-50k"
  | "50k-plus"
  | "not-sure";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType | "";
  budget: BudgetRange | "";
  description: string;
  // honeypot — never shown to humans
  _hp: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const PROJECT_TYPES: { value: ProjectType; label: string; desc: string }[] = [
  { value: "custom-software", label: "Custom Software / SaaS", desc: "Admin portals, internal tools, dashboards" },
  { value: "web-app", label: "Web App / Product", desc: "Next.js, React — consumer or B2B products" },
  { value: "mobile-app", label: "Mobile App", desc: "iOS + Android via React Native" },
  { value: "seo-geo", label: "SEO & GEO Systems", desc: "Search visibility + AI engine indexing" },
  { value: "automation", label: "Automations / n8n", desc: "Workflow automation, API integrations" },
  { value: "other", label: "Not sure yet", desc: "Let's figure it out together" },
];

const BUDGET_OPTIONS: { value: BudgetRange; label: string }[] = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 – $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

// ─── Cal.com Booking Embed ──────────────────────────────────────────────────────
// Replace "locallify/discovery" with your actual Cal.com link after setup.
const CAL_LINK = "locallify/discovery";

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const uid = useId();

  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Initialise Cal.com embed API when step 2 is shown
  useEffect(() => {
    if (step !== 2) return;
    (async () => {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [step]);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    description: "",
    _hp: "",
  });

  function updateForm(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function isStep1Valid() {
    return (
      form.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.projectType !== "" &&
      form.budget !== ""
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isStep1Valid()) return;

    // Honeypot check
    if (form._hp) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStep(2);
      setStatus("idle");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const slideVariants = {
    enter: { opacity: 0, x: reduceMotion ? 0 : 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduceMotion ? 0 : -40 },
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Start a Project with Locallify",
            url: `${SITE_URL}/contact`,
            mainEntity: { "@id": `${SITE_URL}/#organization` },
          }).replace(/</g, '\\u003c'),
        }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="pt-36 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 max-w-2xl"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-5 block">
              Start a project
            </span>
            <h1 className="font-display italic text-5xl md:text-7xl leading-[0.9] tracking-tight text-text-primary mb-6">
              Let&apos;s build{" "}
              <span className="text-accent-primary not-italic">something real.</span>
            </h1>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              Tell us about your project, then pick a time for a free 30-minute discovery call.
              We&apos;ll come prepared — no fluff, no sales pitch.
            </p>
          </motion.div>

          {/* Step indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-12"
          >
            {[
              { n: 1, label: "Your project" },
              { n: 2, label: "Book a call" },
            ].map(({ n, label }, idx) => (
              <React.Fragment key={n}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                      step >= n
                        ? "bg-accent-primary text-bg-primary"
                        : "border border-border-default text-text-muted"
                    }`}
                  >
                    {step > n ? <CheckCircle2 className="w-4 h-4" /> : n}
                  </div>
                  <span
                    className={`text-sm font-sans transition-colors duration-300 ${
                      step >= n ? "text-text-primary font-medium" : "text-text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {idx === 0 && (
                  <div
                    className={`flex-1 max-w-16 h-px transition-all duration-500 ${
                      step === 2 ? "bg-accent-primary" : "bg-border-default"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border-default bg-bg-surface/30 min-h-[500px]">
            <AnimatePresence mode="wait" initial={false}>
              {step === 1 ? (
                <motion.div
                  key="step1"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 md:p-12"
                >
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Honeypot (hidden) */}
                    <input
                      type="text"
                      name="_hp"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute opacity-0 pointer-events-none h-0 w-0"
                      value={form._hp}
                      onChange={(e) => updateForm("_hp", e.target.value)}
                      autoComplete="off"
                    />

                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Left column */}
                      <div className="space-y-6">
                        <h2 className="font-sans font-semibold text-lg text-text-primary mb-2">
                          About you
                        </h2>

                        {/* Name */}
                        <div>
                          <label
                            htmlFor={`${uid}-name`}
                            className="block font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2"
                          >
                            Full name *
                          </label>
                          <input
                            id={`${uid}-name`}
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => updateForm("name", e.target.value)}
                            placeholder="Arjun Mehta"
                            className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor={`${uid}-email`}
                            className="block font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2"
                          >
                            Email address *
                          </label>
                          <input
                            id={`${uid}-email`}
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                            placeholder="arjun@company.com"
                            className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all"
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label
                            htmlFor={`${uid}-company`}
                            className="block font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2"
                          >
                            Company / Business <span className="text-text-subtle">(optional)</span>
                          </label>
                          <input
                            id={`${uid}-company`}
                            type="text"
                            value={form.company}
                            onChange={(e) => updateForm("company", e.target.value)}
                            placeholder="Acme Inc."
                            className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all"
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <label
                            htmlFor={`${uid}-description`}
                            className="block font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2"
                          >
                            Tell us about your project <span className="text-text-subtle">(optional)</span>
                          </label>
                          <textarea
                            id={`${uid}-description`}
                            rows={4}
                            value={form.description}
                            onChange={(e) => updateForm("description", e.target.value)}
                            placeholder="We need a dashboard that..."
                            className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-all resize-none"
                          />
                        </div>
                      </div>

                      {/* Right column */}
                      <div className="space-y-6">
                        {/* Project type */}
                        <div>
                          <p className="font-sans font-semibold text-lg text-text-primary mb-4">
                            Project type *
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {PROJECT_TYPES.map((pt) => (
                              <button
                                key={pt.value}
                                type="button"
                                aria-pressed={form.projectType === pt.value}
                                onClick={() => updateForm("projectType", pt.value)}
                                className={`flex items-start gap-3 text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                                  form.projectType === pt.value
                                    ? "border-accent-primary/50 bg-accent-primary/8 text-text-primary"
                                    : "border-border-default bg-bg-elevated text-text-secondary hover:border-border-strong hover:text-text-primary"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 w-3 h-3 rounded-full border-2 shrink-0 transition-colors ${
                                    form.projectType === pt.value
                                      ? "border-accent-primary bg-accent-primary"
                                      : "border-border-strong"
                                  }`}
                                />
                                <span>
                                  <span className="block text-sm font-medium">{pt.label}</span>
                                  <span className="block text-xs text-text-muted mt-0.5">{pt.desc}</span>
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Budget */}
                        <div>
                          <p className="font-sans font-semibold text-sm text-text-primary mb-3">
                            Estimated budget *
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {BUDGET_OPTIONS.map((b) => (
                              <button
                                key={b.value}
                                type="button"
                                aria-pressed={form.budget === b.value}
                                onClick={() => updateForm("budget", b.value)}
                                className={`text-xs px-3 py-2.5 rounded-xl border text-center transition-all duration-200 ${
                                  form.budget === b.value
                                    ? "border-accent-primary/50 bg-accent-primary/8 text-accent-primary font-medium"
                                    : "border-border-default bg-bg-elevated text-text-muted hover:border-border-strong hover:text-text-secondary"
                                }`}
                              >
                                {b.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-semantic-bad/10 border border-semantic-bad/30 text-semantic-bad text-sm"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {errorMsg}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <button
                        type="submit"
                        disabled={!isStep1Valid() || status === "loading"}
                        className="group inline-flex items-center gap-3 h-14 px-10 bg-accent-primary text-bg-primary font-sans font-bold text-sm uppercase tracking-widest rounded-full hover:bg-accent-hover transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Continue to booking
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-text-muted">
                        Or reach us directly at{" "}
                        <a href="mailto:hello@locallifyagency.com" className="text-accent-primary hover:underline">
                          hello@locallifyagency.com
                        </a>
                      </p>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 md:p-12"
                >
                  {/* Success header */}
                  <div className="flex items-start gap-4 mb-10">
                    <div className="w-10 h-10 rounded-full bg-semantic-good/15 border border-semantic-good/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-semantic-good" />
                    </div>
                    <div>
                      <h2 className="font-sans font-semibold text-xl text-text-primary mb-1">
                        Got it, {form.name.split(" ")[0]}!
                      </h2>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        We&apos;ve logged your project details. Now pick a time for your free{" "}
                        <span className="text-text-primary font-medium">30-minute discovery call</span> — we&apos;ll
                        generate a Google Meet link automatically.
                      </p>
                    </div>
                  </div>

                  {/* Cal.com embed */}
                  <div className="rounded-2xl border border-border-default bg-bg-elevated overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-border-default bg-bg-surface/50">
                      <Calendar className="w-4 h-4 text-accent-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                        Book your discovery call
                      </span>
                    </div>

                    <Cal
                      namespace="discovery"
                      calLink={CAL_LINK}
                      style={{ width: "100%", height: "650px", overflow: "scroll" }}
                      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" }}
                    />
                  </div>

                  {/* Skip option */}
                  <p className="mt-6 text-xs text-text-muted text-center">
                    Prefer async?{" "}
                    <a href="mailto:hello@locallifyagency.com" className="text-accent-primary hover:underline">
                      Email us at hello@locallifyagency.com
                    </a>{" "}
                    and we&apos;ll reply within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8 items-center justify-start"
          >
            {[
              "Free 30-min discovery call",
              "No commitment required",
              "Response within 24 hours",
            ].map((trust) => (
              <div key={trust} className="flex items-center gap-2 text-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                {trust}
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
