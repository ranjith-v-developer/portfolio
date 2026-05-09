import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Award, Briefcase, Code } from 'lucide-react';

import profileImg from '../assets/Ranjith.jpg';

const About = () => {
  const highlights = [
    { icon: <Award size={24} />, label: "5+ Years", sub: "Experience" },
    { icon: <Briefcase size={24} />, label: "3 Roles", sub: "Progressive Growth" },
    { icon: <Code size={24} />, label: "4+ Major", sub: "Projects Delivered" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engineering <span className="text-accent">Seamless</span> Digital Experiences
            </h2>
            <div className="space-y-4 text-secondary text-lg leading-relaxed">
              <p>
                {PERSONAL_INFO.summary}
              </p>
              <p>
                My journey in tech has been driven by a curiosity to understand how things work at scale. From building responsive frontends to architecting serverless backends, I enjoy the challenge of creating holistic solutions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-card rounded-2xl text-center border border-border/50"
                >
                  <div className="text-accent flex justify-center mb-2">{item.icon}</div>
                  <div className="font-bold text-primary">{item.label}</div>
                  <div className="text-xs text-secondary uppercase tracking-tight">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="aspect-square bg-card rounded-3xl overflow-hidden relative border-2 border-border/30">
               <img 
                 src={profileImg} 
                 alt={PERSONAL_INFO.name} 
                 className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
               />
               {/* Subtle overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
