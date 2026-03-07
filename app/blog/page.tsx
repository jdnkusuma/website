import Link from "next/link";
import { client } from "@/sanity/lib/client"; // This helper is created by the init command

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    title,
    slug,
    publishedAt,
    excerpt
  }`;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="min-h-screen bg-dark text-light pb-24">
      <div className="relative px-8 md:px-24 pt-20 mb-32">
        <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-8 select-none">
          THOUGHTS
        </h1>
        <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10">
          the <span className="text-semilight">log.</span>
        </h2>
      </div>

      <div className="px-8 md:px-24 max-w-5xl space-y-20">
        {posts.map((post: any) => (
          <article key={post.slug.current} className="group border-b border-mid/20 pb-12">
            <Link href={`/blog/${post.slug.current}`}>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-mono text-mid tracking-[0.3em] uppercase">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold group-hover:text-semilight transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-xl opacity-60 font-light max-w-3xl leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-black uppercase tracking-widest text-semilight inline-flex items-center gap-2">
                  Read Analysis <span className="group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}