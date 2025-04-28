"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import "./AboutMe.css"

// Import all images at the top of your file
import profileImage from "../../assets/rayray.jpg"
import qaImage from "../../assets/qa.jpg"
import volleyballImage1 from "../../assets/v1.jpg"
import mlbbImage from "../../assets/mlbb.jpg"
import volleyballImage2 from "../../assets/v2.jpg"

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const skills = []

  // Simplified animation variants for better mobile performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.3,
      },
    },
  }

  // If user prefers reduced motion or is on mobile, use simpler animations
  const shouldReduceMotion = prefersReducedMotion || isMobile

  return (
    <div className="about-me-container">
      {/* Hero Section with Introduction */}
      <motion.div
        className="hero-section"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="profile-image">
          <motion.div
            className="image-container"
            initial={shouldReduceMotion ? { opacity: 1 } : { rotate: -10, scale: 0.8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img src={profileImage || "/placeholder.svg"} alt="Profile" />
          </motion.div>
        </div>
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { y: -50, opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Rayhan Payao
        </motion.h1>
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { y: 50, opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Frontend Developer & UI Designer
        </motion.h2>
        <motion.div
          className="social-links"
          initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0, opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="https://github.com/rayhanpayao25/rayhan-portfilio/" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rayhan-payao-747296354/" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/rayray.pw" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </motion.div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Introduction</motion.h3>
        <motion.p variants={itemVariants}>
          I'm a passionate frontend developer still early in my journey, but I've already spent a few years building
          beautiful, responsive, and user-friendly web applications. I mainly work with React, Html/Css and modern
          JavaScript, and I really love finding that sweet spot between good design and smooth functionality.
        </motion.p>
        <motion.p variants={itemVariants}>
          I believe technology has the power to change lives, and I'm excited to keep growing, learning, and building
          projects that actually make an impact. Every new challenge is an opportunity to innovate, create meaningful
          solutions, and contribute to a better future through technology.
        </motion.p>
      </motion.div>

      {/* Skills & Expertise Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
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
            <p>Developing cross-platform mobile applications using Android studio, Flutter and other technologies.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Current Work Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}> I'm Currently Working As</motion.h3>
        <motion.div className="current-work" variants={itemVariants}>
          <div className="work-image">
            <img src={qaImage || "/placeholder.svg"} alt="Current Project" />
          </div>
          <div className="work-content">
            <h4>QUALITY ASSURANCE SPECIALIST</h4>
            <p>
              I have over a year of experience as a Quality Assurance Specialist at Salary.com, working remotely. I use
              tools like Jira and DevOps to manage workflows, track issues, and ensure the quality of products. My
              responsibilities include testing, identifying bugs, and providing feedback to development teams to improve
              functionality.
            </p>
            <p>
              As a QA Specialist, I work closely with cross-functional teams to ensure that all products meet the
              highest standards before release. With a strong focus on detail and efficiency, I help maintain smooth
              project timelines and ensure the final products meet customer expectations.
            </p>
            <div className="tech-stack">
              <span>Javascript</span>
              <span>Jira</span>
              <span>Devops</span>
              <span>Html</span>
              <span>Css</span>
              <span>Test plan</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Career Goals Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Career Goals</motion.h3>
        <motion.div className="goals-container" variants={itemVariants}>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h4>Short-term</h4>
            <p>
              After my graduation I want to Enhance my proficiency in ReactJs and 3D web technologies to craft more
              engaging and interactive user experiences. Obtain an advanced certification in integrating AI with
              frontend development.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4>Mid-term</h4>
            <p>
              As I have come this far, I want to manage a team of developers to build creative web solutions. Help with
              open-source projects that focus on accessibility and inclusive design. Give talks at important tech
              conferences.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h4>Long-term</h4>
            <p>
              I will build a tech company with a team of talented individuals from my alma mater, focused on creating
              tools that make web development more accessible to everyone. I'll mentor the next generation of developers
              and work towards advancing web standards.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Sports */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Sports</motion.h3>
        <motion.div className="contest-grid" variants={itemVariants}>
          <div className="contest-card">
            <div className="contest-image">
              <img src={volleyballImage1 || "/placeholder.svg"} alt="Volleyball Championship" />
            </div>
            <div className="contest-badge">🏆 Champion</div>
            <h4>Wmsu Pathfit Championship</h4>
            <p>2021-2022 Wmsu Pathfit Championship </p>
          </div>
          <div className="contest-card">
            <div className="contest-image">
              <img src={mlbbImage || "/placeholder.svg"} alt="Web Innovation Hackathon 2023" />
            </div>
            <div className="contest-badge">🏆 Champion</div>
            <h4>SpookFest MLBB Tournament Champions</h4>
            <p>E-sports Champion 2021 BSIT 4A</p>
          </div>
          <div className="contest-card">
            <div className="contest-image">
              <img src={volleyballImage2 || "/placeholder.svg"} alt="Volleyball Tournament" />
            </div>
            <div className="contest-badge">🥉 Runner-up</div>
            <h4>Wmsu Palaro - Volleyball </h4>
            <p>2022-2023 Wmsu Palaro Woman Volleyball - College of Computing Studies</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Personal Touch Section */}
      <motion.div
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible || shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.h3 variants={itemVariants}>Personal Touch</motion.h3>
        <motion.div className="personal-grid" variants={itemVariants}>
          <div className="personal-card">
            <div className="personal-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <h4>Fun Fact</h4>
            <p>
              I love cramming because honestly, it's the only time I feel like a real academic weapon. All of my
              creativity comes out and I become super motivated and focused when doing tasks. There's this one time I
              once coded an website while in side the Tricycle.
            </p>
          </div>
          <div className="personal-card">
            <div className="personal-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h4>Life-Changing Trip</h4>
            <p>
              Backpacking through Luzon for 10 days for our Academic tour changed my perspective on design. I now
              incorporate elements of natural beauty and cultural richness inspired by the mountains, buildings, and
              historic towns I explored.
            </p>
          </div>
          <div className="personal-card">
            <div className="personal-icon">
              <i className="fas fa-guitar"></i>
            </div>
            <h4>Hobbies</h4>
            <p>
              When I'm not coding, you'll find me playing guitar, playing piano, or playing mobile games. I believe
              diverse interests fuel creativity in tech.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
