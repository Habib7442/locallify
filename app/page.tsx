import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WorkGallery from "@/components/sections/WorkGallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import SeoGeoEdge from "@/components/sections/SeoGeoEdge";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import { projectService, reviewService } from "@/lib/cms";
import { Project, Review } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();
export const revalidate = 3600; // Revalidate the home page every hour

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://locallifyagency.com/#organization",
        "name": "Locallify",
        "url": "https://locallifyagency.com",
        "logo": "https://locallifyagency.com/locallify_dark.svg",
        "description": "Locallify is a global software studio building custom software, web apps, mobile apps, AI features, and SEO + GEO systems.",
        "sameAs": [
          "https://instagram.com/locallify.in",
          "https://www.facebook.com/profile.php?id=61592029269964",
          "https://www.linkedin.com/company/locallifyagency/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://locallifyagency.com/#website",
        "url": "https://locallifyagency.com",
        "name": "Locallify",
        "publisher": { "@id": "https://locallifyagency.com/#organization" }
      },
      {
        "@type": "Service",
        "@id": "https://locallifyagency.com/#software-development",
        "name": "Custom software, web app, and mobile app development",
        "provider": { "@id": "https://locallifyagency.com/#organization" },
        "areaServed": "Worldwide",
        "serviceType": "Software development with SEO and Generative Engine Optimization"
      }
    ]
  };

  let projects: Project[] = [];
  let reviews: Review[] = [];
  
  try {
    // Fetch data with a Promise.all but handle individual failures gracefully
    const [projectsData, reviewsData] = await Promise.allSettled([
      projectService.getPublicProjects('completed'),
      reviewService.getPublishedReviews(6)
    ]);

    if (projectsData.status === 'fulfilled') projects = projectsData.value;

    if (reviewsData.status === 'fulfilled') reviews = reviewsData.value;
  } catch {
    projects = [];
    reviews = [];
  }

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
      >
        Skip to content
      </a>
      
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <WorkGallery initialProjects={projects} />
        <ServicesGrid />
        <SeoGeoEdge />
        <Process />
        <Pricing />
        <Testimonials reviews={reviews} />
        <FinalCTA />
      </main>
    </div>
  );
}
