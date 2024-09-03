"use server"

import { MetadataRoute } from 'next'

// types
type changeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';


const WEBSITE_HOST_URL = process.env.HTML_THIS_WEBSITE || 'https://www.newkenthandyman.com';

// Static paths
const PATH_TO_ADD: MetadataRoute.Sitemap = [
  {
    url: `${WEBSITE_HOST_URL}/`,
    changeFrequency: 'weekly' as changeFrequency,
    priority: 0.8,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${WEBSITE_HOST_URL}/about`,
    changeFrequency: 'yearly' as changeFrequency,
    priority: 0.6,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${WEBSITE_HOST_URL}/contact`,
    changeFrequency: 'yearly' as changeFrequency,
    priority: 0.9,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${WEBSITE_HOST_URL}/privacy-policy`,
    changeFrequency: 'yearly' as changeFrequency,
    priority: 0.3,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${WEBSITE_HOST_URL}/services`,
    changeFrequency: 'monthly' as changeFrequency,
    priority: 0.8,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${WEBSITE_HOST_URL}/reviews`,
    changeFrequency: 'weekly' as changeFrequency,
    priority: 0.6,
    lastModified: new Date().toISOString(),
  }
];


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // All the static paths
  const routes: MetadataRoute.Sitemap = PATH_TO_ADD;

  return routes;
}