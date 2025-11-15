"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { siteAuthor, assetPaths, socialLinks } from "@/data/siteData";

const navLinks = [
  { href: "/", label: "About", icon: "👤" },
  { href: "/resume", label: "Resume", icon: "📄" },
  { href: "/portfolio", label: "Portfolio", icon: "💼" },
  { href: "/blogs", label: "Blog", icon: "📝" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-80 bg-dark-card border border-dark-border rounded-2xl p-6 lg:sticky lg:top-6 lg:h-fit">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative w-32 h-32 mb-4 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-glow">
          <Image
            src={assetPaths.profileImage}
            alt={siteAuthor.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
        <h1 className="text-xl font-bold text-white mb-1">{siteAuthor.name}</h1>
        <p className="text-sm bg-dark-bg px-4 py-1.5 rounded-lg text-dark-muted">
          {siteAuthor.designation}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-dark-border mb-6"></div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6">
        <ContactItem icon="📧" label="Email" value={siteAuthor.email} href={`mailto:${siteAuthor.email}`} />
        <ContactItem icon="📱" label="Phone" value={siteAuthor.phone} href={`tel:${siteAuthor.phone}`} />
        <ContactItem icon="📍" label="Location" value={siteAuthor.location} />
        <ContactItem icon="💼" label="Status" value={siteAuthor.status} highlight />
      </div>

      {/* Divider */}
      <div className="h-px bg-dark-border mb-6"></div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 mb-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="w-10 h-10 bg-dark-bg rounded-lg flex items-center justify-center text-dark-muted hover:text-primary hover:bg-primary/10 transition-all"
            aria-label={link.label}
          >
            {getSocialIcon(link.icon)}
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
                  : "text-dark-muted hover:text-white hover:bg-dark-bg"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function ContactItem({ icon, label, value, href, highlight }) {
  const content = (
    <div className="flex items-start gap-3 text-sm">
      <span className="text-lg mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-dark-muted text-xs mb-0.5">{label}</p>
        <p className={`${highlight ? "text-accent font-medium" : "text-dark-text"} break-words`}>
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:bg-dark-bg p-2 rounded-lg transition-colors">
        {content}
      </a>
    );
  }

  return <div className="p-2">{content}</div>;
}

function getSocialIcon(iconName) {
  const icons = {
    github: "🔗",
    linkedin: "💼",
    mail: "📧",
    phone: "📱",
  };
  return icons[iconName] || "🔗";
}
