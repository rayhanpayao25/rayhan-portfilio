"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Award, Briefcase, User, ChevronRight, Mail } from "lucide-react"
import "./AboutMe.css"

const AboutMe = () => {
  const [currentFace, setCurrentFace] = useState(0)
  const faces = ["About", "Skills", "Work", "Career Goals"]

  const rotateCard = () => {
    setCurrentFace((prevFace) => (prevFace + 1) % faces.length)
  }

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

  return (
    <div className="about-wrapper">
      <motion.div
        className="left-side"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
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
      </motion.div>

      <div className="right-side">
        <div className="gradient-bg">
          <motion.div
            className="card-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="card" style={{ transform: `rotateY(${currentFace * 90}deg)` }}>
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
                    <div className="info-item">
                      <span className="label">Role</span>
                      <span className="value">Frontend Web Developer</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Focus</span>
                      <span className="value">Web Designing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-face work-face">
                {getIcon("Work")}
                <h2>Work</h2>
                <div className="work-grid">
                  <div className="work-card">
                    <h3>Freelancer</h3>
                    <p>Quality Assurance - Consumer 2023- 2025 </p>
                  </div>
                </div>

                {getIcon("personaltouch")}
                <h2>Personal Touch</h2>
                <div className="personaltouch-list">
                  <div className="work-card">
                    <p>Hobbies: Playing mobile games, Painting, Photography and Playing musical instruments. </p>
                    <p>Fun Facts: I am more productive when I'm cramming.</p>
                    <p>Life Motto: Dream big, work hard, stay focused.</p>
                    <p>Inspirational Quotes: The only way to do great work is to love what you do.</p>
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
                      <li>
                        <span className="skill-tag">React</span>
                      </li>
                      <li>
                        <span className="skill-tag">JavaScript</span>
                      </li>
                      <li>
                        <span className="skill-tag">HTML/CSS</span>
                      </li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Backend</h3>
                    <ul>
                      <li>
                        <span className="skill-tag">Node.js</span>
                      </li>
                      <li>
                        <span className="skill-tag">Django</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {getIcon("Contests")}
                <h2>Contests</h2>
                <div className="contests-list">
                  <div className="contest-item">
                    <span className="contest-badge">🏆</span>
                    <div>
                      <h3>GDSC Solution Challenge 2023</h3>
                    </div>
                  </div>
                  <div className="contest-item">
                    <span className="contest-badge">🥇</span>
                    <div>
                      <h3>2025 FRONTEND WEB DESIGNING - CCS</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-face career-face">
                {getIcon("Career")}
                <h2>Career Goals</h2>
                <div className="career-grid">
                  <div className="info-item">
                    <span className="value">MASTER HTML5 AND CSS3 </span>
                  </div>
                  <div className="info-item">
                    <span className="value">MASTER JAVASCRIPT FOR FRONT-END DEVELOPMENT </span>
                  </div>
                  <div className="info-item">
                    <span className="value">BECOME EXPERT IN RESPONSIVE WEB DESIGN </span>
                  </div>
                </div>
                <motion.button
                  className="rotate-button email-button"
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="button-icon" />
                  Email Me!
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.button
            className="rotate-button"
            onClick={rotateCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next: {faces[(currentFace + 1) % faces.length]}
            <ChevronRight className="button-icon" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

