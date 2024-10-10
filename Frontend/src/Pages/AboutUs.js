// AboutUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Style/AboutUs.css';

export function AboutUs(){
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        Welcome to Heaven Tours, your ultimate travel companion! We are passionate about helping you explore the world, discover new cultures, and create unforgettable memories. 
        Our mission is to provide you with the best travel experiences, tailored to your needs.
      </p>
      <div className="team-section">

        <div className="team-member">
          {/* <img src="https://via.placeholder.com/150" alt="Team Member 1" /> */}
          <h3>Riya Bhimani</h3>
          <p>Founder <br/>
            & Travel Expert</p>
          <div className="social-links">
            <a href="https://github.com/Riyabhimani" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/riya-bhimani-6142802a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        </div>
      </div>
  );
};