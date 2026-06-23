import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="centered">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <Briefcase size={16} style={{ color: 'var(--accent-light)' }} />
                      <span className="timeline-company">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="timeline-date">
                    <Calendar size={14} style={{ marginRight: '0.25rem', display: 'inline-block', verticalAlign: 'middle' }} />
                    <span style={{ verticalAlign: 'middle' }}>{exp.duration}</span>
                  </div>
                </div>
                
                <p className="timeline-desc" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  {exp.description}
                </p>
                
                <div className="timeline-desc">
                  <ul>
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
