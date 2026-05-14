import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Services | Locallify",
  description: "From Google Business Mastery to WhatsApp Sales Engines, discover our full suite of digital growth tools for local legends.",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
