import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WorkGallery from "@/components/sections/WorkGallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import { projectService, reviewService } from "@/lib/appwrite-service";
import { Project } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();
export const revalidate = 3600; // Revalidate the home page every hour

export default async function HomePage() {
  let projects: Project[] = [];
  let reviews = [];
  
  try {
    const [projectsData, reviewsData] = await Promise.all([
      projectService.getPublicProjects('completed'),
      reviewService.getPublishedReviews(6) // Fetch latest 6 reviews for home page
    ]);
    projects = projectsData;
    reviews = reviewsData;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
  }

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main>
        <HeroSection />
        <ServicesGrid />
        <WorkGallery initialProjects={projects} />
        <Testimonials reviews={reviews} />
        <Pricing />
      </main>
    </div>
  );
}
