"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./ContactMe.css"

export default function ContactMe() {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    // This helps ensure the section is properly registered for scrolling
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
    <motion.div
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={contactRef}
    >
      <motion.h3 variants={itemVariants}>Let's Connect</motion.h3>
      <motion.p className="cta-text" variants={itemVariants}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </motion.p>
      <motion.div className="cta-buttons" variants={itemVariants}>
        <motion.button
          className="cta-button primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("/portfolio", "_blank")}
        >
          View My Portfolio
        </motion.button>
        <motion.button
          className="cta-button secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "mailto:rayhanpyo2016@gmail.com")}
        >
          Contact Me
        </motion.button>
      </motion.div>
      <motion.div className="contact-info" variants={itemVariants}>
        <p>
          <i className="fas fa-envelope"></i> rayhanpyo2016@gmail.com
        </p>
        <p>
          <i className="fas fa-phone"></i> +63 (123) 456-789
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> Zamboanga City, PH
        </p>
      </motion.div>

      <motion.div className="social-links" variants={itemVariants}>
        <motion.a
          href="https://github.com/rayhanpayao25/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-linkedin-in"></i>
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-twitter"></i>
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-instagram"></i>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
