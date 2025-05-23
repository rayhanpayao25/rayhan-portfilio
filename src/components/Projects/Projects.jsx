"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import "./Projects.css"
import { GitlabIcon as GitHub, ExternalLink, Code } from "lucide-react"
 
import meowImage from "../../assets/meow.png"
import calculatorImage from "../../assets/calculator.png"
import pokedexImage from "../../assets/pokedox.png"
import cswcdImage from "../../assets/cswcd.png"
import langhubImage from "../../assets/langhub.png"
import cinelectImage from "../../assets/cinelect.png"

const projectsData = [
  {
    id: 1,
    title: "Meowcat AI",
    description:
      "An interactive web application that uses simulated machine learning to identify cat breeds from uploaded photos.",
    image: meowImage,
    technologies: ["React", "JavaScript", "Next.js", "Tailwind CSS ", "HTML/CSS"],
    githubLink: "https://github.com/rayhanpayao25/meowcat",
    liveLink: "https://ryeeemeow.netlify.app/",
    category: "ai",
  },
  {
    id: 2,
    title: "RyeeeCalculator",
    description:
      "A clean and interactive scientific calculator. It allows users to perform both basic and advanced mathematical operations.",
    image: calculatorImage,
    technologies: ["JavaScript", "React", "CSS", "Vite"],
    githubLink: "https://github.com/rayhanpayao25/rayhan-portfilio/tree/Calculator",
    liveLink: "https://ryeecalculator.netlify.app/",
    category: "web",
  },
  {
    id: 3,
    title: "RyeePokédex",
    description: "RyeePokédex lets you browse Pokémon, create custom teams, and battle against others to become the best Pokémon trainer.",
    image: pokedexImage,
    technologies: ["React", "HTML/CSS", "Json", "JavaScript"],
    githubLink: "https://github.com/rayhanpayao25/rayhan-portfilio/tree/pokemon",
    liveLink: "https://ryeeeepokemon.netlify.app/",
    category: "web",
  },
  {
    id: 4,
    title: "Action Plan Generator - CSWCD",
    description:
      "Developed as a comprehensive system, this innovative tool streamlines the process of creating, managing, and analyzing case studies, empowering faculty, and researchers at CSWCD to dig into real-world scenarios with unparalleled efficiency.",
    image: cswcdImage,
    technologies: ["Phyton", "Django", "CSS", "HTML", "Java"],
    liveLink: "https://eixaax1.pythonanywhere.com/#contacts-cont",
    githubLink: " https://github.com/Eixaax/cswcd-rprt-generator",
    category: "web",
  },
  {
    id: 5,
    title: "LangHub",
    description:
      "A mobile application that Integrated Language Support System for Chinese, Mandarin, and Spanish, aims to bridge communication gaps and foster cultural understanding by providing an intuitive and comprehensive platform for language learning and translation.",
    image: langhubImage,
    technologies: ["Java", "Firebase", "Kotlin", "Android Studio", "xml", "Sqlite"],
    githubLink: "https://github.com/rayhanpayao25/langhub",
    liveLink: "https://github.com/rayhanpayao25/langhub",
    category: "mobile",
  },
  {
    id: 6,
    title: "Machine Learning - Cinelect",
    description:
      "A website uses machine learning to provide personalized movie recommendations. It analyzes user preferences and viewing history to suggest films and TV shows tailored to individual tastes.",
    image: cinelectImage,
    technologies: ["Python", "Django", "HTML", "CSS" , "JS"],
    githubLink: "https://github.com/rayhanpayao25/machine_learning",
    liveLink: "https://ryeecinelect.onrender.com/",
    category: "ai",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "ai", name: "Machine Learning" },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects =
    activeCategory === "all" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Explore my recent work and personal projects</p>
      </div>

      <div className="projects-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <motion.div className="projects-grid" variants={containerVariants} initial="hidden" animate="visible">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={projectVariants}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <motion.div
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GitHub size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    <Code size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
