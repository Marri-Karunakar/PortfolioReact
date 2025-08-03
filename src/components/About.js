import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with a love for creating 
                innovative web solutions. With expertise in both frontend and backend 
                technologies, I bring ideas to life through clean, efficient code.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved 
                into a passion for building user-centric applications that solve 
                real-world problems.
              </p>
            </div>
            
            <div className="about-card">
              <h3>My Approach</h3>
              <p>
                I believe in writing clean, maintainable code and creating intuitive 
                user experiences. Every project is an opportunity to learn and grow, 
                and I approach each challenge with enthusiasm and attention to detail.
              </p>
            </div>
            
            <div className="about-card">
              <h3>What I Do</h3>
              <ul className="about-list">
                <li>Full Stack Web Development</li>
                <li>Responsive Design & UI/UX</li>
                <li>API Development & Integration</li>
                <li>Database Design & Management</li>
                <li>Performance Optimization</li>
                <li>Code Review & Best Practices</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 