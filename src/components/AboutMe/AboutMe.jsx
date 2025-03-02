"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Award, Briefcase, User, ChevronRight, Mail } from "lucide-react"
import "./AboutMe.css"
import cvFile from "../../resume/Rayhan.pdf"

const AboutMe = () => {
  const [currentFace, setCurrentFace] = useState(0)
  const faces = ["About", "Skills", "Work", "Career Goals"]
  const [isEmailHovered, setIsEmailHovered] = useState(false)
  const [isCVHovered, setIsCVHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const rotateCard = useCallback(() => {
    setCurrentFace((prevFace) => (prevFace + 1) % faces.length)
  }, [])

  const getIcon = (face) => {
    switch (face) {
      case "About":
        return <User className="face-icon" />
      case "Skills":
        return <Code2 className="face-icon" />
      case "Work":
        return <Award className="face-icon" />
      case "Career Goals":
        return <Briefcase className="face-icon" />
      default:
        return null
    }
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    window.open("mailto:Rayhanpyo2016@gmail.com", "_blank")
  }

  const handleViewCVClick = (e) => {
    e.preventDefault()
    window.open(cvFile, "_blank")
  }

  useEffect(() => {
    const timer = setTimeout(rotateCard, 5000)
    return () => clearTimeout(timer)
  }, [rotateCard])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="about-wrapper">
      <motion.div
        className="left-side"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="big-text">
          About
          <br />
          Me
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h1>

        <motion.button
                    className="rotate-button cv-button"
                    onClick={handleViewCVClick}
                    onMouseEnter={() => setIsCVHovered(true)}
                    onMouseLeave={() => setIsCVHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="button-icon" />
                    {isCVHovered ? "Open CV" : "View CV"}
                  </motion.button>
      </motion.div>

      

      <div className="right-side">
        <div className="gradient-bg">
          <motion.div
            className="card-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFace}
                className="card"
                initial={{ opacity: 0, rotateY: 0 }}
                animate={{ opacity: 1, rotateY: currentFace * 90 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >

                
                <div className="card-face about-face">
                  {getIcon("About")}
                  <h2>About Me</h2>
                  <div className="content-wrapper">
                    <p>
                      Hello! I'm <span className="highlight">Rayhan</span>, a passionate developer and member of the
                      Google Developer Student Clubs (GDSC). I'm dedicated to learning and applying new technologies to
                      solve real-world problems.
                    </p>
                    <p>Someone who thrives on tackling challenges head-on and learning from every experience.</p>
                    <div className="quick-info">
                      <motion.div className="info-item" whileHover={{ scale: 1.05 }}>
                        <span className="label">Role</span>
                        <span className="value">Frontend Web Developer</span>
                      </motion.div>
                      <motion.div className="info-item" whileHover={{ scale: 1.05 }}>
                        <span className="label">Focus</span>
                        <span className="value">Web Designing</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="card-face work-face">
                  {getIcon("Work")}
                  <h2>Work</h2>
                  <div className="work-grid">
                    <motion.div className="work-card" whileHover={{ scale: 1.05 }}>
                      <h3>Freelancer</h3>
                      <p>Quality Assurance - Consumer 2023- 2025 </p>
                    </motion.div>

                    <h2>Personal Touch </h2>
                    <div className="personaltouch-list">
                      <motion.div className="work-card" whileHover={{ scale: 1.05 }}>
                        <p>Hobbies: Playing mobile games, Painting, Photography and Playing musical instruments. </p>
                        <p>Fun Facts: I am more productive when I'm cramming.</p>
                        <p>Life Motto: Dream big, work hard, stay focused.</p>
                        <p>Inspirational Quotes: The only way to do great work is to love what you do.</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="card-face skills-face">
                  {getIcon("Skills")}
                  <h2>Skills</h2>
                  <div className="skills-grid">
                    <div className="skill-category">
                      <h3>Frontend</h3>
                      <ul>
                        <motion.li whileHover={{ scale: 1.1 }}>
                          <span className="skill-tag">React</span>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                          <span className="skill-tag">JavaScript</span>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                          <span className="skill-tag">HTML/CSS</span>
                        </motion.li>
                      </ul>
                    </div>
                    <div className="skill-category">
                      <h3>Backend</h3>
                      <ul>
                        <motion.li whileHover={{ scale: 1.1 }}>
                          <span className="skill-tag">Node.js</span>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                          <span className="skill-tag">Django</span>
                        </motion.li>
                      </ul>
                    </div>
                  </div>

                  {getIcon("Contests")}
                  <h2>Contests</h2>
                  <div className="contests-list">
                    <motion.div className="contest-item" whileHover={{ x: 10 }}>
                      <span className="contest-badge">🏆</span>
                      <div>
                        <h3>GDSC Solution Challenge 2023</h3>
                      </div>
                    </motion.div>
                    <motion.div className="contest-item" whileHover={{ x: 10 }}>
                      <span className="contest-badge">🥇</span>
                      <div>
                        <h3>2025 FRONTEND WEB DESIGNING - CCS</h3>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="card-face career-face">
                  {getIcon("Career Goals")}
                  <h2>Career Goals</h2>
                  <div className="career-grid">
                    <motion.div className="info-item" whileHover={{ scale: 1.05 }}>
                      <span className="value">MASTER HTML5 AND CSS3 </span>
                    </motion.div>
                    <motion.div className="info-item" whileHover={{ scale: 1.05 }}>
                      <span className="value">MASTER JAVASCRIPT FOR FRONT-END DEVELOPMENT </span>
                    </motion.div>
                    <motion.div className="info-item" whileHover={{ scale: 1.05 }}>
                      <span className="value">BECOME EXPERT IN RESPONSIVE WEB DESIGN </span>
                    </motion.div>
                  </div>
                  <br />
                  <motion.button
                    className="rotate-button email-button"
                    onClick={handleEmailClick}
                    onMouseEnter={() => setIsEmailHovered(true)}
                    onMouseLeave={() => setIsEmailHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="button-icon" />
                    {isEmailHovered ? "Rayhanpyo2016@gmail.com" : "Email Me!"}
                  </motion.button>
               
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.button
            className="rotate-button"
            onClick={rotateCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobile ? "Next" : `Next: ${faces[(currentFace + 1) % faces.length]}`}
            <ChevronRight className="button-icon" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

