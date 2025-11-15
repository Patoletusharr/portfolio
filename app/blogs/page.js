import Link from "next/link";
import { blogs, siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | Blog`,
  description: "Technical blog posts on DevOps, Kubernetes, AWS, and cloud infrastructure.",
};

export default function BlogsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
        <p className="text-dark-muted">Technical insights on DevOps, cloud infrastructure, and best practices</p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">📝</div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-dark-muted mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-dark-muted mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-dark-card border border-dark-border rounded text-xs text-dark-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* HOW TO ADD NEW BLOG POSTS:
          1. Open /data/siteData.js
          2. Add a new object to the `blogs` array with a unique `slug`
          3. The blog will automatically appear here and be accessible at /blogs/[slug]
      */}
    </div>
  );
}
