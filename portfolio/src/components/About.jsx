import React from 'react';
import portfolioData from '../data/portfolioData.json';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    
    <section 
      id="about" 
      className="max-w-5xl mx-auto px-6 py-20 border-t border-matte-black/20 font-['Times_New_Roman',serif]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Section Header */}
        <div>
          <h2 className="text-xs uppercase tracking-widest opacity-60 mb-2">01. About</h2>
          <p className="text-2xl font-bold text-matte-black">Background & Focus</p>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <p className="text-matte-black leading-relaxed text-lg sm:text-xl">
            {personal?.about || "I am a Data Science undergraduate passionate about building scalable models."}
          </p>

          {/* Education Breakdown */}
          {education && education.length > 0 && (
            <div className="pt-6 border-t border-matte-black/15">
              <h3 className="text-xs uppercase tracking-wider opacity-60 mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-lg text-matte-black">{edu.degree}</h4>
                      <span className="text-xs opacity-60">{edu.period}</span>
                    </div>
                    <p className="text-base opacity-80">{edu.institution}</p>
                    <p className="text-sm opacity-70 italic">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}