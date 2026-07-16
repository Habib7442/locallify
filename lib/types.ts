export interface BusinessProfile {
  $id?: string;
  $createdAt?: string;
  slug: string;
  business_name: string;
  business_category: string;
  owner_name: string;
  phone_number: string;
  whatsapp_number: string;
  email_address: string;
  full_address: string;
  business_hours: string; // JSON string or plain text
  bio: string;
  logo_id?: string;  // Appwrite compatibility
  cover_id?: string; // Appwrite compatibility
  logo?: string;      // Sanity URL compatibility
  cover?: string;     // Sanity URL compatibility
  product_photo_ids?: string[];
  product_photos?: string[];
  instagram_handle?: string;
  facebook_page_link?: string;
  google_review_link?: string;
  is_public: boolean;
  is_verified: boolean;
  is_active: boolean;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface ProjectResult {
  title: string;
  description: string;
}

export interface LighthouseMetrics {
  screenshot?: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface Testimonial {
  rating: number;
  clientName: string;
  company: string;
  designation: string;
  photo?: string;
  testimonial: string;
}

export interface ProjectCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Project {
  // Tab 1: Basic Info
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  title: string;
  slug: string;
  clientName: string;
  clientLocation: string;
  clientWebsite?: string;
  industry: string;
  category: string;
  status: 'ongoing' | 'completed';
  duration: string;
  completionDate?: string;
  myRole: string;
  teamSize: number;
  technologies: string[];
  tags: string[];
  live_url?: string;
  description: string;

  // Tab 2: Case Study Narrative
  heroTitle?: string;
  heroSubtitle?: string;
  overview?: string;
  problemSummary?: string;
  goals?: string[];
  solution?: string;
  keyFeatures?: KeyFeature[];
  results?: ProjectResult[];

  // Tab 3: Media
  thumbnail: string; // URL or File ID
  clientLogo?: string;
  heroBannerImage?: string;
  gallery?: { image: string; caption?: string }[];

  // Tab 4: SEO
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  metaKeywords?: string[];
  robotsRule?: string;
  enableLocalSeo?: boolean;
  gbpUrl?: string;
  mapsEmbedUrl?: string;
  localKeywords?: string[];
  targetAreas?: string[];
  napConsistency?: string;
  enableAiOptimization?: boolean;
  agenticSummary?: string;
  agentInstructions?: string;

  // Tab 5: Performance
  lighthouseDesktop?: LighthouseMetrics;
  lighthouseMobile?: LighthouseMetrics;
  scClicks?: number;
  scImpressions?: number;
  scCtr?: number;
  scPosition?: number;
  scIndexedPages?: number;
  scPerformanceScreenshot?: string;
  scCoreWebVitalsScreenshot?: string;

  // Tab 6: Config
  featured?: boolean;
  is_public: boolean;
  displayOrder?: number;
  testimonial?: Testimonial;
  cta?: ProjectCTA;
  faq?: FAQItem[];
}

export interface Review {
  $id?: string;
  $createdAt?: string;
  name: string;
  review: string;
  rating: number;
  is_published: boolean;
}
