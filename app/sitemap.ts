import { MetadataRoute } from 'next'
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://jaydenkusuma.com'

    // 1. Fetch all published blog slugs from Sanity
    const postsQuery = `*[_type == "post" && !(_id in path('drafts.**'))] { "slug": slug.current, _updatedAt }`;
    const posts = await client.fetch(postsQuery);   
    const blogRoutes = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));    
    // 2. Define your static routes
    const staticRoutes = [
      '',
      '/about',
      '/projects',
      '/blog', 
      '/contact',
      '/privacy-policy',
      '/terms-of-service',
    ].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })) 
    // 3. Merge them together
    return [...staticRoutes, ...blogRoutes]
}