"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "./Navbar.css"

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
      setScrolled(window.scrollY > 20)

      const sections = ["hero", "about-me", "contact", "programs", "projects"]

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)

            const path = sectionId === "hero" ? "/" : `/#${sectionId}`
            if (window.location.pathname !== path) {
              window.history.pushState(null, "", path)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    const handleInitialPath = () => {
      const hash = window.location.hash.replace("#", "")

      if (hash && ["hero", "about-me", "contact", "projects", "programs"].includes(hash)) {
        scrollToSection(hash, false)
      } else {
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
        const path = sectionId === "hero" ? "/" : `/#${sectionId}`
        window.history.pushState(null, "", path)
      }

      // Add offset for navbar height to prevent title from being covered
      const navbarHeight = 80 // Adjust this value based on your actual navbar height
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      })
    } else {
      console.log(`Section with ID "${sectionId}" not found`)
    }
  }

  const navigateToBloghome = () => {
    setIsOpen(false)
    window.location.href = "https://ryeeeblogpost.netlify.app/"
  }

  return (
    <nav className={`container ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <img src={logoImage || "/placeholder.svg?height=40&width=40"} alt="Rayhan Logo" className="logo-img" />
        <span className="logo-text">Portfolio</span>
      </div>

      <div className="mobile-menu-button">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul className="desktop-menu">
        {navItems.map((item, index) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.to)}
              className={`nav-link ${activeSection === item.to ? "active" : ""}`}
            >
              {item.name}
            </button>
          </li>
        ))}
        <li>
          <button className="btn" onClick={navigateToBloghome}>
            Blog Post
          </button>
        </li>
      </ul>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.to)}
                className={`nav-link ${activeSection === item.to ? "active" : ""}`}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button className="btn mobile-btn" onClick={navigateToBloghome}>
            Blog Post
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
