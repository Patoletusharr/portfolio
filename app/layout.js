import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { siteMeta } from "@/data/siteData";

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-mhxfktun2-tushar-patoles-projects.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-dark-text">
        <div className="min-h-screen py-8 lg:py-16">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-10">
              {/* Sidebar */}
              <Sidebar />

              {/* Main Content */}
              <main className="glass-card rounded-3xl p-8 lg:p-12 shadow-glass animate-slide-up">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
