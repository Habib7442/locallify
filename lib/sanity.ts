import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project configuration');
}

// Read client. The dataset holds private documents (leads, admin accounts),
// so it must be private in Sanity, which means reads need a token. The token
// is a server-only env var: it's undefined in the browser, and nothing in the
// browser queries Sanity. `perspective: 'published'` matters — an
// authenticated client would otherwise also return unpublished drafts.
// Falls back to the write token so no new env var is strictly required.
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
  perspective: 'published',
});

// Server-only: used from API routes, never from client components.
export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
