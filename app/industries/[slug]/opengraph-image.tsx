import { ImageResponse } from "next/og";
import { getIndustryPage, industryPages } from "@/content/industries";

export const alt = "Locallify industry website design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIndustryPage(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0A0A0E",
          color: "#EFEFF2",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#0066FF", letterSpacing: 4 }}>
          LOCALLIFY · {page?.niche.toUpperCase() ?? "INDUSTRIES"}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          {page?.hero.headline ?? "Websites built for your industry"}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#B4B4BE" }}>
          {page?.serviceName ?? ""} · Free lead-leak audit
        </div>
      </div>
    ),
    size
  );
}
