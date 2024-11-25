import React from 'react';
import '../styles/ScrapbookPage.css';

const ScrapbookPage = ({ children, className }) => {
  return (
    <div className={`scrapbook-page ${className || ''}`}>
      <div className="page-content">
        {children}
      </div>
      <div className="tape tape-top-left"></div>
      <div className="tape tape-top-right"></div>
      <div className="tape tape-bottom-left"></div>
      <div className="tape tape-bottom-right"></div>
    </div>
  );
};

export default ScrapbookPage;

