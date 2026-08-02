import React from 'react';
import portfolioData from '../data/portfolioData.json';

export default function Skills() {
  const skills = portfolioData?.skills || [];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200/80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Section Header */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">02. Stack</h2>
          <p className="text-xl font-semibold text-gray-900">Skills & Tech</p>
        </div>

        {/* Skills Grid */}
        <div className="md:col-span-2 space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100/80 hover:bg-gray-200/80 text-gray-800 text-xs font-medium rounded transition-colors"
                  >
                    {skill}
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