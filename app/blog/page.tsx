import Link from "next/link";
import { client } from "@/sanity/lib/client";

// Helper function to calculate reading time based on the body array
function calculateReadingTime(body: any[]) {
  if (!body) return "1 min read";
  
  // Extract text from the portable text blocks
  const text = body
    .map(block => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child: any) => child.text).join(' ');
    })
    .join(' ');

  const wordCount = text.split(/\s+/g).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

async function getPosts() {
  // We now fetch the body as well to calculate the reading time
  const query = `*[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    body
  }`;
  
  return await client.fetch(query, {}, {
    next: { 
      tags: ['post'], // Important for the Webhook revalidation
      revalidate: 3600 // Fallback: revalidate every hour if webhook fails
    }
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="min-h-screen bg-dark text-light pb-24 overflow-hidden">
      {/* Background Heading */}
      <div className="relative px-8 md:px-24 pt-20 mb-32">
        <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-5 absolute -top-10 left-8 select-none pointer-events-none uppercase">
          THOUGHTS
        </h1>
        <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10 tracking-tight">
          the <span className="text-semilight">log.</span>
        </h2>
      </div>

      <div className="px-8 md:px-24 max-w-5xl space-y-24 relative z-10">
        {posts.map((post: any) => {
          const readingTime = calculateReadingTime(post.body);
          
          return (
            <article key={post.slug.current} className="group border-b border-mid/10 pb-16 last:border-0">
              <Link href={`/blog/${post.slug.current}`}>
                <div className="flex flex-col gap-6">
                  {/* Meta Row */}
                  <div className="flex items-center gap-4 text-xs font-mono text-mid tracking-[0.2em] uppercase">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-mid/40" />
                    <span className="text-semilight/80">{readingTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-7xl font-bold group-hover:text-semilight transition-colors duration-500 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xl md:text-2xl opacity-50 font-light max-w-3xl leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.3em] text-semilight inline-flex items-center gap-3">
                    <span className="border-b-2 border-semilight/0 group-hover:border-semilight/100 transition-all duration-500 pb-1">
                      Read Analysis
                    </span>
                    <span className="group-hover:translate-x-3 transition-transform duration-500 text-2xl">→</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}