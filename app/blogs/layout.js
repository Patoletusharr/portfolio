import { siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | Blogs`,
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
