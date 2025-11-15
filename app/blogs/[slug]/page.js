import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs, siteAuthor } from "@/data/siteData";

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) return { title: `${siteAuthor.name} | Blog` };
  return {
    title: `${post.title} | ${siteAuthor.name}`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      {/* Back Button */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
      >
        <span>←</span>
        <span>Back to Blog</span>
      </Link>

      {/* Article Header */}
      <header>
        <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-dark-muted mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-dark-bg border border-primary/30 rounded-lg text-sm text-dark-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert max-w-none">
        <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
          <p className="text-dark-muted leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-dark-border">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <span>←</span>
          <span>View all posts</span>
        </Link>
      </footer>
    </article>
  );
}
