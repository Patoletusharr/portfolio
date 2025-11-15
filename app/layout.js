import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { siteMeta } from "@/data/siteData";

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL("https://tusharpatole.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-dark-text">
        <div className="min-h-screen py-6 lg:py-12">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-8">
              {/* Sidebar */}
              <Sidebar />
              
              {/* Main Content */}
              <main className="bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
