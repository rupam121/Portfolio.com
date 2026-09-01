// src/components/FrontPage.js
import React from 'react';
import './FrontPage.css';
import profilePic from '../assets/DP.jpg'; // Make sure to replace with your actual profile image path

function FrontPage() {
  return (
    <header className="front-page" id="home">
      <div className="front-page-container">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="intro">
          <h1>Hello, I'm Rupam Giri</h1>
          <p>I'm a MERN Stack Enthusiast with experience in 17 months, including an internship.</p>
          <p>📍 Krishnanpalya, Bangalore, Karnataka 560038</p>
          // <p>📞 +91 6370349476</p>
          <p>✉️ <a href="mailto:rupamgiri4321@gmail.com">rupamgiri16@gmail.com</a></p>
          <p>🔗
            <a href="https://www.linkedin.com/in/rupamgiri/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            {/* <a href="your-portfolio-url" target="_blank" rel="noopener noreferrer">Portfolio</a> | */}
            <a href="https://leetcode.com/u/rupam_20/" target="_blank" rel="noopener noreferrer">Leetcode</a> |
            <a href="https://github.com/rupam121" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>

          <a href="#projects" className="cta-button">See My Work</a>
        </div>
      </div>
    </header>
  );
}

export default FrontPage;
