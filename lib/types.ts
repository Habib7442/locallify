export interface BusinessProfile {
  $id: string;
  $createdAt: string;
  slug: string;
  business_name: string;
  business_category: string;
  owner_name: string;
  phone_number: string;
  whatsapp_number: string;
  email_address: string;
  full_address: string;
  business_hours: string; // JSON string
  bio: string;
  logo_id: string;
  cover_id: string;
  product_photo_ids?: string[];
  instagram_handle?: string;
  facebook_page_link?: string;
  google_review_link?: string;
  is_public: boolean;
  is_verified: boolean;
  is_active: boolean;
}
export interface Project {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  title: string;
  thumbnail: string; // File ID
  live_url: string;
  description: string;
  is_public: boolean;
  status: 'ongoing' | 'completed';
  tags: string[];
}

export interface Review {
  $id: string;
  $createdAt: string;
  name: string;
  review: string;
  rating: number;
  is_published: boolean;
}
