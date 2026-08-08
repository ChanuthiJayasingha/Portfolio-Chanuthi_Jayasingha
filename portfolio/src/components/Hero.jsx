import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    /* Added font-['Times_New_Roman',serif] to section class 👇 */
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-16 overflow-hidden font-['Times_New_Roman',serif]">
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        
        {/* Background Accent / Layering */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-6 z-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-matte-black text-xs uppercase bg-bone-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-matte-black animate-pulse"></span>
              Data Science & ML Engineer
            </div>

            <p className="text-xl leading-relaxed text-matte-black font-light">
              Crafting scalable intelligence. Specialized in <strong className="font-semibold">Demand Forecasting</strong> and <strong className="font-semibold">Predictive Modeling</strong> to optimize data-driven decision engines.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2.5 bg-matte-black text-studio-bg px-6 py-3.5 rounded-md text-xs uppercase tracking-wider hover:bg-matte-black/85 transition-colors shadow-md"
              >
                Get In Touch <ArrowRight size={15} />
              </a>
              <div className="flex items-center gap-3">
                <a 
                  href={personal?.github || "#"} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 text-matte-black border border-matte-black rounded-full hover:bg-matte-black hover:text-studio-bg transition-colors bg-bone-white/50" 
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href={personal?.linkedin || "#"} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 text-matte-black border border-matte-black rounded-full hover:bg-matte-black hover:text-studio-bg transition-colors bg-bone-white/50" 
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Focused Portrait Hero Frame (Center/Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7 relative flex justify-end"
          >
            {/* Background Editorial Watermark Typography */}
            <div className="absolute -inset-x-12 -top-10 bottom-0 flex flex-col justify-center pointer-events-none z-0 select-none overflow-hidden">
              <h1 className="text-8xl md:text-[11rem] font-bold text-matte-black/10 leading-none tracking-tighter text-right">
                PORT
              </h1>
              <h1 className="text-8xl md:text-[11rem] font-bold text-matte-black/10 leading-none tracking-tighter text-right">
                FOLIO
              </h1>
            </div>

            {/* Sharp Focus Featured Portrait Container */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] border-2 border-matte-black rounded-xl overflow-hidden bg-bone-white shadow-2xl">
              <img 
                src="/portfolio_pic.jpeg" 
                alt={personal?.name || "Portrait"} 
                className="w-full h-full object-cover object-center filter contrast-105 brightness-100 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-matte-black/85 backdrop-blur-md text-studio-bg px-4 py-2.5 rounded-md flex justify-between items-center border border-studio-bg/20">
                <span className="text-xs tracking-widest uppercase font-semibold">
                  {personal?.name || "PORTFOLIO"}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}