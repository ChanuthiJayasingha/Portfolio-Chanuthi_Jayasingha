import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const name = portfolioData?.personal?.name || 'Chanuthi Jayasingha';
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1] || '';

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-studio-bg/90 backdrop-blur-md border-b border-matte-black/15">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-serif text-3xl font-bold tracking-tight text-matte-black hover:opacity-100 transition-opacity">
          <span className="font-serif text-3xl font-bold tracking-tight text-matte-black hover:opacity-100 transition-opacity"></span>
          
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest uppercase text-matte-black/80">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-matte-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-studio-bg border-b border-matte-black/20 px-6 py-4 flex flex-col space-y-4 text-xs font-mono uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-matte-black/80 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}