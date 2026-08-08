import React from 'react';
import portfolioData from '../data/portfolioData.json';

export default function Skills() {
  const skills = portfolioData?.skills || [];

  return (
    <section 
      id="skills" 
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="max-w-5xl mx-auto px-6 py-16 border-t border-matte-black/20"
    >
      <div className="flex flex-col space-y-8">
        
        {/* Section Header */}
        <div>
          <h2 className="text-xs uppercase tracking-widest text-matte-black/60 mb-1 font-sans">02. Stack</h2>
          <p className="text-3xl font-bold text-matte-black">Skills & Tech</p>
        </div>

        {/* Skills Grid Stacked Below */}
        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-matte-black/60 font-sans">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 bg-bone-white border border-matte-black/20 text-matte-black text-sm font-medium rounded-md hover:border-matte-black transition-colors"
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