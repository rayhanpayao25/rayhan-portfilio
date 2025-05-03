import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import AnimatedSection from "./components/AnimatedSection/AnimatedSection";
import Footer from "./components/Footer/Footer";
/*import Blogpost from "./components/Blogpost/Blogpost";  */
import Certificate from "./components/Certificate/Certificate"; 
import Bloghome from "./components/Bloghome/Bloghome";


const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={
          <>
            <Navbar />
            <AnimatedSection id="hero">
              <Hero />
            </AnimatedSection>

            <AnimatedSection id="about-me">
              <AboutMe />
            </AnimatedSection>

            <AnimatedSection id="contact" className="container">
              <ContactMe />
            </AnimatedSection>

            <AnimatedSection id="projects" className="container">
              <Projects />
            </AnimatedSection>

            <AnimatedSection id="programs" className="container">
              <Title subTitle="GDSC Program" title="My GDSC Projects" />
              <Programs />
            </AnimatedSection>

            <Footer />
          </>
        } />

        {}
        <Route path="/bloghome" element={<Bloghome/>} /> {}
        <Route path="/certificates" element={<Certificate />} /> {}
      </Routes>

      
    </Router>
  );
};

export default App;
