import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt || "Read more about this topic on Jayden Kusuma's log.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://jaydenkusuma.vercel.app/blog/${slug}`,
      images: [
        {
          url: post.mainImage?.asset?.url || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    excerpt,
    body,
    "mainImage": mainImage.asset->url
  }`;
  
  return await client.fetch(query, { slug }, {
    next: { 
      tags: ['post'],
      revalidate: 3600 
    }
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-dark text-light pb-32">
      {/* 2. BlogPosting JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.mainImage,
            "datePublished": post.publishedAt,
            "author": {
              "@type": "Person",
              "name": "Jayden Kusuma",
              "url": "https://jaydenkusuma.vercel.app"
            }
          })
        }}
      />

      <div className="px-8 md:px-24 pt-32 max-w-4xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-mid font-mono text-sm uppercase tracking-widest">
            {post.publishedAt && (
              <span>{new Date(post.publishedAt).toDateString()}</span>
            )}
            <span>•</span>
            <span>By Jayden Kusuma</span>
          </div>
        </header>

        <div className="prose prose-invert prose-xl max-w-none 
          prose-headings:text-semilight prose-headings:font-bold 
          prose-p:opacity-80 prose-p:font-light prose-p:leading-relaxed
          prose-strong:text-white prose-a:text-mid">
          {post.body ? <PortableText value={post.body} /> : <p>No content available.</p>}
        </div>
      </div>
    </article>
  );
}