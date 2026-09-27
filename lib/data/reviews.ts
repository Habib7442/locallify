import { Review } from '../types';

export const fallbackReviews: Review[] = [
  {
    $id: 'r1',
    $createdAt: '2026-07-14T00:00:00.000Z',
    name: 'Dr. Abhishek Ray',
    review: 'Before partnering with Locallify, our clinic did not have any official website, and patients struggled to find reliable details online. The new bilingual portal has completely transformed our practice. Booking appointments is now effortless for our patients, and the speed and design are absolutely outstanding.',
    rating: 5,
    is_published: true
  },
  {
    $id: 'r2',
    name: 'Dr. Devarati Ray Dutta Chowdhury',
    review: 'The custom portal has elevated our clinic\'s image and made online appointment requests effortless. Fixing the Google Search Console errors and optimizing our search snippet CTR has brought in many new patients from Silchar. The loading speed and design are beautiful.',
    rating: 5,
    is_published: true
  }
  // TODO(owner): r3 (Said Anowar Barbhuiya) was removed — its text was a word-for-word
  // copy of the Hotel Luxuria Grand case-study quote. Re-add only with his real words.
];
