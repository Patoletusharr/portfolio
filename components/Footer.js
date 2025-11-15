import { siteAuthor, socialLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120]/80 backdrop-blur-md py-6 text-xs text-dark-muted">
      <div className="container-default flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="tracking-wide">© {new Date().getFullYear()} {siteAuthor.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg glass hover:shadow-glow transition-all ${getSocialBrandColor(item.icon)}`}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.label}
            >
              {getSocialIcon(item.icon)}
              <span className="hidden sm:inline text-dark-text font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.36.31.679.92.679 1.855 0 1.338-.012 2.418-.012 2.746 0 .267.18.577.688.479C19.138 20.162 22 16.416 22 12 22 6.477 17.523 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.339h4.52V24H.24V8.339zM8.339 8.339h4.334v2.13h.062c.603-1.143 2.078-2.348 4.277-2.348 4.573 0 5.416 3.01 5.416 6.927V24h-4.52v-6.98c0-1.666-.03-3.807-2.319-3.807-2.32 0-2.676 1.813-2.676 3.688V24H8.339V8.339z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11.001A5.5 5.5 0 0 0 12 7.5zm0 2a3.5 3.5 0 1 1 0 7.001 3.5 3.5 0 0 1 0-7zM18 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
  );
}

function getSocialIcon(icon) {
  if (icon === "github") return <GitHubIcon />;
  if (icon === "linkedin") return <LinkedInIcon />;
  if (icon === "instagram") return <InstagramIcon />;
  return <GitHubIcon />;
}

function getSocialBrandColor(icon) {
  const colors = {
    github: "hover:bg-[#333]/30",
    linkedin: "hover:bg-[#0077b5]/30",
    instagram: "hover:bg-[#E4405F]/30",
  };
  return colors[icon] || "hover:bg-primary/20";
}
