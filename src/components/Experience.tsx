import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Webmaster & Technical Lead',
    company: 'ITUM Computer Society',
    period: 'May 2024 - Present',
    description: 'Leading development and maintenance of society\'s web presence, organizing technical workshops, and managing junior developers for society projects.',
  },
  {
    title: 'Proprietor',
    company: 'Maple Enterprises',
    period: 'Feb 2023 - Present',
    description: 'Founded and managed technology solutions company, delivering 15+ custom software solutions with 95% client satisfaction rate.',
  },
  {
    title: 'Lead Developer',
    company: 'Busify Project',
    period: '2024',
    description: 'Led development of a public transport tracking and booking system, managing a team of 5 developers and implementing real-time features.',
  },
  {
    title: 'Full Stack Developer',
    company: 'GrillinHill Project',
    period: '2024',
    description: 'Developed complete restaurant management system with online ordering, payment processing, and real-time order tracking capabilities.',
  }
];

const skillLevels = [
  { skill: 'React/React Native', level: 90 },
  { skill: 'Flutter', level: 88 },
  { skill: 'Node.js/Express', level: 85 },
  { skill: 'PHP/Laravel', level: 85 },
  { skill: 'TypeScript/JavaScript', level: 92 },
  { skill: 'MongoDB/MySQL', level: 88 },
  { skill: 'UI/UX Design', level: 85 }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-tokyo-night-bg bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-tokyo-night-accent">{exp.company}</p>
                <p className="text-sm">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Skill Levels</h3>
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.skill}
                className="mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span>{skill.skill}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-tokyo-night-bg rounded-full h-2.5">
                  <motion.div
                    className="bg-tokyo-night-accent h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;