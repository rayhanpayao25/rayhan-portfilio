"use client"

import { useEffect, useRef, useState } from "react"
import "./Hero.css"

import portraitImage from "../../assets/rayhanpayao.jpg"
import videoFile from "../../assets/rayhan.mov.mov"

import resumePDF from "../../assets/Rayhan.pdf"

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
    if (resumePDF) {
      window.open(resumePDF, "_blank")
    } else {
  
      window.open("/../assets/Rayhan.pdf", "_blank")
    }
  }

  const handleViewCertificates = () => {
    window.location.href = "/certificates"
  }

  const handleLearnMoreClick = () => {
    window.location.href = "/bloghome"
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
              View CV
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

    
    </div>
  )
}

export default Hero
