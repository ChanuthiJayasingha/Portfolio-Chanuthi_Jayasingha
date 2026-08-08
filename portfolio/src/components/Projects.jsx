import React from 'react';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Projects() {
  const projects = portfolioData?.projects || [];

  return (
    <section 
      id="projects" 
      className="max-w-5xl mx-auto px-6 py-20 border-t border-matte-black/20 font-['Times_New_Roman',serif]"
    >
    
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">03. Work</h2>
            <p className="text-xl sm:text-2xl font-semibold text-base">Data Science & Engineering</p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-200/80 rounded-2xl p-8 bg-white hover:border-charcoal hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-semibold text-base group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-charcoal transition-colors p-1.5"
                        aria-label="GitHub Repository"
                      >
                        <Code2 size={17} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-charcoal transition-colors p-1.5"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills: Using Palette */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono font-medium text-charcoal bg-brand-beige/50 px-2.5 py-1 rounded-full border border-brand-beige"
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