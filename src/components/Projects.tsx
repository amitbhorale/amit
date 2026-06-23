import React from 'react';
import { ExternalLink, Folder, BarChart3, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

// Custom Brand SVGs
const TrelloIcon = ({ size = 32, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <rect x="7" y="7" width="3" height="9" />
    <rect x="14" y="7" width="3" height="5" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Map project IDs to specific icons for a premium look
const getProjectIcon = (id: string) => {
  switch (id) {
    case 'proj-1':
      return <BarChart3 size={32} style={{ color: 'var(--accent-light)' }} />;
    case 'proj-2':
      return <ShieldCheck size={32} style={{ color: '#38bdf8' }} />; // Cyan accent
    case 'proj-3':
      return <TrelloIcon size={32} style={{ color: '#818cf8' }} />; // Indigo accent
    default:
      return <Folder size={32} style={{ color: 'var(--accent-light)' }} />;
  }
};

// Map project IDs to custom background gradients
const getProjectGradient = (id: string) => {
  switch (id) {
    case 'proj-1':
      return 'linear-gradient(135deg, rgba(13, 148, 136, 0.2) 0%, rgba(9, 9, 11, 0.8) 100%)';
    case 'proj-2':
      return 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(9, 9, 11, 0.8) 100%)';
    case 'proj-3':
      return 'linear-gradient(135deg, rgba(129, 140, 248, 0.15) 0%, rgba(9, 9, 11, 0.8) 100%)';
    default:
      return 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(9, 9, 11, 0.8) 100%)';
  }
};

export const Projects: React.FC = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="centered">Projects</h2>
        
        <div className="grid-3">
          {projects.map((project: ProjectItem) => (
            <div key={project.id} className="project-card">
              {/* Custom SVG/Gradient Card Header */}
              <div 
                className="project-img-wrapper flex-center"
                style={{ background: getProjectGradient(project.id), height: '160px' }}
              >
                <div style={{
                  padding: '1.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(9, 9, 11, 0.6)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {getProjectIcon(project.id)}
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link"
                    >
                      <GithubIcon size={16} /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
