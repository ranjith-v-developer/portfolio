import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import {
  Monitor, Server, Database, Cloud,
  Code2, Shield,
  Cpu, Globe, Lock, MapPin,
  BarChart3, Layers, Zap, Tablet
} from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiHtml5, SiSass,
  SiReact, SiRedux, SiVuedotjs, SiAngular, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiGraphql, SiStrapi,
  SiPostgresql, SiMysql, SiRedis,
  SiJsonwebtokens, SiGit, SiPostman, SiJira
} from 'react-icons/si';

import {
  FaCss3Alt, FaAws
} from 'react-icons/fa';

const categoryIcons = {
  "Languages": <Code2 size={20} />,
  "Frontend": <Monitor size={20} />,
  "Backend & Database": <Server size={20} />,
  "Cloud & Tools": <Cloud size={20} />,
};

const skillIcons = {
  // Languages
  "JavaScript (ES6+)": <SiJavascript size={16} />,
  "TypeScript": <SiTypescript size={16} />,
  "HTML5": <SiHtml5 size={16} />,
  "CSS3": <FaCss3Alt size={16} />,
  "SCSS": <SiSass size={16} />,
  "SQL": <Database size={16} />,

  // Frontend
  "React.js": <SiReact size={16} />,
  "Redux": <SiRedux size={16} />,
  "Redux Toolkit": <SiRedux size={16} />,
  "React Hooks": <SiReact size={16} />,
  "Context API": <SiReact size={16} />,
  "Vue.js": <SiVuedotjs size={16} />,
  "Angular": <SiAngular size={16} />,
  "Responsive UI Development": <Tablet size={16} />,
  "Recharts": <BarChart3 size={16} />,
  "Tailwind CSS": <SiTailwindcss size={16} />,

  // Backend & Database
  "Node.js": <SiNodedotjs size={16} />,
  "NestJS": <SiNestjs size={16} />,
  "Express.js": <SiExpress size={16} />,
  "GraphQL": <SiGraphql size={16} />,
  "RESTful APIs": <Globe size={16} />,
  "Strapi CMS": <SiStrapi size={16} />,
  "PostgreSQL": <SiPostgresql size={16} />,
  "MySQL": <SiMysql size={16} />,
  "Redis": <SiRedis size={16} />,
  "Query Optimization": <Zap size={16} />,

  // Cloud & Tools
  "AWS Lambda": <FaAws size={16} />,
  "AWS S3": <Database size={16} />,
  "JWT Auth": <SiJsonwebtokens size={16} />,
  "RBAC": <Shield size={16} />,
  "Secure Data Handling": <Lock size={16} />,
  "Git": <SiGit size={16} />,
  "Postman": <SiPostman size={16} />,
  "Jira": <SiJira size={16} />,
  "Agile/Scrum": <Layers size={16} />,
  "Data Visualization": <BarChart3 size={16} />,
  "Geospatial Mapping": <MapPin size={16} />,
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
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-card text-secondary rounded-lg border border-border/30 transition-colors cursor-default"
                  >
                    <span className="flex-shrink-0">
                      {skillIcons[skill] || <Cpu size={14} />}
                    </span>
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
