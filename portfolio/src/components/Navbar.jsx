import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Safely fallback if data structure varies
  const name = portfolioData?.personal?.name || 'Developer';
  const firstName = name.split(' ')[0];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-gray-200/60">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
          {firstName}<span className="text-gray-400">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#fcfcfc] border-b border-gray-200 px-6 py-4 flex flex-col space-y-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}