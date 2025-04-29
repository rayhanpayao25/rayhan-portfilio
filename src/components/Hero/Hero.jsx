"use client"

import { useEffect, useRef, useState } from "react"
import "./Hero.css"

import portraitImage from "../../assets/rayhanpayao.jpg"
import videoFile from "../../assets/rayhan.mov.mov"

const Hero = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsContainerRef = useRef(null)
  const particlesRef = useRef(null)
  const videoRef = useRef(null)
  const mobileVideoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMobileVideoPlaying, setIsMobileVideoPlaying] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (textRef.current) textRef.current.classList.add("animate-in")
    }, 300)

    setTimeout(() => {
      if (paragraphRef.current) paragraphRef.current.classList.add("animate-in")
    }, 800)

    setTimeout(() => {
      if (buttonsContainerRef.current) buttonsContainerRef.current.classList.add("animate-in")
    }, 1300)

    const particlesContainer = particlesRef.current
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer)
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }

      const opacity = Math.max(1 - scrollPosition / 500, 0)
      if (textRef.current && paragraphRef.current && buttonsContainerRef.current) {
        textRef.current.style.opacity = opacity
        paragraphRef.current.style.opacity = opacity
        buttonsContainerRef.current.style.opacity = opacity
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

  const toggleVideo = (isMobile = false) => {
    if (isMobile) {
      if (mobileVideoRef.current) {
        if (isMobileVideoPlaying) {
          mobileVideoRef.current.pause()
        } else {
          mobileVideoRef.current.play()
        }
        setIsMobileVideoPlaying(!isMobileVideoPlaying)
      }
    } else {
      if (videoRef.current) {
        if (isVideoPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
        setIsVideoPlaying(!isVideoPlaying)
      }
    }
  }

  const handleHireClick = () => {
    window.location.href = "/#contact"
  }

  const handleDownloadCV = () => {
    window.open("../Rayhan.pdf", "_blank")
  }

  const handleViewCertificates = () => {
    window.location.href = "/certificates"
  }

  const handleLearnMoreClick = () => {
    window.location.href = "/blogpost"
  }

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="particles-container" ref={particlesRef}></div>

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

          <div className="buttons-container" ref={buttonsContainerRef}>
            <button className="hire-button" onClick={handleHireClick}>
              Hire Me
              <span className="button-glow"></span>
            </button>
            <button className="secondary-button" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="secondary-button" onClick={handleViewCertificates}>
              View Certificates
            </button>
          </div>
        </div>

        <div className="portrait-container">
          <div className="portrait-frame">
            <img src={portraitImage || "/placeholder.svg"} alt="Rayhan Portrait" className="portrait-image" />
          </div>
        </div>
      </div>

      <div className="video-section desktop-view">
        <div className="video-split-container">
          <div className="video-left-container">
            <h2 className="section-title video-title">Watch My Journey</h2>
            <div className="video-wrapper" style={{ maxWidth: "100%" }}>
              <video
                ref={videoRef}
                className="feature-video"
                onClick={() => toggleVideo(false)}
                controls
                preload="metadata"
                playsInline
                style={{ maxHeight: "450px" }}
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={`play-button ${isVideoPlaying ? "hidden" : ""}`} onClick={() => toggleVideo(false)}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              </div>
            </div>

            <button className="education-tour-button" onClick={handleLearnMoreClick}>
              View More About My Education Tour - 2025
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
                  <h4>User-Centered Focus</h4>
                  <p>
                    I prioritize the needs and preferences of users, designing with empathy to ensure intuitive and
                    enjoyable experiences.
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
                  <h4>Responsive Design</h4>
                  <p>All my projects are fully responsive, ensuring a seamless experience across all devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-section mobile-view">
        <h2 className="section-title video-title">Watch My Journey</h2>

        <div className="mobile-video-container">
          <video
            ref={mobileVideoRef}
            className="mobile-video"
            onClick={() => toggleVideo(true)}
            controls
            preload="metadata"
            playsInline
            style={{ maxHeight: "350px" }}
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className={`play-button mobile-play ${isMobileVideoPlaying ? "hidden" : ""}`}
            onClick={() => toggleVideo(true)}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </div>
        </div>

        <button className="education-tour-button mobile-tour-button" onClick={handleLearnMoreClick}>
          View More About My Education Tour - 2025
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

        <div className="mobile-card">
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
                  I approach each project with fresh ideas and innovative thinking to create unique digital experiences.
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
                <p>All my projects are responsive, ensuring a seamless experience across all devices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
