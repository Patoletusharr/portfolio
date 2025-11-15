"use client";

import { useState } from "react";
import { projects } from "@/data/siteData";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-dark-muted">DevOps projects and infrastructure implementations</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="text-2xl">💼</span>
            </div>
            <p className="text-sm text-accent mb-3">{project.category}</p>
            <p className="text-dark-muted text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-dark-card border border-dark-border rounded text-xs text-dark-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-dark-card border border-dark-border rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-accent">{selectedProject.category}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-dark-muted hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <p className="text-dark-muted mb-6">{selectedProject.description}</p>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-dark-bg border border-primary/30 rounded-lg text-sm text-dark-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.highlights && (
              <div>
                <h3 className="text-white font-semibold mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-dark-muted">
                      <span className="text-accent mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
