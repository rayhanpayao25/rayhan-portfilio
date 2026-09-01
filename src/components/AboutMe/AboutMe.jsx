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
      <h2 className="title">Quality Assurance Engineer</h2>

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
         Welcome to my space! I’m Rayhan, a Quality Assurance Engineer with almost 3 years of experience in software testing and quality assurance. I’m passionate about ensuring that applications are reliable, stable, and user-friendly.

I enjoy working closely with development and cross-functional teams to identify issues early, improve product quality, and help deliver a smooth user experience. I’m always eager to learn, explore new tools and technologies, and continue growing my skills and career in the QA field.

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
            <h3 className="current-work-position">QUALITY ASSURANCE ENGINEER</h3>
            <p className="current-work-text">
             I have almost 3 years of experience in Quality Assurance, working as a QA Specialist at Salary.com and as a QA Engineer at iCxeed Philippines. Throughout my experience, I have been responsible for testing software products, identifying and reporting bugs, managing issues, and providing valuable feedback to development teams to improve product functionality and quality.

I have experience using tools such as Azure DevOps, similar to Jira, to manage workflows, track issues, and collaborate effectively with cross-functional teams. I work closely with developers, project managers, and other stakeholders to ensure that products meet quality standards before release.

With strong attention to detail, problem-solving skills, and a focus on efficiency, I help ensure smooth project timelines and deliver reliable, high-quality products that meet customer expectations.

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
              I love cramming because honestly, it's the only time I feel like a real weapon. All of my
              creativity comes out and I become super motivated and focused when doing tasks.
            </p>
          </div>

          <div className="personal-card">
            <div className="personal-icon">
              <div className="icon-bg">
                <Plane size={24} />
              </div>
            </div>
            <h3 className="personal-name">Photography</h3>
            <p className="personal-description">
              I like taking photos of landscapes, sunsets, and city scenes whenever I travel.
              It helps me capture memories and be creative.
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
              When I'm not working, you'll find me playing guitar, playing piano, or playing mobile games. I believe
              diverse interests fuel creativity in tech.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
