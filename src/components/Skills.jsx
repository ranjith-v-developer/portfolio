import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Monitor, Server, Database, Cloud } from 'lucide-react';

const categoryIcons = {
  "Frontend": <Monitor size={20} />,
  "Backend": <Server size={20} />,
  "Database": <Database size={20} />,
  "Cloud & Tools": <Cloud size={20} />,
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 text-accent">
                <div className="p-2 bg-card rounded-xl">
                  {categoryIcons[category.category] || <Monitor size={20} />}
                </div>
                <h3 className="font-bold text-primary">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, backgroundColor: "#8B4513", color: "#FFFFFF" }}
                    className="px-3 py-1.5 text-sm bg-card text-secondary rounded-lg border border-border/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
