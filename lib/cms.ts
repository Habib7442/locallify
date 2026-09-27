import { sanityClient, sanityWriteClient } from './sanity';
import { Project, BusinessProfile, Review, BlogPost } from './types';
import { fallbackProfiles } from './data/profiles';
import { fallbackReviews } from './data/reviews';
import { fallbackProjects } from './data/case-studies';
import { fallbackPosts } from './data/articles';

// Helper to parse Sanity Image references into direct CDN URLs without heavy dependencies
export function getSanityImageUrl(source: any): string {
  if (!source) return '';

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'm1xmm50m';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

  // Already a full URL
  if (typeof source === 'string' && (source.startsWith('http') || source.startsWith('/'))) {
    return source;
  }

  // Plain string asset ID: "image-abc123-1280x720-png"
  if (typeof source === 'string' && source.startsWith('image-')) {
    const parts = source.split('-');
    if (parts.length >= 4) {
      const id = parts[1];
      const dimensions = parts[2];
      const extension = parts[3];
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${extension}`;
    }
    return '';
  }

  // Sanity image object: { asset: { _ref: "image-abc123-1280x720-png" } }
  const assetRef = source?.asset?._ref || source?._ref;
  if (assetRef) {
    try {
      const parts = assetRef.split('-');
      if (parts.length < 4) return '';
      const id = parts[1];
      const dimensions = parts[2];
      const extension = parts[3];
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${extension}`;
    } catch (e) {
      console.error('Error parsing Sanity image reference:', e);
      return '';
    }
  }

  // Sanity image object with direct url
  if (source?.url) return source.url;

  return '';
}


/** CMS durations are typed by hand ("4 Weeks", "2 weeks") — render units in lowercase so every card reads the same. */
function normalizeDuration(duration: string): string {
  return (duration || '').replace(/\b(Days?|Weeks?|Months?)\b/g, (unit) => unit.toLowerCase());
}

