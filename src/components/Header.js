import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scrapbook-section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav>
          <ul>
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-tape header-tape-left"></div>
      <div className="header-tape header-tape-right"></div>
    </header>
  );
};

export default Header;
