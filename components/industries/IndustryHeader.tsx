import Image from "next/image";
import Link from "next/link";

/**
 * Minimal header for industry landing pages: logo, a quiet link back to the
 * main site, and one CTA. The full nav is intentionally hidden here.
 */
export default function IndustryHeader({ slug }: { slug: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-bg-primary/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-5">
          <Link href="/" aria-label="Locallify home">
            <Image src="/locallify_dark.svg" alt="Locallify" width={140} height={40} className="h-7 w-auto" />
          </Link>
          <Link href="/" className="hidden text-xs text-text-muted hover:text-text-primary sm:inline">
            ← locallifyagency.com
          </Link>
        </div>
        <a href="#audit" data-cta="header" data-niche={slug} className="btn-primary px-4 py-2 text-xs sm:text-sm">
          Get my free audit
        </a>
      </div>
    </header>
  );
}
