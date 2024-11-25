import React from 'react';
import ScrapbookPage from './ScrapbookPage';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    'Java', 'C', 'C++', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript',
    'ReactJS', 'NodeJS', 'Spring Boot', 'MongoDB', 'Git', 'Figma'
  ];

  return (
    <ScrapbookPage className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </ScrapbookPage>
  );
};

export default Skills;

