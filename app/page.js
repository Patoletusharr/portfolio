import { aboutSection, services, experienceTimeline, siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | About`,
  description: aboutSection.longBio,
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* About Me Section */}
      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">About Me</h2>
        <p className="text-dark-text leading-relaxed text-lg">
          {aboutSection.longBio}
        </p>
      </section>

      {/* Premium Divider */}
      <div className="premium-divider my-12"></div>

      {/* What I'm Doing */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {getServiceIcon(service.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-3 text-lg tracking-wide">{service.title}</h3>
                  <p className="text-sm text-dark-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Divider */}
      <div className="premium-divider my-12"></div>

      {/* Experience Timeline */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Experience</h2>
        <div className="space-y-6">
          {experienceTimeline.map((exp, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-wide">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="text-sm text-dark-muted space-y-1">
                  <p className="font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-dark-text mb-5 leading-relaxed">{exp.description}</p>
              {exp.highlights && (
                <ul className="space-y-3">
                  {exp.highlights.slice(0, 5).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-dark-muted group/item">
                      <span className="text-accent mt-1 text-lg group-hover/item:scale-125 transition-transform">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                  {exp.highlights.length > 5 && (
                    <li className="text-sm text-primary italic font-medium mt-4">
                      + {exp.highlights.length - 5} more achievements
                    </li>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function getServiceIcon(iconName) {
  const icons = {
    devops: "⚙️",
    cloud: "☁️",
    sre: "🔧",
    iac: "📦",
  };
  return icons[iconName] || "💼";
}
