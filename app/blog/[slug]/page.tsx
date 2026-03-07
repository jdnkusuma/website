import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <article className="min-h-screen bg-dark text-light pb-32">
      <div className="px-8 md:px-24 pt-32 max-w-4xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-mid font-mono text-sm uppercase tracking-widest">
            <span>{new Date(post.publishedAt).toDateString()}</span>
            <span>•</span>
            <span>By Jayden Kusuma</span>
          </div>
        </header>

        {/* This handles the rich text from Sanity */}
        <div className="prose prose-invert prose-xl max-w-none 
          prose-headings:text-semilight prose-headings:font-bold 
          prose-p:opacity-80 prose-p:font-light prose-p:leading-relaxed
          prose-strong:text-white prose-a:text-mid">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}