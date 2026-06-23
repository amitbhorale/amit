import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const name = portfolioData.personalInfo.name;
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          {name.split(' ')[0]}<span style={{ color: 'var(--accent-light)' }}>.</span>
        </div>
        
        <div className="footer-nav">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="footer-link">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="footer-link">About</a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="footer-link">Education</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="footer-link">Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="footer-link">Contact</a>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
