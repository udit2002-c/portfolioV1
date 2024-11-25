import React from 'react';
import ScrapbookPage from './ScrapbookPage';
import '../styles/About.css';

const About = () => {
  return (
    <ScrapbookPage className="about">
      <h2>About Me</h2>
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
    </ScrapbookPage>
  );
};

export default About;

