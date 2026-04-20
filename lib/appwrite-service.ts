import { databases, storage, Query, ID } from './appwrite';

const DATABASE_ID = 'locallify_pages_db';
const COLLECTION_ID = 'profiles';
const BUCKET_ID = 'business-assets';

export const profileService = {
  // Get all public profiles
  async getPublicProfiles() {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('is_public', true)
      ]);
      return response.documents;
    } catch (error) {
      console.error('Error fetching public profiles:', error);
      throw error;
    }
  },

  // Get single profile by slug
  async getProfileBySlug(slug: string) {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('slug', slug)
      ]);
      return response.total > 0 ? response.documents[0] : null;
    } catch (error) {
      console.error('Error fetching profile by slug:', error);
      throw error;
    }
  },

  // Check if slug is available
  async checkSlugAvailability(slug: string) {
    if (!slug || slug.length < 3) return 'idle';
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('slug', slug)
      ]);
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
  async createProfile(data: any, logoFile?: File | null, coverFile?: File | null) {
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
        is_public: false,
        is_verified: false,
        locallify_score: 0,
      };

      const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), payload);
      return response;
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }
};
