"use client";

import { useId, useMemo, useState } from "react";
import { ArrowDown } from "lucide-react";
import type { CalculatorInput, CalculatorModelId } from "@/content/industries/types";
import { calculate, formatMoney, resultBucket } from "@/content/industries/calculators";
import { track } from "@/lib/track";

export const CALCULATOR_EVENT = "locallify:calculator-result";

export interface CalculatorResultDetail {
  summary: string;
}

interface Props {
  niche: string;
  model: CalculatorModelId;
  inputs: CalculatorInput[];
}

export default function RevenueCalculator({ niche, model, inputs }: Props) {
  const id = useId();
  const [values, setValues] = useState<Record<string, number>>(
    () => Object.fromEntries(inputs.map((input) => [input.key, input.default]))
  );

  const result = useMemo(() => calculate(model, values), [model, values]);

  const handleUse = () => {
    const summary =
      `${result.monthlyLabel}: ${formatMoney(result.monthly)}; ${result.yearlyLabel}: ${formatMoney(result.yearly)} ` +
      `(${inputs.map((input) => `${input.label}: ${input.prefix ?? ""}${values[input.key]}${input.suffix ?? ""}`).join(", ")})`;
    window.dispatchEvent(new CustomEvent<CalculatorResultDetail>(CALCULATOR_EVENT, { detail: { summary } }));
    track("calculator_used", { niche, result_bucket: resultBucket(result.yearly) });
    track("cta_click", { niche, section: "calculator" });
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
          Example numbers — enter your own
        </p>
        {inputs.map((input) => {
          const inputId = `${id}-${input.key}`;
          return (
            <div key={input.key} className="space-y-2">
              <label htmlFor={inputId} className="block text-sm font-medium text-text-primary">
                {input.label}
              </label>
              <div className="flex items-center rounded-xl border border-border-default bg-bg-surface focus-within:border-accent-primary">
                {input.prefix && <span className="pl-4 text-text-muted" aria-hidden="true">{input.prefix}</span>}
                <input
                  id={inputId}
                  type="number"
                  inputMode="decimal"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={Number.isFinite(values[input.key]) ? values[input.key] : ""}
                  onChange={(e) => setValues((prev) => ({ ...prev, [input.key]: e.target.valueAsNumber }))}
                  className="h-12 w-full bg-transparent px-4 text-base text-text-primary outline-none"
                />
                {input.suffix && <span className="pr-4 text-text-muted" aria-hidden="true">{input.suffix}</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-border-default bg-bg-surface p-8" aria-live="polite">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-text-muted">{result.monthlyLabel}</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-text-primary">{formatMoney(result.monthly)}</p>
          </div>
          <div>
            <p className="text-sm text-text-muted">{result.yearlyLabel}</p>
            <p className="mt-1 text-5xl font-bold tracking-tight text-accent-primary">{formatMoney(result.yearly)}</p>
          </div>
          {result.breakdown && (
            <dl className="space-y-2 border-t border-border-subtle pt-4 text-sm">
              {result.breakdown.map((line) => (
                <div key={line.label} className="flex justify-between gap-4">
                  <dt className="text-text-secondary">{line.label}</dt>
                  <dd className="font-medium text-text-primary">{formatMoney(line.value)}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="text-xs text-text-muted">Estimate only, based on the numbers you enter.</p>
        </div>
        <button type="button" onClick={handleUse} className="btn-primary mt-8 w-full gap-2">
          Calculate my lost revenue
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
