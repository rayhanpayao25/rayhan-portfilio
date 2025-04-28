"use client"

import { useState, useEffect } from "react"
import "./Footer.css"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Rayhan Portfolio</h3>
            <p className="footer-description">Building innovative solutions with passion and creativity.</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              <a
                href="https://github.com/rayhanpayao25"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rayhanpayao"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@rayhanportfolio.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rayhan Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
