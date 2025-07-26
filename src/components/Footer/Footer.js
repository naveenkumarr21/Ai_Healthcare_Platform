import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI Health Platform</h3>
            <p>Revolutionizing healthcare with AI-powered solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/symptom-checker">Symptom Checker</a>
              </li>
              <li>
                <a href="/telemedicine">Telemedicine</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@aihealth.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} AI Health Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
