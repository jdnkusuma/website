import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

// Update the type to reflect that params is now a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  // We pass the parameters explicitly to the fetch call
  return await client.fetch(query, { slug: slug });
}

export default async function PostPage({ params }: Props) {
  // FIX 1: Await the params before using them
  const { slug } = await params;
  
  const post = await getPost(slug);

  // Safety check: if post doesn't exist, show 404
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-dark text-light pb-32">
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
          {/* Ensure body exists before rendering */}
          {post.body ? <PortableText value={post.body} /> : <p>No content available.</p>}
        </div>
      </div>
    </article>
  );
}