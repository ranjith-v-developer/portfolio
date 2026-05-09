import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A selection of my recent work, ranging from data analytics platforms to enterprise management systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden border border-border/50 flex flex-col group"
            >

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-card text-accent rounded-full border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
