import React from 'react';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Projects() {
  const projects = portfolioData?.projects || [];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200/80">
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">03. Work</h2>
            <p className="text-xl font-semibold text-gray-900">Featured Projects</p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-200/80 rounded-xl p-6 bg-white hover:border-gray-400 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors p-1"
                        aria-label="GitHub Repository"
                      >
                        <Code2 size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors p-1"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}