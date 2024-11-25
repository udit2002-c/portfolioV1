import React from 'react';
import ScrapbookPage from './ScrapbookPage';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <ScrapbookPage className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>Email: udittewari888@gmail.com</p>
        <p>Phone: +91-8887547458</p>
        <p>Location: Mysore, Karnataka, India</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/udit-narain-tewari" target="_blank" rel="noopener noreferrer">udit-narain-tewari</a></p>
      </div>
    </ScrapbookPage>
  );
};

export default Contact;

