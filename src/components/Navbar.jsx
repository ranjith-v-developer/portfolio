import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isManualScroll = React.useRef(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (sectionId) => {
    isManualScroll.current = true;
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Reset manual scroll flag after the smooth scroll finishes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (isManualScroll.current) return;

      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 70 && rect.bottom >= 70) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-heading font-bold text-accent tracking-tighter">
          RV<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href.slice(1))}
              className={`relative text-sm font-medium transition-colors hover:text-accent ${activeSection === link.href.slice(1) ? 'text-accent' : 'text-secondary'
                }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all shadow-md shadow-accent/10"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border p-6 flex flex-col space-y-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href.slice(1))}
                className={`text-lg font-medium transition-colors ${activeSection === link.href.slice(1) ? 'text-accent' : 'text-secondary'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
