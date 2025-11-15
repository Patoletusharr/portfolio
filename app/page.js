import { aboutSection, services, experienceTimeline, siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | About`,
  description: aboutSection.longBio,
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* About Me Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
        <p className="text-dark-muted leading-relaxed">
          {aboutSection.longBio}
        </p>
      </section>

      {/* What I'm Doing */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl p-5 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-dark-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
        <div className="space-y-6">
          {experienceTimeline.map((exp, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-dark-muted">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-dark-muted text-sm mb-4">{exp.description}</p>
              {exp.highlights && (
                <ul className="space-y-2">
                  {exp.highlights.slice(0, 5).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-dark-muted">
                      <span className="text-accent mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                  {exp.highlights.length > 5 && (
                    <li className="text-sm text-primary italic">
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
