"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import "./Navbar.css"

// Import the logo image at the top of the file
import logoImage from "../../assets/rayray.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

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
      // Add scrolled state for styling
      setScrolled(window.scrollY > 20)

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
      // Get the hash from the URL (without the #)
      const hash = window.location.hash.replace("#", "")

      // If there's a hash and it's a valid section, scroll to it
      if (hash && ["hero", "about-me", "contact", "projects", "programs"].includes(hash)) {
        scrollToSection(hash, false)
      } else {
        // If no valid hash, scroll to hero
        scrollToSection("hero", false)
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
    { name: "About Me", to: "about-me", path: "/#about-me" },
    { name: "Contact Me", to: "contact", path: "/#contact" },
    { name: "Projects", to: "projects", path: "/#projects" },
    { name: "Program", to: "programs", path: "/#programs" },
  ]

  const scrollToSection = (sectionId, updateUrl = true) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setIsOpen(false)

      if (updateUrl) {
        const path = sectionId === "hero" ? "/" : `/#${sectionId}` // Add # for specific sections
        window.history.pushState(null, "", path)
      }

      // Use scrollIntoView with behavior: smooth instead of manual scrollTo
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      console.log(`Section with ID "${sectionId}" not found`)
    }
  }

  const navigateToBlogpost = () => {
    setIsOpen(false)

    // Use relative path instead of absolute path
    // This will work both on localhost and Netlify
    window.location.href = "./blogpost"
  }

  return (
    <motion.nav
      className={`container ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* Logo with image - using imported image */}
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <img src={logoImage || "/placeholder.svg?height=40&width=40"} alt="Rayhan Logo" className="logo-img" />
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
            onClick={navigateToBlogpost}
          >
            Blogpost
          </motion.button>
        </motion.li>
      </ul>

      {/* Mobile menu with fixed positioning */}
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
                <button className="btn mobile-btn" onClick={navigateToBlogpost}>
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
