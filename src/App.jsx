"use client"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import AboutMe from "./components/AboutMe/AboutMe"

const App = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="programs" className="container">
        <Title subTitle="GDSC Program" title="My GDSC Projects" />
        <Programs />
      </section>

      <section id="about-me">
        <AboutMe />
      </section>

      <section id="contact">
        {/* Contact content goes here */}
      </section>
    </motion.div>
  )
}

export default App;
