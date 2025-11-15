import { skills, education, achievements, hobbies, siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | Skills & More`,
  description: "Technical skills, education, achievements, and interests.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Technical Skills */}
      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Technical Skills</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-white font-bold mb-4 text-lg tracking-wide">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass rounded-xl text-sm text-dark-text hover:text-white hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Divider */}
      <div className="premium-divider my-12"></div>

      {/* Education */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Education</h2>
        <div className="gradient-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 hover:shadow-glow transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{education.degree}</h3>
          <p className="text-primary font-semibold text-lg mb-2">{education.institution}</p>
          <p className="text-dark-text mb-2">{education.university}</p>
          <p className="text-dark-muted font-medium">{education.period}</p>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="premium-divider my-12"></div>

      {/* Achievements */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-glow-accent transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🏆</span>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2 text-lg tracking-wide">{achievement.title}</h3>
                  <p className="text-accent mb-3 font-semibold">{achievement.organization}</p>
                  <p className="text-sm text-dark-muted leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Divider */}
      <div className="premium-divider my-12"></div>

      {/* Hobbies & Interests */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Hobbies & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                {getHobbyIcon(hobby.icon)}
              </div>
              <p className="text-sm text-dark-text font-semibold tracking-wide">{hobby.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function getHobbyIcon(iconName) {
  const icons = {
    fitness: "💪",
    chess: "♟️",
    music: "🎵",
    book: "📚",
  };
  return icons[iconName] || "🎯";
}
