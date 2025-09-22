import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiJest, SiWebpack } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend Technologies',
      skills: [
        { name: 'Java Spring Boot', level: 95, icon: FaCode, color: '#6DB33F' },
        { name: 'Python FastAPI', level: 90, icon: FaPython, color: '#3776AB' },
        { name: 'Spring MVC', level: 90, icon: FaCode, color: '#6DB33F' },
        { name: 'REST APIs', level: 95, icon: FaServer, color: '#FF6B6B' },
        { name: 'Microservices', level: 85, icon: FaServer, color: '#4ECDC4' },
        { name: 'Flask', level: 80, icon: FaPython, color: '#000000' },
      ]
    },
    databases: {
      title: 'Database & Cloud',
      skills: [
        { name: 'MySQL', level: 90, icon: FaDatabase, color: '#4479A1' },
        { name: 'Oracle', level: 85, icon: FaDatabase, color: '#F80000' },
        { name: 'MongoDB', level: 80, icon: SiMongodb, color: '#47A248' },
        { name: 'Azure', level: 85, icon: FaAws, color: '#0078D4' },
        { name: 'Docker', level: 80, icon: FaDocker, color: '#2496ED' },
        { name: 'Azure Container Apps', level: 75, icon: FaAws, color: '#0078D4' },
      ]
    },
    frontend: {
      title: 'Frontend & Tools',
      skills: [
        { name: 'React.js', level: 85, icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', level: 90, icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 85, icon: FaHtml5, color: '#E34F26' },
        { name: 'Git/GitHub', level: 90, icon: FaGitAlt, color: '#F05032' },
        { name: 'JUnit Testing', level: 80, icon: SiJest, color: '#C21325' },
        { name: 'Azure DevOps', level: 75, icon: FaAws, color: '#0078D4' },
      ]
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skillCategories[category].title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-progress">
                  <motion.div
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="summary-card">
            <h3>Continuous Learning</h3>
            <p>
              I'm always exploring new technologies and improving my existing skills. 
              Currently learning about microservices architecture and advanced React patterns.
            </p>
          </div>
          <div className="summary-card">
            <h3>Problem Solving</h3>
            <p>
              Strong analytical thinking and debugging skills help me tackle complex 
              challenges and find efficient solutions to technical problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

