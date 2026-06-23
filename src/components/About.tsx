import React from 'react';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { bio, location, role } = portfolioData.personalInfo;
  const skillCategories = portfolioData.skills;

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="centered">About Me</h2>
        
        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Left Column: Bio & Info */}
          <div>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              {bio}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent-light)' }} />
                <span>{location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Briefcase size={18} style={{ color: 'var(--accent-light)' }} />
                <span>{role}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <GraduationCap size={18} style={{ color: 'var(--accent-light)' }} />
                <span>Bachelor of Computer Science</span>
              </div>
            </div>

            {/* Mock IDE Card */}
            <div className="card" style={{ padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.9rem', backgroundColor: '#09090b', borderColor: 'var(--border-color)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>principles.ts</span>
              </div>
              <pre style={{ margin: 0, overflowX: 'auto', color: '#e4e4e7', lineHeight: 1.5 }}>
                <code>
{`const engineer = {
  name: "${portfolioData.personalInfo.name}",
  philosophies: [
    "Build with resilience first",
    "Strive for design-system precision",
    "Keep architectures simple and modular",
    "Always optimize for the end-user"
  ],
  constants: {
    coffeeConsumption: "Constant",
    lovesTypeScript: true,
    tabSize: 2
  }
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="skills-container">
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Skills & Expertise
            </h3>
            
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h4 className="skills-category-title">{category.title}</h4>
                <div className="skills-grid">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
