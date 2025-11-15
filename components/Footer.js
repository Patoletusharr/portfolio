import { siteAuthor, socialLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 py-6 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-default flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteAuthor.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-slate-800 dark:hover:text-slate-200"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
