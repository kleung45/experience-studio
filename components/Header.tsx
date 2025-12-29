
import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, currentPath, onClick }) => {
  const isActive = href === '#' ? currentPath === '/' : currentPath === href.replace('#', '');
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary hover:translate-x-1 md:hover:translate-x-0'
        }`}
    >
      {label}
    </a>
  );
};

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#/work', label: 'Work' },
    { href: '#/services', label: 'Services' },
    { href: '#/process', label: 'Process' },
    { href: '#/impact', label: 'Impact' },
    { href: '#/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-105">
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-black tracking-tight text-slate-900 font-display"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} label={link.label} currentPath={currentPath} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#/contact" className="hidden md:flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white transition-all shadow-md shadow-primary/20 hover:bg-primary/90 hover:scale-105 active:scale-95">
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden animate-fade-in-up">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                currentPath={currentPath}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <a
              href="#/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex h-12 items-center justify-center rounded-xl bg-primary text-base font-bold text-white"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
