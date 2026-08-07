import { constructMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = constructMetadata({
  title: "Start a Project | Locallify",
  description: "Tell us about your custom software, web app, or mobile app project. Get a reply within 24 hours and book a free 30-minute discovery call.",
  alternates: { canonical: "/contact" },
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
