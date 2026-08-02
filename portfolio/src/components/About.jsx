import React from 'react';
import portfolioData from '../data/portfolioData.json';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200/80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Section Header */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">01. About</h2>
          <p className="text-xl font-semibold text-gray-900">Background & Focus</p>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {personal?.about || "I am a software engineering student passionate about building scalable applications."}
          </p>

          {/* Education Breakdown */}
          {education && education.length > 0 && (
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4">Education</h3>
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <span className="text-xs text-gray-400 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                  <p className="text-xs text-gray-500 pt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}