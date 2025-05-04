"use client"

import { useEffect, useRef, useState } from "react"
import "./Certificate.css"

import cybersecurity from "../../assets/cybersecurity.jpg"
import frontenddev from "../../assets/frontend.jpg"
import webdev from "../../assets/webdev.jpg"
import datascience from "../../assets/datascience.jpg"
import ist from "../../assets/ist.png"
import est from "../../assets/est.png"
import pm from "../../assets/pm.jpg"
import computernetworking from "../../assets/computernetworking.jpg"
import cloudcomputing from "../../assets/cloudcomputing.jpg"



import Cybersecuritypdf from "../../assets/certificate/3736_8196935.pdf"
import frontenddevpdf from "../../assets/certificate/4511_8266560.pdf"
import webdevpdf from "../../assets/certificate/6051_8249690.pdf"
import datasciencepdf from "../../assets/certificate/4227_8245098.pdf"
import projectmanagement from "../../assets/certificate/6032_8197863.pdf"
import computernetworkingpdf from "../../assets/certificate/7219_8203529.pdf"
import cloudcomputingpdf from "../../assets/certificate/3971_8197280.pdf"
import istPDF from "../../assets/certificate/Rayhan Payao - 2024-02-01.pdf"
import estPDF from "../../assets/certificate/Rayhan.Payao- 2024-02-01.pdf"




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
      issuer: "SimpliLearn",
      date: "April 2025",
      image: frontenddev,
      pdf: frontenddevpdf,
      pdfName: "4511_8266560.pdf",
    },

    {
      id: 2,
      title: "Web Development",
      issuer: "SimpliLearn",
      date: "April 2025",
      image: webdev,
      pdf: webdevpdf,
      pdfName: "6051_8249690.pdf",
    },
    
    {
      id: 3,
      title: "Introduction to Data Science",
      issuer: "SimpliLearn",
      date: "April 2025",
      image: datascience,
      pdf: datasciencepdf,
      pdfName: "4227_8245098.pdf",
    },

    {
      id: 4,
      title: "Project Management 101", 
      issuer: "SimpliLearn",
      date: "April 2025",
      image: pm,
      pdf: projectmanagement,
      pdfName: "6032_8197863.pdf",
    },
    {
      id: 5,
      title: "Introduction to Computer Networking",
      issuer: "SimpliLearn",
      date: "April 2025",
      image: computernetworking,
      pdf: computernetworkingpdf,
      pdfName: "7219_8203529.pdf",
    },
    {
      id: 6,
      title: "Introduction to Cloud Computing",
      issuer: "SimpliLearn",
      date: "April 2025",
      image: cloudcomputing,
      pdf: cloudcomputingpdf,
      pdfName: "3971_8197280,pfd",
    },

    {
      id: 7,
      title: "Introduction to Cybersecurity",
      issuer: "SimpliLearn",
      date: "April 2025",
      image: cybersecurity,
      pdf: Cybersecuritypdf,
      pdfName: "Rayhan Payao - 2024-02-01.pdf",
    },
    {
      id: 8,
      title: "Information Security Training",
      issuer: "Salary.com Learning Lab",
      date: "April 2024",
      image: ist,
      pdf: istPDF,
      pdfName: "Rayhan Payao - 2024-02-01.pdf",
    },
    {
      id: 9,
      title: "Email Security Training",
      issuer: "Salary.com Learning Lab",
      date: "April 2023",
      image: est,
      pdf: estPDF,
      pdfName: "Rayhan.Payao- 2024-02-01.pdf",
    
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

  const handleDownloadCertificate = () => {
    if (selectedCertificate) {
      if (selectedCertificate.pdf) {
        const link = document.createElement("a")
        link.href = selectedCertificate.pdf
        link.open = selectedCertificate.pdfName || "certificate.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        
        const image = new Image()
        image.crossOrigin = "anonymous"
        image.src = selectedCertificate.image

        image.onload = () => {
          const canvas = document.createElement("canvas")
          canvas.width = image.width
          canvas.height = image.height
          const ctx = canvas.getContext("2d")
          ctx.drawImage(image, 0, 0)

        
          const dataURL = canvas.toDataURL("image/png")
          const link = document.createElement("a")
          link.href = dataURL
          link.download = selectedCertificate.pdfName || `${selectedCertificate.title.replace(/\s+/g, "-")}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }
    }
  }

  return (
    <div className="certificates-container" ref={certificatesRef}>
      <div className="certificate-particles-container" ref={particlesRef}></div>

      <div className="certificates-header">
        <h1 ref={titleRef} className="certificates-title">
          My <span className="highlight">Certificates</span>
        </h1>
      
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
                <button className="certificate-download-button" onClick={handleDownloadCertificate}>
                  View Certificate
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certificate
