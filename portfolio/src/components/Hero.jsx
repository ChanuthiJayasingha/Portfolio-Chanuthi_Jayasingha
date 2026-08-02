import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, ArrowDownRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs tracking-wide text-gray-600 bg-gray-50/50">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for projects & opportunities
        </div>

        {/* Title / Name */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {personal.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-500 font-normal">
            {personal.title}
          </h2>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {personal.tagline}
        </p>

        {/* Actions & Social Links */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get in touch <ArrowDownRight size={16} />
          </a>

          <div className="flex items-center gap-3 pl-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-black border border-gray-200 rounded-lg hover:border-gray-400 transition-all"
              aria-label="GitHub Profile"
            >
              <Code2 size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-black border border-gray-200 rounded-lg hover:border-gray-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}