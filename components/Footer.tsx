
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-border bg-surface-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <img src="/logo.svg" alt="Logo" className="h-24 w-auto" />
              <h3 className="text-lg font-bold font-display"></h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Designing the future of interaction in Hong Kong.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 font-display">Studio</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a className="hover:text-primary transition-colors" href="#/work">Work</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/services">Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/process">Process</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 font-display">Connect</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">LinkedIn</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Twitter / X</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 font-display">Contact</h4>
            <p className="text-sm text-text-secondary mb-2">
              info@yookdesign.com
            </p>
            <p className="text-sm text-text-secondary">
              14/F, Henley Industrial Center,<br />
              9-15 Bute St, Hong Kong
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface-border gap-4">
          <p className="text-sm text-slate-500">© 2025 Yook Design Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-sm text-slate-500 hover:text-primary" href="#">Privacy Policy</a>
            <a className="text-sm text-slate-500 hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
