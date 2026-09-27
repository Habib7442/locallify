import Image from "next/image";
import { CONTACT } from "@/lib/site-config";

/**
 * Sticky bottom bar on phones. The audit form is the primary action for
 * US prospects; WhatsApp is offered as a secondary option.
 */
export default function MobileCtaBar() {
  const whatsappHref = `${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hi Locallify, I saw your industry page and have a question.")}`;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border-subtle bg-bg-primary/95 p-3 backdrop-blur-md md:hidden">
      <a href="#audit" className="btn-primary flex-1">Get my free audit</a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost px-4"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/social-icons/whatsapp.png" alt="" width={20} height={20} className="h-5 w-5" />
      </a>
    </div>
  );
}
