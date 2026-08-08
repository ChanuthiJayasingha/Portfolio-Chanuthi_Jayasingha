import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[85vh] flex items-center py-12 overflow-hidden font-['Times_New_Roman',serif]">
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        
        {/* Balanced Grid: 7 Cols Text / 5 Cols Picture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Headline Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-8 z-20"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-matte-black text-xs font-sans uppercase tracking-wider bg-bone-white shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-matte-black animate-pulse"></span>
              Data Science & ML Undergraduate
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-matte-black tracking-tight leading-[1.05]">
                {personal?.name || "Chanuthi Jayasingha"}
              </h1>
              <p className="text-xl sm:text-2xl italic text-matte-black/75">
                Solving complex challenges through data & intelligent models.
              </p>
            </div>

            {/* Summary Paragraph */}
            <p className="text-xl sm:text-2xl leading-relaxed text-matte-black/90 font-light max-w-2xl">
              Crafting scalable intelligence. Specialized in <strong className="font-semibold text-black">Demand Forecasting</strong> and <strong className="font-semibold text-black">Predictive Modeling</strong> to optimize decision-making engines.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-matte-black text-studio-bg px-8 py-4 rounded-md text-xs font-sans uppercase tracking-widest hover:bg-matte-black/85 transition-all shadow-md"
              >
                Get In Touch <ArrowRight size={16} />
              </a>
              
              <div className="flex items-center gap-3">
                <a 
                  href={personal?.github || "#"} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 text-matte-black border border-matte-black rounded-full hover:bg-matte-black hover:text-studio-bg transition-colors bg-bone-white/60 shadow-sm" 
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href={personal?.linkedin || "#"} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 text-matte-black border border-matte-black rounded-full hover:bg-matte-black hover:text-studio-bg transition-colors bg-bone-white/60 shadow-sm" 
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Focused Portrait Column (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Background Typography Watermark */}
            <div className="absolute -inset-x-8 -top-8 bottom-0 flex flex-col justify-center pointer-events-none z-0 select-none overflow-hidden">
              <span className="text-7xl sm:text-8xl lg:text-[9.5rem] font-bold text-matte-black/8 leading-none tracking-tighter text-right">
                PORT
              </span>
              <span className="text-7xl sm:text-8xl lg:text-[9.5rem] font-bold text-matte-black/8 leading-none tracking-tighter text-right">
                FOLIO
              </span>
            </div>

            {/* Portrait Frame */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] border-2 border-matte-black rounded-2xl overflow-hidden bg-bone-white shadow-xl">
              <img 
                src="/portfolio_pic.jpeg" 
                alt={personal?.name || "Chanuthi Jayasingha"} 
                className="w-full h-full object-cover object-center filter contrast-105 brightness-100 hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-matte-black/85 backdrop-blur-md text-studio-bg px-4 py-3 rounded-lg flex justify-between items-center border border-studio-bg/20">
                <span className="text-xs font-sans tracking-widest uppercase font-semibold">
                  {personal?.name || "Chanuthi Jayasingha"}
                </span>
                <span className="text-[10px] font-sans opacity-70 uppercase tracking-wider">
                  Data Science
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}