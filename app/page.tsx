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
import { SITE_URL } from "@/lib/site-config";
import { faqPageJsonLd, localBusinessJsonLd } from "@/lib/structured-data";
import { mergeTestimonials } from "@/lib/testimonials";

export const metadata = constructMetadata({
  alternates: { canonical: "/" },
});
export const revalidate = 3600; // Revalidate the home page every hour

const homeFaqs = [
  { question: "Who owns the code and IP?", answer: "You do. We can maintain it, but the product belongs to your company." },
  { question: "How long does a project take?", answer: "Landing pages can move in days. Web apps and mobile apps usually run in milestone-based sprints." },
];

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#software-development`,
        "name": "Custom software, web app, and mobile app development",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": ["Silchar", "India", "Worldwide"],
        "serviceType": "Software development with SEO and Generative Engine Optimization"
      },
      localBusinessJsonLd({ includeAggregateRating: true }),
      faqPageJsonLd(homeFaqs),
    ]
  };

  let projects: Project[] = [];
  let reviews: Review[] = [];
  
  try {
    // Fetch data with a Promise.all but handle individual failures gracefully
    const [projectsData, reviewsData] = await Promise.allSettled([
      projectService.getPublicProjects('completed'),
      reviewService.getPublishedReviews()
    ]);

    if (projectsData.status === 'fulfilled') projects = projectsData.value;

    if (reviewsData.status === 'fulfilled') reviews = reviewsData.value;
  } catch {
    projects = [];
    reviews = [];
  }

  const testimonials = mergeTestimonials(projects, reviews);

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
        <Testimonials testimonials={testimonials} />
        <FinalCTA />
      </main>
    </div>
  );
}
