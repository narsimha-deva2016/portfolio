import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer 1',
      company: 'SAGEIT INC',
      period: 'Jan 2022 - Present',
      description: 'Backend Developer with 3+ years of experience in designing, developing, and deploying scalable enterprise applications using Java Spring Boot and Python.',
      achievements: [
        'Developed Java service for modifying XML content in migration files, increasing data transformation efficiency',
        'Enhanced accuracy of migration processes across 200+ XML files',
        'Achieved 35% reduction in data transition time between source and target integration tools',
        'Maintained 99% data integrity throughout the migration process',
        'Created over 1500 training data files for AI model designed to transform XML files'
      ],
      technologies: ['Java Spring Boot', 'Python FastAPI', 'MySQL', 'XML/XSD', 'YAML', 'JSON', 'Azure', 'Docker']
    },
    {
      type: 'work',
      title: 'Backend Developer',
      company: 'SAGEIT INC - Ship AI Project',
      period: '2022 - Present',
      description: 'Developed backend services for Ship AI – Boomi to MuleSoft Migration project, implementing APIs for migration data parsing, transformation, and packaging.',
      achievements: [
        'Implemented APIs for migration data parsing, transformation, and packaging',
        'Improved migration speed by 35% while maintaining 99% data integrity',
        'Resolved critical production incidents by identifying root causes and implementing fixes',
        'Collaborated in Agile/Scrum environment for timely feature delivery'
      ],
      technologies: ['Python FastAPI', 'Flask', 'Java Spring Boot', 'Azure OpenAI', 'Docker', 'React.js']
    },
    {
      type: 'education',
      title: 'Master of Computer Application',
      company: 'Chaitanya Bharathi Institute of Technology (CBIT)',
      period: '2020 - 2022',
      description: 'Specialized in Computer Applications with focus on software development and enterprise solutions.',
      achievements: [
        'Completed MCA with focus on enterprise application development',
        'Gained expertise in Java, Python, and database management systems',
        'Developed strong foundation in software engineering principles'
      ],
      technologies: ['Java', 'Python', 'Database Systems', 'Software Engineering', 'Data Structures']
    },
    {
      type: 'certification',
      title: 'Azure Cloud Services',
      company: 'Microsoft Azure',
      period: '2022',
      description: 'Professional experience with Azure cloud services including Azure Container Apps, Azure Service Bus, and Azure DevOps.',
      achievements: [
        'Extensive experience with Azure Container Apps for application deployment',
        'Implemented Azure Service Bus for message queuing and data processing',
        'Used Azure DevOps for CI/CD pipeline management'
      ],
      technologies: ['Azure', 'Azure Container Apps', 'Azure Service Bus', 'Azure DevOps', 'Docker']
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work': return FaBriefcase;
      case 'education': return FaGraduationCap;
      case 'certification': return FaTrophy;
      default: return FaCode;
    }
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Professional experience, education, and achievements
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            return (
              <motion.div
                key={index}
                className={`timeline-item ${exp.type}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <Icon />
                  </div>
                </div>
                
                <motion.div
                  className="timeline-content"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-period">{exp.period}</div>
                  </div>
                  
                  <p className="timeline-description">{exp.description}</p>
                  
                  <div className="timeline-achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

