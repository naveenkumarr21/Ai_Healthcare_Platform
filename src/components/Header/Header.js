import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">AI Health Platform</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/symptom-checker">Symptom Checker</Link>
            </li>
            <li>
              <Link to="/telemedicine">Telemedicine</Link>
            </li>
            <li>
              <Link to="/predictive-analytics">Predictive Analytics</Link>
            </li>
            <li>
              <Link to="/image-analysis">Image Analysis</Link>
            </li>
            <li>
              <Link to="/health-recommendations">Health Recommendations</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
