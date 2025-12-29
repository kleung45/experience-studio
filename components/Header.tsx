
import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, currentPath }) => {
  const isActive = href === '#' ? currentPath === '/' : currentPath === href.replace('#', '');
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'
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
  const navLinks = [
    { href: '#/work', label: 'Work' },
    { href: '#/services', label: 'Services' },
    { href: '#/process', label: 'Process' },
    { href: '#/impact', label: 'Impact' },
    { href: '#/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background-light/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="h-24 w-auto" />
            <h2 className="text-lg font-bold leading-tight tracking-tight font-display"></h2>
          </a>
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} label={link.label} currentPath={currentPath} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="#/contact" className="hidden md:flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-white transition hover:bg-primary/90">
              Get in Touch
            </a>
            <button className="flex md:hidden items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-gray-100">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
