"use client"

import { useEffect, useRef, useState } from "react"
import "./Hero.css"

import portraitImage from "../../assets/rayhanpayao.jpg"
import videoFile from "../../assets/rayhan.mov.mov" // Import the video file

const Hero = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const particlesRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    // Add animation classes after component mounts
    setTimeout(() => {
      textRef.current.classList.add("animate-in")
    }, 300)

    setTimeout(() => {
      paragraphRef.current.classList.add("animate-in")
    }, 800)

    setTimeout(() => {
      buttonRef.current.classList.add("animate-in")
    }, 1300)

    // Create particles
    const particlesContainer = particlesRef.current
    for (let i = 0; i < 50; i++) {
      createParticle(particlesContainer)
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }

      // Fade out elements as user scrolls down
      const opacity = Math.max(1 - scrollPosition / 500, 0)
      if (textRef.current && paragraphRef.current && buttonRef.current) {
        textRef.current.style.opacity = opacity
        paragraphRef.current.style.opacity = opacity
        buttonRef.current.style.opacity = opacity
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const createParticle = (container) => {
    const particle = document.createElement("div")
    particle.classList.add("particle")

    // Random position
    const posX = Math.random() * 100
    const posY = Math.random() * 100

    // Random size
    const size = Math.random() * 15 + 5

    // Random animation duration
    const duration = Math.random() * 20 + 10

    // Random delay
    const delay = Math.random() * 5

    // Random opacity
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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  // Function to handle the hire button click
  const handleHireClick = () => {
    window.location.href = "/#contact"
  }

  function handleLearnMoreClick() {
    window.location.href = "/blogpost"
  }

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="particles-container" ref={particlesRef}></div>

      {/* Main Hero Content */}
      <div className="hero-split">
        <div className="hero-content">
          <h1 ref={textRef} className="hero-title">
            Hi, I am <span className="highlight">Rayhan</span>
          </h1>

          <p ref={paragraphRef} className="hero-paragraph">
            Welcome to my little corner of the web. I'm a front-end developer, and I'm all about turning ideas into
            interactive, fun, and beautiful websites. I'm here to make your web experience something special. Take a
            look around, explore, and feel free to reach out if you want to create something awesome together!
          </p>

          <button ref={buttonRef} className="hire-button" onClick={handleHireClick}>
            Hire Me
            <span className="button-glow"></span>
          </button>
        </div>

        <div className="portrait-container">
          <div className="portrait-frame">
            <img src={portraitImage || "/placeholder.svg"} alt="Rayhan Portrait" className="portrait-image" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down">
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2 className="section-title">Watch My Introduction</h2>
        <div className="video-split-container">
          <div className="video-left-container">
            <div className="video-wrapper">
              <video
                ref={videoRef}
                poster={portraitImage} // Use your portrait as the video poster
                className="feature-video"
                onClick={toggleVideo}
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={`play-button ${isVideoPlaying ? "hidden" : ""}`} onClick={toggleVideo}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          <div className="video-right-card">
            <h3>Why Work With Me</h3>
            <div className="card-content">
              <div className="card-item">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#e83e8c"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="card-text">
                  <h4>Creative Solutions</h4>
                  <p>
                    I approach each project with fresh ideas and innovative thinking to create unique digital
                    experiences.
                  </p>
                </div>
              </div>

              <div className="card-item">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#e83e8c"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="card-text">
                  <h4>Attention to Detail</h4>
                  <p>I focus on the small details that make a big difference in user experience and visual appeal.</p>
                </div>
              </div>

              <div className="card-item">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#e83e8c"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="card-text">
                  <h4>Responsive Design</h4>
                  <p>All my projects are fully responsive, ensuring a seamless experience across all devices.</p>
                </div>
              </div>
            </div>

            <button className="learn-more-button" onClick={handleLearnMoreClick}>
              Learn More About My Process
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
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

      {/* Portfolio Gallery */}
      <div className="portfolio-preview">
        <h2 className="section-title">Featured Projects</h2>
        <div className="image-gallery">
          <div className="gallery-item">
            <img src="/placeholder.svg?height=300&width=400" alt="Project 1" />
            <div className="overlay">
              <h3>E-Commerce Website</h3>
              <p>React, Node.js, MongoDB</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/placeholder.svg?height=300&width=400" alt="Project 2" />
            <div className="overlay">
              <h3>Portfolio Template</h3>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/placeholder.svg?height=300&width=400" alt="Project 3" />
            <div className="overlay">
              <h3>Mobile App UI</h3>
              <p>React Native, Firebase</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="second-section">
        <div className="skills-showcase">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React</div>
            <div className="skill-item">Vue</div>
            <div className="skill-item">SASS</div>
            <div className="skill-item">Tailwind</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">Figma</div>
            <div className="skill-item">Responsive Design</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
