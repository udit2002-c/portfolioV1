import React, { useEffect, useRef } from 'react';

const TypewriterHeading = ({ children, className = '' }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const text = heading.textContent;
    heading.textContent = '';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typeWriter();
            observer.unobserve(heading);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, [children]);

  return <h2 ref={headingRef} className={`typewriter-heading ${className}`}>{children}</h2>;
};

export default TypewriterHeading;

