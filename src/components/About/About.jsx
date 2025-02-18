import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa"
import styles from "./About.css"
import React from 'react'

function About() {
  const services = [
    { icon: <FaCode />, title: "Web Development", description: "Creating robust and scalable web applications" },
    { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Designing intuitive and beautiful user interfaces" },
    { icon: <FaMobileAlt />, title: "Mobile Apps", description: "Building cross-platform mobile applications" },
  ]

  return (
    <section className={styles.about} id="about">
      <h2>What We Do</h2>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About

