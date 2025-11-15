import Link from "next/link";
import {
  assetPaths,
  experienceTimeline,
  skills,
  education,
  certifications,
  siteAuthor,
} from "@/data/siteData";

export const metadata = {
  title: `${siteAuthor.name} | Resume`,
  description: "Complete resume with experience, skills, education, and certifications.",
};

export default function ResumePage() {
  return (
    <div className="space-y-10">
      {/* Header with Download Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Resume</h1>
          <p className="text-dark-muted">Complete professional experience and qualifications</p>
        </div>
        <a
          href={assetPaths.resumePdf}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover:shadow-glow transition-all"
        >
          <span>📥</span>
          <span>Download PDF</span>
        </a>
      </div>

      {/* Professional Experience */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
        <div className="space-y-6">
          {experienceTimeline.map((exp, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium text-lg">{exp.company}</p>
                </div>
                <div className="text-sm text-dark-muted">
                  <p className="font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-dark-muted mb-4">{exp.description}</p>
              {exp.highlights && (
                <div>
                  <p className="text-white font-semibold mb-3">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-dark-muted">
                        <span className="text-accent mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
        <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{education.degree}</h3>
          <p className="text-primary font-medium text-lg mb-1">{education.institution}</p>
          <p className="text-dark-muted mb-2">{education.university}</p>
          <p className="text-dark-muted">{education.period}</p>
        </div>
      </section>

      {/* Skills Summary */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).slice(0, 6).map(([category, skillList]) => (
            <div key={category} className="bg-dark-bg border border-dark-border rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm">{category}</h3>
              <p className="text-dark-muted text-sm">{skillList.join(" • ")}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/about"
            className="text-primary hover:text-accent transition-colors text-sm font-medium"
          >
            View all skills →
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl p-5 flex items-start gap-4"
            >
              <span className="text-3xl">🏅</span>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-dark-muted">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO UPDATE RESUME:
          1. Replace /public/resume/tushar-resume.pdf with your latest resume file.
          2. Or update assetPaths.resumePdf in /data/siteData.js.
      */}
    </div>
  );
}
