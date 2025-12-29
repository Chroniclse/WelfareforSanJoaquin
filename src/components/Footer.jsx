import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Welfare for San Joaquin</h3>
            <p>Empowering STEM students to solve local issues and make a difference in our community.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <p>Join us in making a difference in San Joaquin County.</p>
            <Link to="/contact" className="footer-cta">Contact Us</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Welfare for San Joaquin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

