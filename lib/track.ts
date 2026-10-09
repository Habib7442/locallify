import posthog from "posthog-js";

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (command: "event", event: string, params?: Props) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fire an analytics event to PostHog (initialised in instrumentation-client.ts)
 * and to any other tool on the page (Plausible, GA4 or a GTM dataLayer).
 * Events: calculator_used, cta_click, form_submit.
 */
export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  try {
    if (posthog.__loaded) posthog.capture(event, props);
    window.plausible?.(event, { props });
    window.gtag?.("event", event, props);
    window.dataLayer?.push({ event, ...props });
  } catch {
    // Analytics must never break the page.
  }
}
