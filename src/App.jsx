"use client"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import AboutMe from "./components/AboutMe/AboutMe"
import ContactMe from "./components/ContactMe/ContactMe"
import Projects from "./components/Projects/Projects"
import AnimatedSection from "./components/AnimatedSection/AnimatedSection"

const App = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
      <Navbar />
      <AnimatedSection id="hero">
        <Hero />
      </AnimatedSection>

      <AnimatedSection id="about-me" className="container">
        <AboutMe />
      </AnimatedSection>


      <AnimatedSection id="contact" className="container">
        <ContactMe />
      </AnimatedSection>

      <AnimatedSection id="programs" className="container">
        <Title subTitle="GDSC Program" title="My GDSC Projects" />
        <Programs />
      </AnimatedSection>
      
      
      <AnimatedSection id="projects" className="container">
        <Projects />
      </AnimatedSection>
    </motion.div>
  )
}

export default App
