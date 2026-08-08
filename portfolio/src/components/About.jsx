import React from 'react';
import portfolioData from '../data/portfolioData.json';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section 
      id="about" 
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="max-w-5xl mx-auto px-6 py-16 border-t border-matte-black/20"
    >
      <div className="flex flex-col space-y-8">
        
        {/* Section Header */}
        <div>
          <h2 className="text-xs uppercase tracking-widest text-matte-black/60 mb-1 font-sans">01. About</h2>
          <p className="text-3xl font-bold text-matte-black">Background & Focus</p>
        </div>

        {/* Main Content Stacked Below */}
        <div className="space-y-8">
          <p className="text-matte-black leading-relaxed text-lg sm:text-xl">
            {personal?.about || "I am a Data Science undergraduate passionate about building scalable models."}
          </p>

          {/* Education Breakdown */}
          {education && education.length > 0 && (
            <div className="pt-6 border-t border-matte-black/15">
              <h3 className="text-xs uppercase tracking-wider text-matte-black/60 mb-6 font-sans">Education</h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-lg text-matte-black">{edu.degree}</h4>
                      <span className="text-xs text-matte-black/60 font-sans">{edu.period}</span>
                    </div>
                    <p className="text-base text-matte-black/80">{edu.institution}</p>
                    <p className="text-sm text-matte-black/70 italic">{edu.details}</p>
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