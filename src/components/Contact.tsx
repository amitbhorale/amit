import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
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

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { email, location, socials } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API submission
    setTimeout(() => {
      try {
        // Validation check
        if (!formData.name || !formData.email || !formData.message) {
          throw new Error('Please fill in all required fields');
        }
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="centered">Get In Touch</h2>
        
        <div className="contact-wrapper">
          {/* Left Column: Direct Info */}
          <div className="contact-info-list">
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Let's discuss a project</h3>
              <p>
                Have a project in mind, looking for a new team member, or just want to chat about engineering? Feel free to reach out. I try to respond within 24 hours.
              </p>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-info-title">Email</div>
                <a href={`mailto:${email}`} className="contact-info-value">
                  {email}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-info-title">Location</div>
                <div className="contact-info-value">{location}</div>
              </div>
            </div>

            <div className="contact-socials">
              <div className="contact-info-title" style={{ marginBottom: '1rem' }}>Follow Me</div>
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
                {socials.twitter && (
                  <a href={socials.twitter} target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                )}
              </div>
            </div>
          </div>


          {/* Right Column: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name <span style={{ color: 'var(--danger-color)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span style={{ color: 'var(--danger-color)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Collaboration Proposal"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message <span style={{ color: 'var(--danger-color)' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Hi Alex, I'd like to talk about..."
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="form-status success">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error">
                Something went wrong. Please check your inputs and try again.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'submitting'}
              style={{ alignSelf: 'flex-start' }}
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
