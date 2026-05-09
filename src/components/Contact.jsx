import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Let's <span className="text-accent">Connect</span></h2>
            <p className="text-secondary text-lg mb-12">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-[2rem] border border-border/50">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm">
                  <Phone size={24} />
                </div>
                <div className="text-xs uppercase tracking-widest text-secondary font-bold">Phone Number</div>
                <a href={`tel:${PERSONAL_INFO.phoneNumber}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                  {PERSONAL_INFO.phoneNumber}
                </a>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-[2rem] border border-border/50">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm">
                  <Mail size={24} />
                </div>
                <div className="text-xs uppercase tracking-widest text-secondary font-bold">Email Me</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-bold text-primary hover:text-accent transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-secondary font-medium">
                <MapPin size={18} className="text-accent" />
                {PERSONAL_INFO.location}
              </div>
            </div>

            <div className="flex justify-center items-center gap-6">
              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-all border border-border/50 shadow-sm"
              >
                <FaLinkedinIn size={24} />
              </motion.a>
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-all border border-border/50 shadow-sm"
              >
                <FaGithub size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
