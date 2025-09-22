import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaHeart, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: FaCode,
      title: 'Backend Development',
      description: 'Expert in Java Spring Boot, Python FastAPI, and building scalable REST APIs with microservices architecture.'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Achieved 35% reduction in data transition time and 99% data integrity across enterprise applications.'
    },
    {
      icon: FaHeart,
      title: 'Problem Solving',
      description: 'Strong analytical thinking and debugging skills to tackle complex backend challenges and production issues.'
    },
    {
      icon: FaLightbulb,
      title: 'AI Integration',
      description: 'Experience with Azure OpenAI API and template-based code generation for automated migration processes.'
    }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my journey and what drives me
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-intro">
              <h3>Hello! I'm a passionate Backend Developer</h3>
              <p>
                With over 3 years of experience in backend development, I specialize in designing, developing, 
                and deploying scalable enterprise applications using Java (Spring, Spring Boot, Spring MVC) and Python. 
                My journey began with a curiosity about how backend systems work, and it has evolved into 
                a deep passion for crafting robust solutions that handle complex business logic.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and improve people's 
                lives. Whether it's building REST APIs, implementing microservices architectures, 
                or optimizing database performance, I approach every project with dedication and attention to detail.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  5+
                </motion.div>
                <div className="stat-label">Major Projects</div>
              </div>
              <div className="stat-item">
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  3+
                </motion.div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  99%
                </motion.div>
                <div className="stat-label">Data Integrity</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

