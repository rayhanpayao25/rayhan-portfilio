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
import Blogpost from "./components/Blogpost/Blogpost";  

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <>
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
        <Route path="/blogpost" element={<Blogpost />} /> {}
      </Routes>
    </Router>
  );
};

export default App;
