import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaServer, FaPalette } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SHIP-AI – MuleSoft to Boomi Migration',
      description: 'Automated migration application that transforms MuleSoft integration processes to Boomi projects by parsing and transforming Boomi components, generating equivalent Boomi XML code, and packaging deployable Boomi projects.',
      image: '/api/placeholder/400/300',
      technologies: ['Python FastAPI', 'Java Spring Boot', 'MySQL', 'Azure OpenAI', 'Docker', 'React.js'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Ship Accelerator',
      description: 'Data migration management application that extracts data from source integration systems and migrates it to target integration tools, ensuring accurate and efficient data transitions with 35% reduction in transition time.',
      image: '/api/placeholder/400/300',
      technologies: ['Java Spring Boot', 'MySQL', 'XML/XSD', 'YAML', 'JSON', 'Azure Container Apps'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'VMS - Vehicle Management System',
      description: 'Comprehensive vehicle management system with React frontend, Java Spring Boot backend, and MySQL database. Includes mobile app for on-the-go management with driver tracking and cost calculation.',
      image: '/api/placeholder/400/300',
      technologies: ['Java Spring Boot', 'React.js', 'MySQL', 'Docker', 'Google Maps API', '2Factor SMS API'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'SHIP-Discovery',
      description: 'Monitoring and support dashboard for integration platform focused on showing analytics and real-time status of applications running in different environments and machines.',
      image: '/api/placeholder/400/300',
      technologies: ['Java 8', 'Azure Service Bus', 'Linux RedHat', 'File Processing'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'General Motor Financial',
      description: 'Scalable Spring Boot services and MySQL solutions for loan management and payment processing, integrated third-party APIs for credit scoring with compliance and audit trail functionality.',
      image: '/api/placeholder/400/300',
      technologies: ['Java Spring Boot', 'Oracle', 'Azure', 'JIRA', 'SonarQube', 'JFrog'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'XML Migration Service',
      description: 'Java service for modifying XML content in migration files, increasing data transformation efficiency and enhancing accuracy across 200+ XML files with 99% data integrity.',
      image: '/api/placeholder/400/300',
      technologies: ['Java', 'XML Processing', 'File Utils', 'Data Transformation'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'fullstack', label: 'Full Stack', icon: FaCode },
    { id: 'frontend', label: 'Frontend', icon: FaPalette }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>Featured</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>Interested in seeing more of my work?</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <FaGithub />
            <span>View All on GitHub</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

