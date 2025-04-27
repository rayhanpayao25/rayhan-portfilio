import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Rayhan Portfolio</h3>
          <p>Building innovative solutions with passion and creativity.</p>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://github.com/rayhanpayao25" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/rayhanpayao" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:contact@rayhanportfolio.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Rayhan Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
