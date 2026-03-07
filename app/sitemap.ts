import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jaydenkusuma.vercel.app' // Replace with your actual domain

  // Define your static routes based on your folder structure
  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}