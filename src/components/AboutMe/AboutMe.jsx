import "./AboutMe.css"
import {
  Github,
  Linkedin,
  Facebook,
  Laptop,
  Smartphone,
  Paintbrush,
  GraduationCap,
  Briefcase,
  Rocket,
  Trophy,
  Medal,
  Mountain,
  Plane,
  Guitar
} from "lucide-react"
import profileImage from "../../assets/rayray.jpg"
import qaImage from "../../assets/qa.jpg"
import volleyballImage1 from "../../assets/v1.jpg"
import mlbbImage from "../../assets/mlbb.jpg"
import volleyballImage2 from "../../assets/v2.jpg"
const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="profile-image">
        <img src={profileImage || "/placeholder.svg"} alt="Profile" />
      </div>

      <h1 className="name">Rayhan Payao</h1>
      <h2 className="title">Quality Assurance Specialist</h2>

      <div className="social-links">
        <a href="https://github.com/rayhanpayao25/" className="social-icon">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rayhan-payao-747296354/" className="social-icon">
          <Linkedin size={24} />
        </a>
        <a href="https://www.facebook.com/rayray.pw" className="social-icon">
          <Facebook size={24} />
        </a>
      </div>

      <div className="introduction-section">
        <h2 className="intro-title">Introduction</h2>
        <p className="intro-text">
          Welcome to my space! I’m Rayhan, a Quality Assurance Specialist with 2 years of experience
          ensuring that every application I test is reliable and user-ready. I’m passionate about clean,
          stable products, and I enjoy working with teams to find issues early and improve overall quality.
          I’m always learning, exploring new tools, and pushing myself to grow in the QA field.
        </p>
      </div>

      <div className="skill-section">
        <h2 className="skill-title">Skills & Expertise</h2>

        <div className="skill-container">
          <div className="skill-card">
            <div className="skill-icon">
              <Laptop size={32} />
            </div>
            <h3 className="skill-name">Frontend Development</h3>
            <p className="skill-description">
              Building responsive, accessible, and performant web applications with modern frameworks.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Laptop size={32} />
            </div>
            <h3 className="skill-name">Manual and Automated Testing</h3>
            <p className="skill-description">
              Building responsive, accessible, and performant web applications with modern frameworks.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Paintbrush size={32} />
            </div>
            <h3 className="skill-name">UI/UX Design</h3>
            <p className="skill-description">
              Creating intuitive user interfaces with a focus on user experience and visual aesthetics.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Smartphone size={32} />
            </div>
            <h3 className="skill-name">Mobile Development</h3>
            <p className="skill-description">
              Developing cross-platform mobile applications using Android studio, Flutter and other technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="current-work-section">
        <h2 className="current-work-title">Work Experience</h2>

        <div className="current-work-content">
          <div className="current-work-image">
            <img src={qaImage || "/placeholder.svg"} alt="Current Work" />
          </div>
          <div className="current-work-details">
            <h3 className="current-work-position">QUALITY ASSURANCE SPECIALIST</h3>
            <p className="current-work-text">
              I have over 2 years of experience as a Quality Assurance Specialist at Salary.com, working remotely. I use
              tools like Jira and DevOps to manage workflows, track issues, and ensure the quality of products. My
              responsibilities include testing, identifying bugs, and providing feedback to development teams to improve
              functionality.
            </p>
            <p className="current-work-text">
              As a QA Specialist, I work closely with cross-functional teams to ensure that all products meet the
              highest standards before release. With a strong focus on detail and efficiency, I help maintain smooth
              project timelines and ensure the final products meet customer expectations.
            </p>

            <div className="tech-stack">
              <span className="tech-tag">Javascript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Jira</span>
              <span className="tech-tag">Azure DevOps</span>
              <span className="tech-tag">Html5</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Test Planning</span>
              <span className="tech-tag">Manual Testing</span>
              <span className="tech-tag">Automation Testing</span>
              <span className="tech-tag">API Testing</span>
              <span className="tech-tag">Functional Testing</span>
              <span className="tech-tag">Regression Testing</span>
              <span className="tech-tag">Performance Testing</span>
              <span className="tech-tag">Smoke Testing</span>
              <span className="tech-tag">Sanity Testing</span>
              <span className="tech-tag">Agile</span>
              <span className="tech-tag">Waterfall</span>

            </div>
          </div>
        </div>
      </div>

      <div className="goal-section">
        <h2 className="goal-title">Career Goals</h2>

        <div className="goal-container">
          <div className="goal-card">
            <div className="goal-icon">

            </div>

            <p className="goal-description">

              I aim to expand my QA skills by focusing on automation frameworks and API testing tools. Since
              I’m still developing in these areas, my goal is to continue learning, practicing, and applying
              automation techniques in real projects. Over time, I hope to move into a more advanced QA role
              where I can design automated test suites and contribute to more efficient testing strategies.
            </p>
          </div>


        </div>
      </div>

      <div className="sports-section">
        <h2 className="sports-title">Sports</h2>

        <div className="sports-container">
          <div className="sports-card">
            <div className="sports-image">
              <img src={volleyballImage1 || "/placeholder.svg"} alt="Volleyball Championship" />
              <div className="sports-badge champion">
                <span>🏆 Champion</span>
              </div>
            </div>
            <div className="sports-content">
              <h3 className="sports-name">Wmsu Pathfit Championship</h3>
              <p className="sports-description">2021-2022 Wmsu Pathfit Championship</p>
            </div>
          </div>

          <div className="sports-card">
            <div className="sports-image">
              <img src={mlbbImage || "/placeholder.svg"} alt="SpookFest MLBB Tournament" />
              <div className="sports-badge champion">
                <span>🏆 Champion</span>
              </div>
            </div>
            <div className="sports-content">
              <h3 className="sports-name">SpookFest MLBB Tournament Champions</h3>
              <p className="sports-description">E-sports Champion 2021 BSIT 4A</p>
            </div>
          </div>

          <div className="sports-card">
            <div className="sports-image">
              <img src={volleyballImage2 || "/placeholder.svg"} alt="Wmsu Volleyball Tournament" />
              <div className="sports-badge runner-up">
                <span>🥉 3rd Runner-up</span>
              </div>
            </div>
            <div className="sports-content">
              <h3 className="sports-name">Wmsu Palaro - Volleyball</h3>
              <p className="sports-description">
                2022-2023 Wmsu Palaro Woman Volleyball - College of Computing Studies
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="personal-section">
        <h2 className="personal-title">Personal Touch</h2>

        <div className="personal-container">
          <div className="personal-card">
            <div className="personal-icon">
              <div className="icon-bg">
                <Mountain size={24} />
              </div>
            </div>
            <h3 className="personal-name">Fun Fact</h3>
            <p className="personal-description">
              I love cramming because honestly, it's the only time I feel like a real academic weapon. All of my
              creativity comes out and I become super motivated and focused when doing tasks. There's this one time I
              once coded an website while in side the Tricycle.
            </p>
          </div>

          <div className="personal-card">
            <div className="personal-icon">
              <div className="icon-bg">
                <Plane size={24} />
              </div>
            </div>
            <h3 className="personal-name">Life-Changing Trip</h3>
            <p className="personal-description">
              Backpacking through Luzon for 10 days for our Academic tour changed my perspective on design. I now
              incorporate elements of natural beauty and cultural richness inspired by the mountains, buildings, and
              historic towns I explored.
            </p>
          </div>

          <div className="personal-card">
            <div className="personal-icon">
              <div className="icon-bg">
                <Guitar size={24} />
              </div>
            </div>
            <h3 className="personal-name">Hobbies</h3>
            <p className="personal-description">
              When I'm not coding, you'll find me playing guitar, playing piano, or playing mobile games. I believe
              diverse interests fuel creativity in tech.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
