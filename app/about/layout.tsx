import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us | Locallify",
  description: "Modernizing the street. Discover the mission behind Locallify and how we're bringing elite digital presence to every corner of India.",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
