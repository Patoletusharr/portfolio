"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { siteAuthor, assetPaths, socialLinks } from "@/data/siteData";

const navLinks = [
  { href: "/", label: "About", icon: "" },
  { href: "/resume", label: "Resume", icon: "" },
  { href: "/portfolio", label: "Portfolio", icon: "" },
  { href: "/blogs", label: "Blog", icon: "" },
  { href: "/contact", label: "Contact", icon: "" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [imgError, setImgError] = useState(false);

  return (
    <aside className="w-full lg:w-80 glass-card rounded-3xl p-8 lg:sticky lg:top-8 lg:h-fit shadow-glass animate-fade-in">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative w-36 h-36 mb-5 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-glow-lg group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          {imgError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#111827]">
              <span className="text-3xl font-bold text-primary tracking-wide">{siteAuthor.name?.[0]}</span>
            </div>
          ) : (
            <Image
              src={assetPaths.profileImage}
              alt={siteAuthor.name}
              fill
              onError={() => setImgError(true)}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="144px"
            />
          )}
        </div>
        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">{siteAuthor.name}</h1>
        <p className="text-sm glass px-5 py-2 rounded-xl text-dark-text font-medium tracking-wide">
          {siteAuthor.designation}
        </p>
      </div>

      {/* Divider */}
      <div className="premium-divider my-8"></div>

      {/* Contact Info */}
      <div className="space-y-4 mb-8">
        <ContactItem icon="" label="Email" value={siteAuthor.email} href={`mailto:${siteAuthor.email}`} />
        <ContactItem icon="" label="Phone" value={siteAuthor.phone} href={`tel:${siteAuthor.phone}`} />
        <ContactItem icon="" label="Location" value={siteAuthor.location} />
        <ContactItem icon="" label="Status" value={siteAuthor.status} highlight />
      </div>

      {/* Divider */}
      <div className="premium-divider my-8"></div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 glow-on-hover ${getSocialColor(link.icon)}`}
            aria-label={link.label}
          >
            {getSocialIcon(link.icon)}
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold tracking-wide transition-all duration-300 group ${
                isActive
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  : "text-dark-muted hover:text-white glass hover:shadow-glow"
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${isActive ? "" : "group-hover:scale-125 group-hover:rotate-12"}`}>
                {link.icon}
              </span>
              <span className="text-base">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function ContactItem({ icon, label, value, href, highlight }) {
  const content = (
    <div className="flex items-start gap-4 text-sm">
      <span className="text-2xl mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-dark-muted text-xs mb-1 uppercase tracking-wider font-medium">{label}</p>
        <p className={`${highlight ? "text-accent font-semibold" : "text-dark-text"} break-words text-sm`}>
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block glass p-3 rounded-xl transition-all duration-300 hover:shadow-glow group">
        {content}
      </a>
    );
  }

  return <div className="glass p-3 rounded-xl">{content}</div>;
}

function GitHubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.36.31.679.92.679 1.855 0 1.338-.012 2.418-.012 2.746 0 .267.18.577.688.479C19.138 20.162 22 16.416 22 12 22 6.477 17.523 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.339h4.52V24H.24V8.339zM8.339 8.339h4.334v2.13h.062c.603-1.143 2.078-2.348 4.277-2.348 4.573 0 5.416 3.01 5.416 6.927V24h-4.52v-6.98c0-1.666-.03-3.807-2.319-3.807-2.32 0-2.676 1.813-2.676 3.688V24H8.339V8.339z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11.001A5.5 5.5 0 0 0 12 7.5zm0 2a3.5 3.5 0 1 1 0 7.001 3.5 3.5 0 0 1 0-7zM18 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
  );
}

function getSocialIcon(iconName) {
  if (iconName === "github") return <GitHubIcon className="w-5 h-5" />;
  if (iconName === "linkedin") return <LinkedInIcon className="w-5 h-5" />;
  if (iconName === "instagram") return <InstagramIcon className="w-5 h-5" />;
  const icons = {
    mail: "📧",
    phone: "📱",
  };
  return icons[iconName] || <GitHubIcon className="w-5 h-5" />;
}

function getSocialColor(iconName) {
  const colors = {
    github: "hover:text-white hover:bg-[#333]",
    linkedin: "hover:text-white hover:bg-[#0077b5]",
    instagram: "hover:text-white hover:bg-[#E4405F]",
    mail: "hover:text-primary",
    phone: "hover:text-accent",
  };
  return colors[iconName] || "hover:text-primary";
}
