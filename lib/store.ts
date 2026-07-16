import { create } from 'zustand';
import { profileService } from './cms';
import { BusinessProfile } from './types';

interface BusinessState {
  publicProfiles: BusinessProfile[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchPublicProfiles: () => Promise<void>;
  addProfileToState: (profile: BusinessProfile) => void;
}

export const useBusinessStore = create<BusinessState>((set) => ({
  publicProfiles: [],
  isLoading: false,
  error: null,

  fetchPublicProfiles: async () => {
    set({ isLoading: true, error: null });
    try {
      const profiles = await profileService.getPublicProfiles();
      set({ publicProfiles: profiles, isLoading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : "An unknown error occurred", isLoading: false });
    }
  },

  addProfileToState: (profile: BusinessProfile) => {
    set((state) => ({
      publicProfiles: [profile, ...state.publicProfiles].slice(0, 6)
    }));
  }
}));
