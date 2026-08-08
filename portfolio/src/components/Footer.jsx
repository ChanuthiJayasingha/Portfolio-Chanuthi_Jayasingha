import React from 'react';
import portfolioData from '../data/portfolioData.json';

export default function Footer() {
  const name = portfolioData?.personal?.name || 'Developer';
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/60 bg-[#fcfcfc] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 space-y-2 sm:space-y-0">
        <p>© {year} {name}. Designed & Built with React + Vite.</p>
      </div>
    </footer>
  );
}