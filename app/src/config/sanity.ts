import client from '@sanity/client'

export const sanity = client({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
})