// ─── PROFILE SERVICE ───────────────────────────────────────────
export const profileService = {
  // Get all public profiles
  async getPublicProfiles(): Promise<BusinessProfile[]> {
    try {
      const query = `*[_type == "businessProfile" && is_public == true && is_active == true] | order(_createdAt desc)`;
      const sanityData = await sanityClient.fetch(query);
      if (sanityData && sanityData.length > 0) {
        return sanityData.map((doc: any) => ({
          slug: (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          business_name: doc.business_name,
          business_category: doc.business_category,
          owner_name: doc.owner_name,
          phone_number: doc.phone_number,
          whatsapp_number: doc.whatsapp_number,
          email_address: doc.email_address,
          full_address: doc.full_address,
          business_hours: doc.business_hours,
          bio: doc.bio,
          logo: getSanityImageUrl(doc.logo),
          cover: getSanityImageUrl(doc.cover),
          product_photos: doc.product_photos?.map((img: any) => getSanityImageUrl(img)) || [],
          instagram_handle: doc.instagram_handle,
          facebook_page_link: doc.facebook_page_link,
          google_review_link: doc.google_review_link,
          is_public: doc.is_public,
          is_verified: doc.is_verified,
          is_active: doc.is_active,
        }));
      }
    } catch (error) {
      console.error("Failed fetching profiles from Sanity, using fallback data:", error);
      return fallbackProfiles;
    }
    return [];
  },

  // Get single profile by slug
  async getProfileBySlug(slug: string): Promise<BusinessProfile | null> {
    try {
      const query = `*[_type == "businessProfile" && is_public == true && is_active == true && (slug == $slug || slug.current == $slug)][0]`;
      const doc = await sanityClient.fetch(query, { slug });
      if (doc) {
        return {
          slug: (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          business_name: doc.business_name,
          business_category: doc.business_category,
          owner_name: doc.owner_name,
          phone_number: doc.phone_number,
          whatsapp_number: doc.whatsapp_number,
          email_address: doc.email_address,
          full_address: doc.full_address,
          business_hours: doc.business_hours,
          bio: doc.bio,
          logo: getSanityImageUrl(doc.logo),
          cover: getSanityImageUrl(doc.cover),
          product_photos: doc.product_photos?.map((img: any) => getSanityImageUrl(img)) || [],
          instagram_handle: doc.instagram_handle,
          facebook_page_link: doc.facebook_page_link,
          google_review_link: doc.google_review_link,
          is_public: doc.is_public,
          is_verified: doc.is_verified,
          is_active: doc.is_active,
        };
      }
    } catch (error) {
      console.error(`Failed fetching profile ${slug} from Sanity, using fallback lookup:`, error);
    }
    
    const fallback = fallbackProfiles.find(p => p.slug === slug);
    return fallback || null;
  },

  // Check if slug is available
  async checkSlugAvailability(slug: string): Promise<'idle' | 'available' | 'taken' | 'error'> {
    if (!slug || slug.length < 3) return 'idle';
    try {
      // Direct count check in Sanity
      const query = `count(*[_type == "businessProfile" && (slug == $slug || slug.current == $slug)])`;
      const count = await sanityClient.fetch(query, { slug });
      return count > 0 ? 'taken' : 'available';
    } catch (error) {
      console.error("Failed checking slug in Sanity:", error);
      return 'error';
    }
  },

  // Upload file to Sanity Assets
  async uploadFile(file: File): Promise<string> {
    try {
      const asset = await sanityWriteClient.assets.upload('image', file);
      return asset._id;
    } catch (error) {
      console.error('Error uploading asset to Sanity:', error);
      throw error;
    }
  },

  // Compatibility helper returning image URL directly
  getFileUrl(fileIdOrUrl: string) {
    if (!fileIdOrUrl) return '/placeholder.jpg';
    if (fileIdOrUrl.startsWith('http') || fileIdOrUrl.startsWith('/')) return fileIdOrUrl;
    
    // Build direct CDN url for asset IDs
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'm1xmm50m';
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const parts = fileIdOrUrl.split('-');
    if (parts.length >= 4) {
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${parts[1]}-${parts[2]}.${parts[3]}`;
    }
    return '/placeholder.jpg';
  },

  // Create new profile directly in Sanity
  async createProfile(
    data: Omit<BusinessProfile, 'is_public' | 'is_verified' | 'is_active'>, 
    logoFile?: File | null, 
    coverFile?: File | null
  ): Promise<BusinessProfile> {
    try {
      let logoRef = undefined;
      let coverRef = undefined;

      if (logoFile) {
        const logoId = await this.uploadFile(logoFile);
        logoRef = { _type: 'image', asset: { _ref: logoId, _type: 'reference' } };
      }
      if (coverFile) {
        const coverId = await this.uploadFile(coverFile);
        coverRef = { _type: 'image', asset: { _ref: coverId, _type: 'reference' } };
      }

      const doc = {
        _type: 'businessProfile',
        business_name: data.business_name,
        slug: { _type: 'slug', current: data.slug.toLowerCase() },
        business_category: data.business_category,
        owner_name: data.owner_name,
        phone_number: data.phone_number,
        whatsapp_number: data.whatsapp_number,
        email_address: data.email_address,
        full_address: data.full_address,
        business_hours: data.business_hours,
        bio: data.bio,
        logo: logoRef,
        cover: coverRef,
        product_photos: [],
        instagram_handle: data.instagram_handle,
        facebook_page_link: data.facebook_page_link,
        google_review_link: data.google_review_link,
        is_public: false,
        is_verified: false,
        is_active: true,
      };

      const response = await sanityWriteClient.create(doc);
      return {
        slug: (typeof response.slug === 'object' ? response.slug?.current : response.slug) || '',
        business_name: response.business_name,
        business_category: response.business_category,
        owner_name: response.owner_name,
        phone_number: response.phone_number,
        whatsapp_number: response.whatsapp_number,
        email_address: response.email_address,
        full_address: response.full_address,
        business_hours: response.business_hours,
        bio: response.bio,
        is_public: response.is_public,
        is_verified: response.is_verified,
        is_active: response.is_active,
      };
    } catch (error) {
      console.error('Error creating profile document in Sanity:', error);
      throw error;
    }
  }
};

// ─── PROJECT / CASE STUDY SERVICE ──────────────────────────────
export const projectService = {
  // Get all public projects
  async getPublicProjects(status?: 'ongoing' | 'completed'): Promise<Project[]> {
    try {
      let query = `*[_type == "project" && is_public == true] | order(displayOrder asc, _createdAt desc)`;
      if (status) {
        query = `*[_type == "project" && is_public == true && status == $status] | order(displayOrder asc, _createdAt desc)`;
      }
      const sanityData = await sanityClient.fetch(query, status ? { status } : {});
      if (sanityData && sanityData.length > 0) {
        return sanityData.map((doc: any) => ({
          $id: doc._id || (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          $updatedAt: doc._updatedAt,
          title: doc.title,
          slug: (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          clientName: doc.clientName,
          clientLocation: doc.clientLocation,
          clientWebsite: doc.clientWebsite,
          industry: doc.industry,
          category: doc.category,
          status: doc.status,
          duration: normalizeDuration(doc.duration),
          completionDate: doc.completionDate,
          myRole: doc.myRole,
          teamSize: doc.teamSize,
          technologies: doc.technologies || [],
          tags: doc.tags || [],
          live_url: doc.live_url,
          description: doc.description,
          
          heroTitle: doc.heroTitle,
          heroSubtitle: doc.heroSubtitle,
          overview: doc.overview,
          problemSummary: doc.problemSummary,
          goals: doc.goals || [],
          solution: doc.solution,
          keyFeatures: doc.keyFeatures || [],
          results: doc.results || [],
          
          thumbnail: getSanityImageUrl(doc.thumbnail),
          clientLogo: getSanityImageUrl(doc.clientLogo),
          heroBannerImage: getSanityImageUrl(doc.heroBannerImage),
          gallery: doc.gallery?.map((img: any) => ({
            image: getSanityImageUrl(img.image),
            caption: img.caption
          })) || [],
          
          metaTitle: doc.metaTitle,
          metaDescription: doc.metaDescription,
          canonicalUrl: doc.canonicalUrl,
          metaKeywords: doc.metaKeywords || [],
          robotsRule: doc.robotsRule,
          enableLocalSeo: doc.enableLocalSeo,
          gbpUrl: doc.gbpUrl,
          mapsEmbedUrl: doc.mapsEmbedUrl,
          localKeywords: doc.localKeywords || [],
          targetAreas: doc.targetAreas || [],
          napConsistency: doc.napConsistency,
          enableAiOptimization: doc.enableAiOptimization,
          agenticSummary: doc.agenticSummary,
          agentInstructions: doc.agentInstructions,
          
          lighthouseDesktop: doc.lighthouseDesktop ? {
            screenshot: getSanityImageUrl(doc.lighthouseDesktop.screenshot),
            performance: doc.lighthouseDesktop.performance,
            accessibility: doc.lighthouseDesktop.accessibility,
            bestPractices: doc.lighthouseDesktop.bestPractices,
            seo: doc.lighthouseDesktop.seo
          } : undefined,
          lighthouseMobile: doc.lighthouseMobile ? {
            screenshot: getSanityImageUrl(doc.lighthouseMobile.screenshot),
            performance: doc.lighthouseMobile.performance,
            accessibility: doc.lighthouseMobile.accessibility,
            bestPractices: doc.lighthouseMobile.bestPractices,
            seo: doc.lighthouseMobile.seo
          } : undefined,
          scClicks: doc.scClicks,
          scImpressions: doc.scImpressions,
          scCtr: doc.scCtr,
          scPosition: doc.scPosition,
          scIndexedPages: doc.scIndexedPages,
          scPerformanceScreenshot: getSanityImageUrl(doc.scPerformanceScreenshot),
          scCoreWebVitalsScreenshot: getSanityImageUrl(doc.scCoreWebVitalsScreenshot),
          
          featured: doc.featured,
          is_public: doc.is_public,
          displayOrder: doc.displayOrder,
          testimonial: doc.testimonial ? {
            rating: doc.testimonial.rating,
            clientName: doc.testimonial.clientName,
            company: doc.testimonial.company,
            designation: doc.testimonial.designation,
            photo: getSanityImageUrl(doc.testimonial.photo),
            testimonial: doc.testimonial.testimonial,
            sourceUrl: doc.testimonial.sourceUrl,
          } : undefined,
          cta: doc.cta,
          faq: doc.faq || []
        }));
      }
    } catch (error) {
      console.error("Failed fetching projects from Sanity, using fallback data:", error);
      return status 
        ? fallbackProjects.filter(p => p.status === status)
        : fallbackProjects;
    }
    return [];
  },

  // Get project details by slug
  async getProjectBySlug(slug: string): Promise<Project | null> {
    try {
      const query = `*[_type == "project" && is_public == true && (slug == $slug || slug.current == $slug)][0]`;
      const doc = await sanityClient.fetch(query, { slug });
      if (doc) {
        return {
          $id: doc._id || (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          $updatedAt: doc._updatedAt,
          title: doc.title,
          slug: (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          clientName: doc.clientName,
          clientLocation: doc.clientLocation,
          clientWebsite: doc.clientWebsite,
          industry: doc.industry,
          category: doc.category,
          status: doc.status,
          duration: normalizeDuration(doc.duration),
          completionDate: doc.completionDate,
          myRole: doc.myRole,
          teamSize: doc.teamSize,
          technologies: doc.technologies || [],
          tags: doc.tags || [],
          live_url: doc.live_url,
          description: doc.description,
          
          heroTitle: doc.heroTitle,
          heroSubtitle: doc.heroSubtitle,
          overview: doc.overview,
          problemSummary: doc.problemSummary,
          goals: doc.goals || [],
          solution: doc.solution,
          keyFeatures: doc.keyFeatures || [],
          results: doc.results || [],
          
          thumbnail: getSanityImageUrl(doc.thumbnail),
          clientLogo: getSanityImageUrl(doc.clientLogo),
          heroBannerImage: getSanityImageUrl(doc.heroBannerImage),
          gallery: doc.gallery?.map((img: any) => ({
            image: getSanityImageUrl(img.image),
            caption: img.caption
          })) || [],
          
          metaTitle: doc.metaTitle,
          metaDescription: doc.metaDescription,
          canonicalUrl: doc.canonicalUrl,
          metaKeywords: doc.metaKeywords || [],
          robotsRule: doc.robotsRule,
          enableLocalSeo: doc.enableLocalSeo,
          gbpUrl: doc.gbpUrl,
          mapsEmbedUrl: doc.mapsEmbedUrl,
          localKeywords: doc.localKeywords || [],
          targetAreas: doc.targetAreas || [],
          napConsistency: doc.napConsistency,
          enableAiOptimization: doc.enableAiOptimization,
          agenticSummary: doc.agenticSummary,
          agentInstructions: doc.agentInstructions,
          
          lighthouseDesktop: doc.lighthouseDesktop ? {
            screenshot: getSanityImageUrl(doc.lighthouseDesktop.screenshot),
            performance: doc.lighthouseDesktop.performance,
            accessibility: doc.lighthouseDesktop.accessibility,
            bestPractices: doc.lighthouseDesktop.bestPractices,
            seo: doc.lighthouseDesktop.seo
          } : undefined,
          lighthouseMobile: doc.lighthouseMobile ? {
            screenshot: getSanityImageUrl(doc.lighthouseMobile.screenshot),
            performance: doc.lighthouseMobile.performance,
            accessibility: doc.lighthouseMobile.accessibility,
            bestPractices: doc.lighthouseMobile.bestPractices,
            seo: doc.lighthouseMobile.seo
          } : undefined,
          scClicks: doc.scClicks,
          scImpressions: doc.scImpressions,
          scCtr: doc.scCtr,
          scPosition: doc.scPosition,
          scIndexedPages: doc.scIndexedPages,
          scPerformanceScreenshot: getSanityImageUrl(doc.scPerformanceScreenshot),
          scCoreWebVitalsScreenshot: getSanityImageUrl(doc.scCoreWebVitalsScreenshot),
          
          featured: doc.featured,
          is_public: doc.is_public,
          displayOrder: doc.displayOrder,
          testimonial: doc.testimonial ? {
            rating: doc.testimonial.rating,
            clientName: doc.testimonial.clientName,
            company: doc.testimonial.company,
            designation: doc.testimonial.designation,
            photo: getSanityImageUrl(doc.testimonial.photo),
            testimonial: doc.testimonial.testimonial,
            sourceUrl: doc.testimonial.sourceUrl,
          } : undefined,
          cta: doc.cta,
          faq: doc.faq || []
        };
      }
    } catch (error) {
      console.error(`Failed fetching project ${slug} from Sanity, using fallback lookup:`, error);
    }
    
    const fallback = fallbackProjects.find(p => p.slug === slug);
    return fallback || null;
  },

  // Compatibility helper returning image URL directly
  getThumbnailUrl(fileIdOrUrl: string) {
    if (!fileIdOrUrl) return '/placeholder-project.jpg';
    if (fileIdOrUrl.startsWith('http') || fileIdOrUrl.startsWith('/')) return fileIdOrUrl;
    
    // Build direct CDN url for asset IDs
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'm1xmm50m';
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const parts = fileIdOrUrl.split('-');
    if (parts.length >= 4) {
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${parts[1]}-${parts[2]}.${parts[3]}`;
    }
    return '/placeholder-project.jpg';
  }
};

// ─── REVIEW SERVICE ────────────────────────────────────────────
export const reviewService = {
  // Get only published reviews
  async getPublishedReviews(limit: number = 100): Promise<Review[]> {
    try {
      const query = `*[_type == "review" && is_published == true] | order(_createdAt desc)[0...$limit]`;
      const sanityData = await sanityClient.fetch(query, { limit });
      if (sanityData && sanityData.length > 0) {
        return sanityData.map((doc: any) => ({
          $id: doc._id,
          $createdAt: doc._createdAt,
          name: doc.name,
          review: doc.review,
          rating: doc.rating,
          role: doc.role,
          is_verified: doc.is_verified ?? false,
          sourceUrl: doc.sourceUrl,
          is_published: doc.is_published,
        }));
      }
    } catch (error) {
      console.error("Failed fetching reviews from Sanity, using fallback data:", error);
      return fallbackReviews.slice(0, limit);
    }
    // No published reviews in Sanity yet — fall back to the static client quotes.
    return fallbackReviews.slice(0, limit);
  }
};

// ─── BLOG SERVICE ──────────────────────────────────────────────
/**
 * The shipped articles in lib/data/articles.ts aren't in Sanity yet. Serve
 * them alongside CMS posts (Sanity wins on slug clashes) so /blog, the
 * sitemap, and static params all list the same set of URLs.
 * TODO(owner): migrate the shipped articles into Sanity, then drop this.
 */
function mergeWithFallbackPosts(sanityPosts: BlogPost[]): BlogPost[] {
  const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
  return [...sanityPosts, ...fallbackPosts.filter((p) => !sanitySlugs.has(p.slug))]
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
}

export const blogService = {
  // Get all published blog posts, most recent first
  async getPublishedPosts(): Promise<BlogPost[]> {
    try {
      const query = `*[_type == "blog" && status == "published"] | order(publishedAt desc)`;
      const sanityData = await sanityClient.fetch(query);
      if (sanityData && sanityData.length > 0) {
        return mergeWithFallbackPosts(sanityData.map((doc: any) => ({
          $id: doc._id,
          $createdAt: doc._createdAt,
          updatedAt: doc._updatedAt,
          title: doc.title,
          slug: (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          excerpt: doc.excerpt,
          author: doc.author,
          authorImage: getSanityImageUrl(doc.authorImage),
          category: doc.category,
          tags: doc.tags || [],
          status: doc.status,
          featured: doc.featured,
          publishedAt: doc.publishedAt,
          coverImage: getSanityImageUrl(doc.coverImage),
          content: doc.content,
          readingTime: doc.readingTime,
          metaTitle: doc.metaTitle,
          metaDescription: doc.metaDescription,
          metaKeywords: doc.metaKeywords || [],
          canonicalUrl: doc.canonicalUrl,
          robotsRule: doc.robotsRule,
          ogImage: getSanityImageUrl(doc.ogImage),
        })));
      }
    } catch (error) {
      console.error("Failed fetching blog posts from Sanity, using fallback data:", error);
      return fallbackPosts;
    }
    // No published posts in Sanity yet — fall back to the shipped articles
    // so /blog never renders empty.
    return fallbackPosts;
  },

  // Get single published post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const query = `*[_type == "blog" && status == "published" && (slug.current == $slug || slug == $slug)][0]`;
      const doc = await sanityClient.fetch(query, { slug });
      if (doc) {
        return {
          $id: doc._id,
          $createdAt: doc._createdAt,
          updatedAt: doc._updatedAt,
          title: doc.title,
          slug: (typeof doc.slug === 'object' ? doc.slug?.current : doc.slug) || '',
          excerpt: doc.excerpt,
          author: doc.author,
          authorImage: getSanityImageUrl(doc.authorImage),
          category: doc.category,
          tags: doc.tags || [],
          status: doc.status,
          featured: doc.featured,
          publishedAt: doc.publishedAt,
          coverImage: getSanityImageUrl(doc.coverImage),
          content: doc.content,
          readingTime: doc.readingTime,
          metaTitle: doc.metaTitle,
          metaDescription: doc.metaDescription,
          metaKeywords: doc.metaKeywords || [],
          canonicalUrl: doc.canonicalUrl,
          robotsRule: doc.robotsRule,
          ogImage: getSanityImageUrl(doc.ogImage),
        };
      }
    } catch (error) {
      console.error(`Failed fetching blog post ${slug} from Sanity, using fallback lookup:`, error);
    }

    const fallback = fallbackPosts.find((p) => p.slug === slug);
    return fallback || null;
  },
};
