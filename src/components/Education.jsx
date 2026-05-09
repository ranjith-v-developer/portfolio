import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
          <p className="text-secondary">My educational qualifications and certifications.</p>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <span className="flex items-center gap-1 text-sm font-semibold text-accent bg-card px-3 py-1 rounded-full">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                </div>
                <div className="text-secondary font-medium mb-2">{edu.institution}</div>
                {edu.details && (
                  <p className="text-sm text-secondary leading-relaxed mt-4 italic">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
