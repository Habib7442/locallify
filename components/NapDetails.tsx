import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, GSTIN, LEGAL_NAME, NAP } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Visible name / address / phone, rendered from the same site-config values
 * as the LocalBusiness JSON-LD so the markup always matches what's on screen.
 */
export default function NapDetails({ className }: { className?: string }) {
  return (
    <address className={cn("not-italic space-y-3 text-sm text-text-secondary", className)}>
      <p className="font-medium text-text-primary">
        {LEGAL_NAME}
        {GSTIN && (
          <span className="block mt-1 font-mono text-xs font-normal tracking-wider text-text-muted">
            GSTIN: {GSTIN}
          </span>
        )}
      </p>
      <a
        href={NAP.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-2.5 hover:text-text-primary transition-colors"
      >
        <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-primary" aria-hidden="true" />
        <span>{NAP.full}</span>
      </a>
      <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2.5 hover:text-text-primary transition-colors">
        <Phone className="h-4 w-4 shrink-0 text-accent-primary" aria-hidden="true" />
        <span>{CONTACT.phoneDisplay}</span>
      </a>
      <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-text-primary transition-colors">
        <Mail className="h-4 w-4 shrink-0 text-accent-primary" aria-hidden="true" />
        <span>{CONTACT.email}</span>
      </a>
    </address>
  );
}
