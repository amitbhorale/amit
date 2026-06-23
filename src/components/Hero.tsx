import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom Brand SVGs
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero: React.FC = () => {
  const { name, role, description, socials } = portfolioData.personalInfo;

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Hi, my name is</p>
          <h1 className="hero-title">
            <span>{name}.</span>
            <br />
            {role}
          </h1>
          <p className="hero-description">{description}</p>
          
          <div className="hero-actions">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="btn btn-primary"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-secondary"
            >
              Get in Touch
            </button>
          </div>

          <div className="contact-socials" style={{ marginTop: '3rem' }}>
            <div className="socials-grid">
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                  <GithubIcon />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              )}
              {socials.email && (
                <a href={socials.email} className="social-btn" aria-label="Email">
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

