import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Download, Mail } from 'lucide-react';

import resumeFile from '../assets/RANJITH.pdf';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-card rounded-full blur-[100px] opacity-60"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-card rounded-full blur-[100px] opacity-60"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-accent uppercase bg-card rounded-full">
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I'm <span className="text-accent">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary font-medium mb-8">
            {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            {PERSONAL_INFO.summary.split('.')[0]}. I build high-performance enterprise applications with a focus on React.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumeFile}
              download="Ranjith_V_CV.pdf"
              className="flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold shadow-lg shadow-accent/20 hover:bg-opacity-90 transition-all w-full sm:w-auto"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border-2 border-border text-primary rounded-full font-semibold hover:bg-card transition-all w-full sm:w-auto"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
