import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-white border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-2xl font-heading font-bold text-accent mb-4 tracking-tighter">
          RV<span className="text-primary">.</span>
        </div>
        <p className="text-secondary text-sm">
          &copy; {currentYear} Ranjith V. All rights reserved.
        </p>
        <p className="text-secondary text-xs mt-2">
          Designed & Built with ❤️ by <span className="text-accent font-medium">{PERSONAL_INFO.name}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
