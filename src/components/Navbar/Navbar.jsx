"use client"
import { motion } from "framer-motion"
import "./Navbar.css"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  const logoSizeInPixels = Math.round(5 * 37.7952)

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Program", to: "programs" },
    { name: "About Me", to: "about-me" },
    { name: "Contact Me", to: "contact" },
  ]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -70 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{ width: "100%", height: "auto" }}
    >
   <motion.img
  src={logo}
  alt="Logo"
  className="logo"
  style={{ width: "5px", height: "auto" }}  // Change this to 5px
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>


      <ul>
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
    </motion.nav>
  )
}

export default Navbar

