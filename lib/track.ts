type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (command: "event", event: string, params?: Props) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fire an analytics event to whichever tool is installed (Plausible, GA4 or
 * a GTM dataLayer). No analytics script is on the site yet, so this is a
 * no-op until one is added — the event calls are already in place.
 * TODO(owner): pick an analytics tool; events: calculator_used, cta_click,
 * form_submit.
 */
export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, { props });
    window.gtag?.("event", event, props);
    window.dataLayer?.push({ event, ...props });
  } catch {
    // Analytics must never break the page.
  }
}
