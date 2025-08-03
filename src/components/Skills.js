import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 },
        { name: "Java", level: 65 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Jest", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h3>Development Approach</h3>
            <p>
              I follow modern development practices including responsive design, 
              clean code principles, and performance optimization. Every project 
              is built with scalability and maintainability in mind.
            </p>
          </div>
          <div className="summary-card">
            <h3>Continuous Learning</h3>
            <p>
              Technology evolves rapidly, and I stay updated with the latest 
              trends and best practices. I'm always exploring new tools and 
              frameworks to deliver better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 