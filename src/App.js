import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Header from './components/Header';
import Section from './components/Section';
import TypewriterHeading from './components/TypewriterHeading.js';
import './styles/App.css';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add a simple floating paper effect
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const papers = [];

    for (let i = 0; i < 50; i++) {
      const paper = new THREE.Mesh(geometry, material);
      paper.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      paper.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      papers.push(paper);
      scene.add(paper);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      papers.forEach(paper => {
        paper.rotation.x += 0.001;
        paper.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    };

    animate();

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.scrapbook-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="app">
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="grain-overlay"></div>
      <Header />
      <main className="content">
        <Section id="home" className="home-section">
          <div className="profile-image-container">
            <img 
              src="/1704984222726.jpg" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <TypewriterHeading className="title">Udit Narain Tewari</TypewriterHeading>
          <h2 className="subtitle">Computer Science Engineering Student</h2>
          <p className="intro">
            Passionate about web development and entrepreneurship. 
            Creating innovative solutions and pushing the boundaries of technology.
          </p>
        </Section>

        <Section id="about" className="about-section">
          <TypewriterHeading>About Me</TypewriterHeading>
          <div className="about-content">
            <div className="about-text paper-card">
              <p>
                I'm a Computer Science and Engineering student at The National Institute of Engineering, Mysore.
                With a strong academic background and a passion for technology, I'm constantly seeking new challenges
                and opportunities to grow in the field of software development.
              </p>
              <h3>Education</h3>
              <ul>
                <li>B.E. in Computer Science and Engineering, The National Institute of Engineering, Mysore (2022 - 2026)</li>
                <li>Grade: 8.50</li>
                <li>Sheiling House School, Kanpur (2007 - 2021)</li>
                <li>Scored 91% in 10th (ICSE Board)</li>
                <li>Scored 90.25% in 12th (ISC Board)</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" className="experience-section">
          <TypewriterHeading>Experience</TypewriterHeading>
          <div className="experience-content paper-card">
            <h3>Treasurer, Onyx E-Cell</h3>
            <ul>
              <li>Managed finances and contributed to the success of Onyx E-Cell's entrepreneurship initiatives.</li>
              <li>Coordinated E-Week, a series of entrepreneurial events, culminating in the flagship national-level B-Gyaan pitch competition with 193 participants across India.</li>
              <li>Facilitated an NFT Auction, enhancing digital asset knowledge.</li>
              <li>Hosted "Rags to Riches," a challenge that promoted innovative strategies for scaling finances.</li>
              <li>Organized an IPL Auction to teach strategic planning and investment.</li>
            </ul>
          </div>
        </Section>

        <Section id="projects" className="projects-section">
          <TypewriterHeading>Projects</TypewriterHeading>
          <div className="project-grid">
            <div className="project-card paper-card">
              <h3>Plate2Purpose - Every Plate Counts</h3>
              <p className="project-tech">HTML, CSS, JavaScript</p>
              <ul>
                <li>Developed a smart food-saving tool to help caterers minimize waste.</li>
                <li>Integrated with hunger relief organizations for food redistribution.</li>
                <li>Won 2nd Prize at RootAccess Hackathon organized by Google Developers Student Club.</li>
                <li>Developed a user-friendly dashboard for real-time monitoring of waste metrics.</li>
              </ul>
            </div>
            <div className="project-card paper-card">
              <h3>Journal App Website</h3>
              <p className="project-tech">Spring Boot, ReactJS, MongoDB</p>
              <ul>
                <li>Developing a web-based journal application for users to manage personal entries.</li>
                <li>Implementing secure authentication and CRUD operations.</li>
                <li>Integrated MongoDB for efficient data storage and retrieval.</li>
                <li>Implemented real-time collaboration features allowing multiple users to edit entries.</li>
              </ul>
            </div>
            <div className="project-card paper-card">
              <h3>Advanced Voting Management System</h3>
              <p className="project-tech">PHP, MySQL</p>
              <ul>
                <li>Collaborating with a team to design a secure and transparent voting management system.</li>
                <li>Implemented MySQL database schemas for reliable data management.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" className="skills-section">
          <TypewriterHeading>Skills</TypewriterHeading>
          <div className="skills-grid">
            {[
              'Java', 'C', 'C++', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript',
              'ReactJS', 'NodeJS', 'Spring Boot', 'MongoDB', 'Git', 'Figma'
            ].map((skill, index) => (
              <div key={index} className="skill-card paper-card">
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" className="contact-section">
          <TypewriterHeading>Contact</TypewriterHeading>
          <div className="contact-info paper-card">
            <p>Email: udittewari888@gmail.com</p>
            <p>Phone: +91-8887547458</p>
            <p>Location: Mysore, Karnataka, India</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/udit-narain-tewari" target="_blank" rel="noopener noreferrer">udit-narain-tewari</a></p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;

