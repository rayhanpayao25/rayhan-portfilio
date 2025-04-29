"use client"

import { useEffect, useRef, useState } from "react"
import "./Certificate.css"

const Certificate = () => {
  const certificatesRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const certificatesContainerRef = useRef(null)
  const particlesRef = useRef(null)

  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "Front-End Web Development",
      issuer: "Udemy",
      date: "January 2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and React fundamentals.",
    },
    {
      id: 2,
      title: "React.js Advanced Concepts",
      issuer: "Coursera",
      date: "March 2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Advanced React patterns, hooks, context API, and performance optimization techniques.",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      issuer: "Google",
      date: "June 2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "User interface design, user experience principles, and design thinking methodologies.",
    },
    {
      id: 4,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Creating responsive layouts, media queries, and mobile-first design approaches.",
    },
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "October 2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Problem-solving with JavaScript, algorithms, and data structures implementation.",
    },
    {
      id: 6,
      title: "Next.js & Server-Side Rendering",
      issuer: "Vercel",
      date: "December 2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Building performant web applications with Next.js and server-side rendering techniques.",
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add("animate-in")
    }, 300)

    setTimeout(() => {
      if (descriptionRef.current) descriptionRef.current.classList.add("animate-in")
    }, 800)

    setTimeout(() => {
      if (certificatesContainerRef.current) certificatesContainerRef.current.classList.add("animate-in")
    }, 1300)

    const particlesContainer = particlesRef.current
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer)
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (certificatesRef.current) {
        certificatesRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const createParticle = (container) => {
    const particle = document.createElement("div")
    particle.classList.add("certificate-particle")

    const posX = Math.random() * 100
    const posY = Math.random() * 100

    const size = Math.random() * 15 + 5

    const duration = Math.random() * 20 + 10

    const delay = Math.random() * 5

    const opacity = Math.random() * 0.5 + 0.1

    particle.style.left = `${posX}%`
    particle.style.top = `${posY}%`
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.animationDuration = `${duration}s`
    particle.style.animationDelay = `${delay}s`
    particle.style.opacity = opacity

    container.appendChild(particle)
  }

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  const handleBackClick = () => {
    window.history.back()
  }

  return (
    <div className="certificates-container" ref={certificatesRef}>
      <div className="certificate-particles-container" ref={particlesRef}></div>

      <div className="certificates-header">
        <button className="back-button" onClick={handleBackClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
        <h1 ref={titleRef} className="certificates-title">
          My <span className="highlight">Certificates</span>
        </h1>
        <p ref={descriptionRef} className="certificates-description">
          These certificates represent my commitment to continuous learning and professional development in the field of
          web development and design. Each certification has equipped me with valuable skills that I apply to my
          projects.
        </p>
      </div>

      <div className="certificates-grid" ref={certificatesContainerRef}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate-card" onClick={() => openCertificate(certificate)}>
            <div className="certificate-image-container">
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                className="certificate-image"
              />
              <div className="certificate-overlay">
                <span>View Certificate</span>
              </div>
            </div>
            <div className="certificate-info">
              <h3>{certificate.title}</h3>
              <div className="certificate-meta">
                <span className="certificate-issuer">{certificate.issuer}</span>
                <span className="certificate-date">{certificate.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="certificate-modal">
          <div className="certificate-modal-content">
            <button className="certificate-close-button" onClick={closeCertificate}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="certificate-modal-image-container">
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                className="certificate-modal-image"
              />
            </div>
            <div className="certificate-modal-info">
              <h2>{selectedCertificate.title}</h2>
              <div className="certificate-modal-meta">
                <span className="certificate-modal-issuer">Issued by: {selectedCertificate.issuer}</span>
                <span className="certificate-modal-date">Date: {selectedCertificate.date}</span>
              </div>
              <p className="certificate-modal-description">{selectedCertificate.description}</p>
              <div className="certificate-modal-buttons">
                <button className="certificate-download-button">
                  Download Certificate
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4V16M12 16L7 11M12 16L17 11M5 20H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="certificate-verify-button">
                  Verify Certificate
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certificate
