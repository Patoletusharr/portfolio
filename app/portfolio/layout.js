import { siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | Portfolio`,
  description: "Selected projects and case studies.",
};

export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
