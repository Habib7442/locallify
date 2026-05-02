import { tablesDB, storage, Query, ID } from './appwrite';
import { BusinessProfile, Project, Review } from './types';

const DATABASE_ID = 'locallify_pages_db';
const COLLECTION_ID = 'profiles';
const PROJECTS_COLLECTION_ID = 'projects';
const REVIEWS_COLLECTION_ID = 'reviews';
const BUCKET_ID = 'business-assets';

export const profileService = {
  // Get all public profiles
  async getPublicProfiles(): Promise<BusinessProfile[]> {
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        queries: [
          Query.equal('is_public', true),
          Query.equal('is_active', true),
          Query.orderDesc('$createdAt')
        ]
      });
      return response.rows.map(row => ({ ...row })) as unknown as BusinessProfile[];
    } catch (error) {
      console.error('Error fetching public profiles:', error);
      throw error;
    }
  },

  // Get single profile by slug
  async getProfileBySlug(slug: string): Promise<BusinessProfile | null> {
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        queries: [
          Query.equal('slug', slug)
        ]
      });
      return response.total > 0 ? ({ ...response.rows[0] } as unknown as BusinessProfile) : null;
    } catch (error) {
      console.error('Error fetching profile by slug:', error);
      throw error;
    }
  },

  // Check if slug is available
  async checkSlugAvailability(slug: string) {
    if (!slug || slug.length < 3) return 'idle';
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        queries: [
          Query.equal('slug', slug)
        ]
      });
      return response.total > 0 ? 'taken' : 'available';
    } catch (error) {
      console.error('Error checking slug:', error);
      return 'error';
    }
  },

  // Upload file to storage
  async uploadFile(file: File) {
    try {
      const response = await storage.createFile(BUCKET_ID, ID.unique(), file);
      return response.$id;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },

  // Get image URL
  getFileUrl(fileId: string) {
    if (!fileId) return '/placeholder.jpg';
    return storage.getFileView(BUCKET_ID, fileId).toString();
  },

  // Create new profile
  async createProfile(data: Omit<BusinessProfile, '$id' | '$createdAt' | 'logo_id' | 'cover_id' | 'product_photo_ids' | 'is_public' | 'is_verified' | 'is_active'>, logoFile?: File | null, coverFile?: File | null) {
    try {
      let logoId = '';
      let coverId = '';

      if (logoFile) {
        logoId = await this.uploadFile(logoFile);
      }
      if (coverFile) {
        coverId = await this.uploadFile(coverFile);
      }

      const payload = {
        ...data,
        logo_id: logoId,
        cover_id: coverId,
        product_photo_ids: [],
        is_public: false,
        is_verified: false,
        is_active: true,
      };

      const response = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        rowId: ID.unique(),
        data: payload
      });
      return { ...response } as unknown as BusinessProfile;
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }
};

export const projectService = {
  // Get all public projects
  async getPublicProjects(): Promise<Project[]> {
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: PROJECTS_COLLECTION_ID,
        queries: [
          Query.equal('is_public', true),
          Query.orderDesc('$createdAt')
        ]
      });
      return response.rows.map(row => ({ ...row })) as unknown as Project[];
    } catch (error) {
      console.error('Error fetching public projects:', error);
      throw error;
    }
  },

  // Get thumbnail URL
  getThumbnailUrl(fileId: string) {
    if (!fileId) return '/placeholder-project.jpg';
    return storage.getFileView(BUCKET_ID, fileId).toString();
  }
};

export const reviewService = {
  // Submit a new review (unpublished by default)
  async submitReview(data: { name: string; review: string; rating: number }): Promise<Review> {
    try {
      const response = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: REVIEWS_COLLECTION_ID,
        rowId: ID.unique(),
        data: {
          ...data,
          is_published: false,
        }
      });
      return { ...response } as unknown as Review;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  },

  // Get only published reviews
  async getPublishedReviews(limit: number = 100): Promise<Review[]> {
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: REVIEWS_COLLECTION_ID,
        queries: [
          Query.equal('is_published', true),
          Query.orderDesc('$createdAt'),
          Query.limit(limit)
        ]
      });
      return response.rows.map(row => ({ ...row })) as unknown as Review[];
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }
};
