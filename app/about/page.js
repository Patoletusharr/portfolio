import { skills, education, achievements, hobbies, siteAuthor } from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | Skills & More`,
  description: "Technical skills, education, achievements, and interests.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Technical Skills */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-dark-bg border border-dark-border rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-card border border-primary/30 rounded-lg text-sm text-dark-text hover:border-primary hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
        <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">{education.degree}</h3>
          <p className="text-primary font-medium mb-1">{education.institution}</p>
          <p className="text-sm text-dark-muted mb-2">{education.university}</p>
          <p className="text-sm text-dark-muted">{education.period}</p>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl p-5 hover:border-accent/50 transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">🏆</span>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-accent mb-2">{achievement.organization}</p>
                  <p className="text-sm text-dark-muted">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Hobbies & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl p-4 text-center hover:border-primary/50 transition-all group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {getHobbyIcon(hobby.icon)}
              </div>
              <p className="text-sm text-dark-text">{hobby.name}</p>
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
