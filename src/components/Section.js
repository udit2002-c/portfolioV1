import React from 'react';
import '../styles/Section.css';

const Section = ({ id, className, children }) => {
  return (
    <section id={id} className={`scrapbook-section ${className || ''}`}>
      <div className="section-content">
        {children}
      </div>
      <div className="tape tape-top-left"></div>
      <div className="tape tape-top-right"></div>
      <div className="tape tape-bottom-left"></div>
      <div className="tape tape-bottom-right"></div>
    </section>
  );
};

export default Section;
