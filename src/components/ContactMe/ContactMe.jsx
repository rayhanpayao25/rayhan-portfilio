"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./ContactMe.css"

export default function ContactMe() {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

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
    <div id="contact" className="contact-container">
      <motion.div
        className="contact-card"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        ref={contactRef}
      >
        <motion.h2 className="contact-title" variants={itemVariants}>
          Let's Connect
        </motion.h2>
        <motion.div className="contact-underline" variants={itemVariants}></motion.div>

        <motion.p className="contact-description" variants={itemVariants}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div className="contact-buttons" variants={itemVariants}>
        
            
        <button className="portfolio-button" onClick={() => (window.location.href = "/#projects")}>
        View My Projects
      </button>
          <button className="contact-button" onClick={() => (window.location.href = "mailto:rayhanpyo2016@gmail.com")}>
      Contact Me
    </button>
        </motion.div>

        <motion.div className="contact-info" variants={itemVariants}>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>rayhanpyo2016@gmail.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+63 (123) 456-789</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Zamboanga City, PH</span>
          </div>
        </motion.div>

        <motion.div className="social-icons" variants={itemVariants}>
          <a href="https://https//github.com/rayhanpayao25/" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rayhan-payao-747296354/" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com/rayraysoo.25/" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
