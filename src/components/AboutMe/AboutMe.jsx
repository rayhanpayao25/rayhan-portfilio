"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./AboutMe.css"

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="about-me-container">
      {/* Hero Section with Introduction */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="profile-image">
          <motion.div
            className="image-container"
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img src="../src/assets/rayhan.png" alt="Profile" />
          </motion.div>
        </div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Rayhan Payao
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Frontend Developer & UI Designer
        </motion.h2>
        <motion.div
          className="social-links"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </motion.div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Introduction</motion.h3>
        <motion.p variants={itemVariants}>
          I'm a passionate frontend developer with over 5 years of experience creating beautiful, responsive, and
          user-friendly web applications. I specialize in React and modern JavaScript, with a strong focus on creating
          engaging user experiences that blend aesthetics with functionality.
        </motion.p>
        <motion.p variants={itemVariants}>
          My journey in tech began when I built my first website at 15, and I've been hooked ever since. I believe in
          the power of technology to transform lives and businesses, and I'm committed to creating digital experiences
          that make a difference.
        </motion.p>
      </motion.div>

      {/* Entered Contest Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Entered Contests</motion.h3>
        <motion.div className="contest-grid" variants={itemVariants}>
          <div className="contest-card">
            <div className="contest-badge">🏆 Winner</div>
            <h4>Web Innovation Hackathon 2023</h4>
            <p>Created an AI-powered accessibility tool that won first place among 200+ participants.</p>
          </div>
          <div className="contest-card">
            <div className="contest-badge">🥈 Runner-up</div>
            <h4>CSS Design Awards 2022</h4>
            <p>Designed an interactive portfolio that was recognized for its innovative use of animations.</p>
          </div>
          <div className="contest-card">
            <div className="contest-badge">🏅 Finalist</div>
            <h4>JavaScript Coding Challenge 2021</h4>
            <p>Developed a real-time collaborative coding environment in just 48 hours.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills & Expertise Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Skills & Expertise</motion.h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div key={index} className="skill-item" variants={itemVariants}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                ></motion.div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
        <motion.div className="expertise-grid" variants={itemVariants}>
          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h4>Frontend Development</h4>
            <p>Building responsive, accessible, and performant web applications with modern frameworks.</p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h4>UI/UX Design</h4>
            <p>Creating intuitive user interfaces with a focus on user experience and visual aesthetics.</p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4>Mobile Development</h4>
            <p>Developing cross-platform mobile applications using React Native and other technologies.</p>
          </div>
        </motion.div>
      </motion.div>

      

      {/* Current Work Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>What I'm Currently Working On</motion.h3>
        <motion.div className="current-work" variants={itemVariants}>
          <div className="work-image">
            <img src="https://via.placeholder.com/400x300" alt="Current Project" />
          </div>
          <div className="work-content">
            <h4>AI-Powered Design System</h4>
            <p>
              I'm currently leading the development of an innovative design system that uses AI to adapt to user
              preferences and accessibility needs in real-time.
            </p>
            <p>
              This project combines my passion for frontend development with emerging AI technologies to create more
              inclusive digital experiences.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>TensorFlow.js</span>
              <span>WebGL</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Career Goals Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Career Goals</motion.h3>
        <motion.div className="goals-container" variants={itemVariants}>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h4>Short-term</h4>
            <p>
              Expand my expertise in WebGL and 3D web technologies to create more immersive user experiences. Complete
              advanced certification in AI integration with frontend applications.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4>Mid-term</h4>
            <p>
              Lead a team of developers in creating innovative web solutions. Contribute to open-source projects that
              focus on accessibility and inclusive design. Speak at major tech conferences.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h4>Long-term</h4>
            <p>
              Found a tech startup focused on creating tools that make web development more accessible to everyone.
              Mentor the next generation of developers and contribute to advancing web standards.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Personal Touch Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Personal Touch</motion.h3>
        <motion.div className="personal-grid" variants={itemVariants}>
          <div className="personal-card">
            <div className="personal-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <h4>Fun Fact</h4>
            <p>
              I once coded an entire website while camping at the base of Mount Everest, using a solar-powered laptop
              and satellite internet. The website won a design award later that year!
            </p>
          </div>
          <div className="personal-card">
            <div className="personal-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h4>Life-Changing Trip</h4>
            <p>
              Backpacking through Southeast Asia for six months changed my perspective on design. I now incorporate
              principles of minimalism and balance inspired by the temples and landscapes I encountered.
            </p>
          </div>
          <div className="personal-card">
            <div className="personal-icon">
              <i className="fas fa-guitar"></i>
            </div>
            <h4>Hobbies</h4>
            <p>
              When I'm not coding, you'll find me playing jazz guitar, practicing aerial yoga, or experimenting with
              molecular gastronomy in my kitchen. I believe diverse interests fuel creativity in tech.
            </p>
          </div>
        </motion.div>
      </motion.div>

        
    </div>
  )
}
