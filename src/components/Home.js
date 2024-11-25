import React from 'react';
import ScrapbookPage from './ScrapbookPage';
import '../styles/Home.css';

const Home = () => {
  return (
    <ScrapbookPage className="home">
      <h1 className="title">Udit Narain Tewari</h1>
      <h2 className="subtitle">Computer  Science  Engineering  Student</h2>
      <p className="intro">
        Passionate about web development and entrepreneurship. 
        Creating innovative solutions and pushing the boundaries of technology.
      </p>
    </ScrapbookPage>
  );
};

export default Home;

