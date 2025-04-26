"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react" // Using lucide icons for menu toggle

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when a link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu}>
            <h1>RyeePokédex</h1>
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Navigation menu with conditional classes for mobile */}
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-item" onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/team" className="navbar-item" onClick={closeMenu}>
            MY TEAM
          </Link>
          <Link to="/battle" className="navbar-item" onClick={closeMenu}>
            BATTLE
          </Link>
          <Link to="/history" className="navbar-item" onClick={closeMenu}>
          BATTLE HISTORY
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
