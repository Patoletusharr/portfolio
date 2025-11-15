"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { siteAuthor } from "@/data/siteData";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-default flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-500 text-xs font-bold text-white flex items-center justify-center">
            {siteAuthor.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight">
              {siteAuthor.name}
            </span>
            <span className="text-[11px] text-slate-500 leading-tight">
              {siteAuthor.designation}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex dark:text-slate-300">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition hover:text-slate-900 dark:hover:text-white ${
                  active ? "text-slate-900 dark:text-white" : ""
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-indigo-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
