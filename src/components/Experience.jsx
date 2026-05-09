import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-secondary">My career path and the companies I've had the pleasure to work with.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white md:-translate-x-1/2 top-0 z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-card p-8 rounded-3xl border border-border/50 relative">
                    {/* Arrow (Desktop) */}
                    <div className={`hidden md:block absolute top-8 w-4 h-4 bg-card border-t border-l border-border/50 ${idx % 2 === 0 ? '-left-2 -rotate-45' : '-right-2 rotate-[135deg]'}`} />

                    <div className="flex flex-col gap-2 mb-6">
                      <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                      <div className="text-accent font-semibold">{exp.company}</div>
                      <div className="flex items-center gap-4 text-sm text-secondary">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {exp.duration}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> Chennai</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3 text-secondary text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
