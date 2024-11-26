import React from 'react';

const Section = ({ id, className, children }) => {
  return (
    <section id={id} className={`scrapbook-section ${className}`}>
      {children}
    </section>
  );
};

export default Section;
