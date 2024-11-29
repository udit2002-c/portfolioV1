import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Header from './components/Header';
import Section from './components/Section';
import TypewriterHeading from './components/TypewriterHeading';
import RecursiveTyping from './components/RecursiveTyping';
import './styles/App.css';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create paper texture
    const loader = new THREE.TextureLoader();
    const paperTexture = loader.load('/paper-texture.jpg');

    // Add floating paper elements
    const papers = [];
    const paperGeometry = new THREE.PlaneGeometry(1, 1.4);
    const paperMaterial = new THREE.MeshBasicMaterial({ 
      map: paperTexture,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < 50; i++) {
      const paper = new THREE.Mesh(paperGeometry, paperMaterial);
      paper.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 10 - 15
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
        paper.rotation.y += 0.002;
        paper.position.y += Math.sin(Date.now() * 0.001 + paper.position.x) * 0.001;
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

    // Paper plane animation
    const paperPlane = document.createElement('div');
    paperPlane.className = 'paper-plane';
    document.body.appendChild(paperPlane);

    let lastScrollTop = 0;

    const animatePaperPlane = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      const planePosition = scrollPercentage * (windowHeight - 60) + 30; // 30px offset from top and bottom

      paperPlane.style.top = `${planePosition}px`;

      if (scrollTop > lastScrollTop) {
        paperPlane.style.transform = 'rotate(45deg)';
      } else {
        paperPlane.style.transform = 'rotate(-45deg)';
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', animatePaperPlane);

    return () => {
      observer.disconnect();
      renderer.dispose();
      window.removeEventListener('scroll', animatePaperPlane);
      document.body.removeChild(paperPlane);
    };
  }, []);

  return (
    <div className="app">
      <div className="grid-background"></div>
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="grain-overlay"></div>
      <Header />
      <main className="content" style={{ color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Section id="home" className="home-section scrapbook-section">
          <div className="profile-image-container">
            <img 
              src="/profilepicture.jpg"
              alt="Profile" 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "././public/profilepicture.jpg";
              }}
            />
          </div>
          <TypewriterHeading className="text-4xl md:text-5xl">Udit Narain Tewari</TypewriterHeading>
          {/* <RecursiveTyping 
            phrases={["Computer Science Student", "Aspiring Web Developer", "Technology Enthusiast"]} 
            typingSpeed={150}
            deletingSpeed={100}
            pauseDuration={3000}
          /> */}
          <h2 className="subtitle text-2xl md:text-3xl">Computer Science Engineering Student</h2>
          <p className="intro">
            Dedicated to the pursuit of knowledge in web development and entrepreneurship. 
            Committed to creating innovative solutions and advancing the field of technology.
          </p>
        </Section>

        <Section id="about" className="about-section scrapbook-section">
          <TypewriterHeading className="text-4xl md:text-5xl">About Me</TypewriterHeading>
          <div className="about-content">
            <div className="about-text paper-card crumpled-paper">
              <p>
                As a Computer Science and Engineering student at The National Institute of Engineering, Mysore,
                I am driven by a strong academic foundation and an unwavering passion for technology. 
                My goal is to continuously seek new challenges and opportunities for growth in the field of software development.
              </p>
              <h3>Education</h3>
              <ul>
                <li>B.E. in Computer Science and Engineering, The National Institute of Engineering, Mysore (2022 - 2026)</li>
                <li>Current CGPA: 8.50</li>
                <li>Sheiling House School, Kanpur (2007 - 2021)</li>
                <li>ICSE Board (10th): 91%</li>
                <li>ISC Board (12th): 90.25%</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" className="experience-section scrapbook-section">
          <TypewriterHeading className="text-4xl md:text-5xl">Professional Experience</TypewriterHeading>
          <div className="experience-content paper-card crumpled-paper">
            <h3>Treasurer, Onyx E-Cell</h3>
            <ul>
              <li>Effectively managed finances and contributed to the success of Onyx E-Cell's entrepreneurship initiatives.</li>
              <li>Coordinated E-Week, a series of entrepreneurial events, culminating in the flagship national-level B-Gyaan pitch competition, attracting 193 participants from across India.</li>
              <li>Facilitated an NFT Auction, enhancing participants' understanding of digital assets and blockchain technology.</li>
              <li>Organized "Rags to Riches," a challenge designed to promote innovative strategies for financial growth and management.</li>
              <li>Implemented an IPL Auction simulation to teach strategic planning and investment principles.</li>
            </ul>
          </div>
        </Section>

        <Section id="projects" className="projects-section scrapbook-section">
          <TypewriterHeading className="text-4xl md:text-5xl">Notable Projects</TypewriterHeading>
          <div className="project-grid">
            <div className="project-card paper-card crumpled-paper">
              <h3>Plate2Purpose - Every Plate Counts</h3>
              <p className="project-tech">Technologies: HTML, CSS, JavaScript</p>
              <ul>
                <li>Developed an innovative food-saving solution to assist caterers in minimizing waste.</li>
                <li>Integrated with hunger relief organizations to facilitate efficient food redistribution.</li>
                <li>Awarded 2nd Prize at the RootAccess Hackathon organized by Google Developers Student Club.</li>
                <li>Implemented a user-friendly dashboard for real-time monitoring of waste metrics.</li>
              </ul>
            </div>
            <div className="project-card paper-card crumpled-paper">
              <h3>Journal Application</h3>
              <p className="project-tech">Technologies: Spring Boot, ReactJS, MongoDB</p>
              <ul>
                <li>Developing a comprehensive web-based journal application for efficient management of personal entries.</li>
                <li>Implementing robust authentication measures and CRUD operations to ensure data security and user-friendly interactions.</li>
                <li>Utilizing MongoDB for efficient and scalable data storage and retrieval.</li>
                <li>Incorporating real-time collaboration features to enable multiple users to edit entries simultaneously.</li>
              </ul>
            </div>
            <div className="project-card paper-card crumpled-paper">
              <h3>Advanced Voting Management System</h3>
              <p className="project-tech">Technologies: PHP, MySQL</p>
              <ul>
                <li>Collaborating with a team to design and implement a secure and transparent voting management system.</li>
                <li>Developing robust MySQL database schemas to ensure reliable and efficient data management.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" className="skills-section scrapbook-section">
          <TypewriterHeading className="text-4xl md:text-5xl">Technical Proficiencies</TypewriterHeading>
          <div className="skills-grid">
            {[
              'Java', 'C', 'C++', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript',
              'ReactJS', 'NodeJS', 'Spring Boot', 'MongoDB', 'Git', 'Figma'
            ].map((skill, index) => (
              <div key={index} className="skill-card paper-card crumpled-paper">
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" className="contact-section scrapbook-section">
          <TypewriterHeading className="text-4xl md:text-5xl">Contact Information</TypewriterHeading>
          <div className="contact-info paper-card crumpled-paper">
            <p>Email: udittewari888@gmail.com</p>
            <p>Phone: +91-8887547458</p>
            <p>Location: Mysore, Karnataka, India</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/udit-narain-tewari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">udit-narain-tewari</a></p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;

