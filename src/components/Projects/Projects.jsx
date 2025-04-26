"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import "./Projects.css"
import { GitlabIcon as GitHub, ExternalLink, Code } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Data Generator",
    description:
      "A comprehensive online learning platform with course management, video streaming, and interactive quizzes.",
    image: "../src/assets/cinelect.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    category: "web",
  },
  {
    id: 2,
    title: "LangHub",
    description:
      "Mobile application for tracking fitness goals, nutrition, and health metrics with personalized recommendations.",
    image: "../src/assets/p.png",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    category: "mobile",
  },
  {
    id: 3,
    title: "RyeePokedox",
    description: "IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.",
    image: "../src/assets/p1.png",
    technologies: ["Vue.js", "TypeScript", "Socket.io", "D3.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    category: "web",
  },
  {
    id: 4,
    title: "Machine Learning - Cinelect",
    description:
      "Tool that leverages machine learning to generate blog posts, social media content, and marketing copy.",
    image: "../src/assets/cinelect.png",
    technologies: ["Python", "Django"],
    githubLink: "https://github.com/rayhanpayao25/machine_learning",
    liveLink: "https://ryeecinelect.onrender.com/",
    category: "ai",
  },
  {
    id: 5,
    title: "RyeeeCalculator",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, historical data, and performance analytics.",
    image: "../src/assets/calculator.png",
    technologies: ["Next.js", "Tailwind CSS", "CoinGecko API", "Chart.js"],
    githubLink: "https://github.com/rayhanpayao25/rayhan-portfilio/tree/Calculator",
    liveLink: "https://ryeecalculator.netlify.app/",
    category: "web",
  },
  {
    id: 6,
    title: "Augmented Reality Game",
    description: "Mobile AR game that transforms your surroundings into an interactive gaming environment.",
    image: "../src/assets/bg.jpg",
    technologies: ["Unity", "ARKit", "C#", "Blender"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    category: "mobile",
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
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
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
