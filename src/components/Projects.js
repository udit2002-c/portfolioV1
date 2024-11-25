import React from 'react';
import ScrapbookPage from './ScrapbookPage';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ScrapbookPage>
        <h3>Plate2Purpose - Every Plate Counts</h3>
        <p>HTML, CSS, JavaScript</p>
        <ul>
          <li>Developed a smart food-saving tool to help caterers minimize waste.</li>
          <li>Integrated with hunger relief organizations for food redistribution.</li>
          <li>Won 2nd Prize at RootAccess Hackathon organized by Google Developers Student Club.</li>
          <li>Developed a user-friendly dashboard for real-time monitoring of waste metrics.</li>
        </ul>
      </ScrapbookPage>
      <ScrapbookPage>
        <h3>Journal App Website (In Progress)</h3>
        <p>Spring Boot, ReactJS, MongoDB</p>
        <ul>
          <li>Developing a web-based journal application for users to manage personal entries.</li>
          <li>Implementing secure authentication and CRUD operations.</li>
          <li>Integrated MongoDB for efficient data storage and retrieval.</li>
          <li>Implemented real-time collaboration features allowing multiple users to edit entries.</li>
        </ul>
      </ScrapbookPage>
      <ScrapbookPage>
        <h3>Advanced Voting Management System</h3>
        <p>PHP, MySQL</p>
        <ul>
          <li>Collaborating with a team to design a secure and transparent voting management system.</li>
          <li>Implemented MySQL database schemas for reliable data management.</li>
        </ul>
      </ScrapbookPage>
    </div>
  );
};

export default Projects;

