import React from "react";
import { constructMetadata } from "@/lib/seo";
import AboutPageClient from "@/components/AboutPageClient";
import Navbar from "@/components/Navbar";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = constructMetadata({
  title: "About Locallify | Software Studio in Silchar, Assam",
  description: "Locallify is a software studio based in Silchar, Assam, building custom software, web apps, and mobile apps for clients across India and worldwide.",
  alternates: { canonical: "/about" },
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "About Locallify",
        "description": "Locallify is a software studio based in Silchar, Assam, building custom software, web apps, and mobile apps for clients across India and worldwide.",
        "url": `${SITE_URL}/about`,
        "mainEntity": { "@id": `${SITE_URL}/#organization` },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
        <Navbar />

        <main id="main-content">
          <AboutPageClient />
          <Process />
          <FinalCTA />
        </main>
      </div>
    </>
  );
}
