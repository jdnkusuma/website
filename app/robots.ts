import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/studio', '/studio/.*', '/api/.*'], // Add any private folders if you create them
    },
    sitemap: 'https://jaydenkusuma.vercel.app/sitemap.xml',
  }
}