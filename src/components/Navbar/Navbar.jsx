"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import "./Navbar.css"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About Me", to: "about-me" },
    { name: "Program", to: "programs" },
    { name: "Contact Me", to: "contact" },
  ]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Close the mobile menu first
      setIsOpen(false)

      // Small delay to ensure the menu is closed before scrolling
      setTimeout(() => {
        const yOffset = -70
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }, 100)
    } else {
      console.log(`Section with ID "${sectionId}" not found`)
    }
  }

  return (
    <motion.nav
      className="container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.img src={logo} alt="Logo" className="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />

    
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
            <button onClick={() => scrollToSection(item.to)} className="nav-link">
              {item.name}
            </button>
          </motion.li>
        ))}
        <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <motion.button className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Portfolio
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
                  <button onClick={() => scrollToSection(item.to)} className="nav-link">
                    {item.name}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <button className="btn mobile-btn">Portfolio</button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {console.log(
        "Nav items:",
        navItems.map((item) => item.to),
      )}
    </motion.nav>
  )
}

export default Navbar

