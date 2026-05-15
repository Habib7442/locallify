import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WorkGallery from "@/components/sections/WorkGallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import { projectService, reviewService } from "@/lib/appwrite-service";
import { Project, Review } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();
export const revalidate = 3600; // Revalidate the home page every hour

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Locallify",
    "url": "https://locallify.in",
    "logo": "https://locallify.in/logo2.png",
    "description": "Modernizing the street with elite digital presence for local businesses in India.",
    "sameAs": [
      "https://instagram.com/locallify.in"
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

    if (projectsData.status === 'fulfilled') {
      projects = projectsData.value;
    } else {
      console.error("Appwrite timeout or error fetching projects:", projectsData.reason);
    }

    if (reviewsData.status === 'fulfilled') {
      reviews = reviewsData.value;
    } else {
      console.error("Appwrite timeout or error fetching reviews:", reviewsData.reason);
    }
  } catch (error) {
    console.error("Unexpected failure in home page data fetch sequence:", error);
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
        <ServicesGrid />
        <WorkGallery initialProjects={projects} />
        <Testimonials reviews={reviews} />
        <Pricing />
      </main>
    </div>
  );
}
