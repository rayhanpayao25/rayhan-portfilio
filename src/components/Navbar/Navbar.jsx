"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)

    const handleScroll = () => {
      const sections = ["hero", "about-me", "contact", "programs", "projects"]

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)

            const path = sectionId === "hero" ? "/" : `/#${sectionId}` // Add # for specific sections
            if (window.location.pathname !== path) {
              window.history.pushState(null, "", path)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Handle initial hash or pathname on page load or refresh
    const handleInitialPath = () => {
      const path = window.location.pathname + window.location.hash
      const sectionId = path.split('#')[1] || "hero"; // Get sectionId from hash or fallback to "hero"
      
      const validSections = ["hero", "about-me", "contact-me", "projects", "programs"]
      if (validSections.includes(sectionId)) {
        scrollToSection(sectionId, false)
      } else {
        scrollToSection("hero", false) // If no valid section, scroll to hero
      }
    }

    handleInitialPath()

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", to: "hero", path: "/" },
    { name: "About Me", to: "about-me", path: "/about-me" },
    { name: "Contact Me", to: "contact", path: "/contact" },
    { name: "Projects", to: "projects", path: "/projects" },
    { name: "Program", to: "programs", path: "/programs" },
  ]

  const scrollToSection = (sectionId, updateUrl = true) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setIsOpen(false)

      if (updateUrl) {
        const path = sectionId === "hero" ? "/" : `/#${sectionId}` // Add # for specific sections
        window.history.pushState(null, "", path)
      }

      setTimeout(() => {
        const yOffset = -80 // Increased offset to account for navbar height
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }, 100)
    } else {
      console.log(`Section with ID "${sectionId}" not found`)
    }
  }

  // Handle Blogpost navigation
  const navigateToBlogpost = () => {
    window.location.href = "/blogpost"; // Navigate to the blogpost page in the same tab
  }

  return (
    <motion.nav
      className="container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* Logo with image */}
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <img 
          src="../src/assets/rayhan.png" 
          alt="Rayhan Logo" 
          className="logo-img" 
        />
        <span className="logo-text">Rayhan</span>
      </div>
      
      <div className="mobile-menu-button">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul className="desktop-menu">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection(item.to)}
              className={`nav-link ${activeSection === item.to ? "active" : ""}`}
            >
              {item.name}
            </button>
          </motion.li>
        ))}
        <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToBlogpost} // Navigate to the Blogpost page in the same tab
          >
            Blogpost
          </motion.button>
        </motion.li>
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.to)}
                    className={`nav-link ${activeSection === item.to ? "active" : ""}`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <button className="btn mobile-btn" onClick={navigateToBlogpost}> {/* Navigate in the same tab */}
                  Blogpost
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
