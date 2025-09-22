import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import Typewriter from './Typewriter';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = heroRef.current;
      if (hero) {
        const { left, top, width, height } = hero.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        hero.style.setProperty('--mouse-x', x);
        hero.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/narsimhadeva', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/narsimhadeva', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:glnarsimhadeva@gmail.com', label: 'Email' },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-gradient" />
        <div className="hero-pattern" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text">Goulikar Laxmi Narasimha Deva</span>
            </motion.h1>
            
            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typewriter
                texts={[
                  'Backend Developer',
                  'Java Spring Boot Expert',
                  'Python Developer',
                  'REST API Specialist',
                  'Microservices Architect',
                  'Full Stack Developer'
                ]}
                speed={100}
                deleteSpeed={50}
                delay={2000}
              />
            </motion.div>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Backend Developer with 3+ years of experience in designing, developing, and deploying scalable enterprise applications. 
              Passionate about building robust REST APIs, microservices architectures, and high-performance backend solutions.
            </motion.p>
            
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    aria-label={link.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-image-container">
              <div className="hero-image">
                <img 
                  src="profile.jpg" 
                  alt="Narasimha Deva - Backend Developer"
                  className="profile-photo"
                />
              </div>
              <div className="floating-elements">
                <motion.div
                  className="floating-element element-1"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>React</span>
                </motion.div>
                <motion.div
                  className="floating-element element-2"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>JS</span>
                </motion.div>
                <motion.div
                  className="floating-element element-3"
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>CSS</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.button
          className="scroll-indicator"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowDown />
          <span>Scroll Down</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

