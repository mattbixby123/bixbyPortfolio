import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const RetroContact = ({ currentPath }) => {
  // Helper function to determine if a link is active
  const isLinkActive = (path) => currentPath === path;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, message: 'Sending message...' });

    try {
      const response = await emailjs.send(
        'service_d4ree3y',
        'template_44npnk9',
        formData,
        'zzimTjXZcCaKXqd7a'
      );

      console.log('Email sent successfully:', response);
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="retro-container">
      {/* Pixelated Header with terminal-style symbols - now wrapped in Link */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="retro-header">
          <div className="retro-title">~ % cd matthew@bixby</div>
        </div>
      </Link>

      {/* Featured banner */}
      <div className="featured-banner">
        Contact Me
      </div>

      {/* Contact Form Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> Get In Touch <span className="diamond">♦</span>
      </div>

      <div className="pixel-card form-card">
        <p className="form-intro">
          Please feel free to reach out with any questions, comments, or opportunities that you think align with my portfolio, experiences, or interests.
        </p>

        <form className="retro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="retro-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="retro-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="retro-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="retro-textarea"
            ></textarea>
          </div>

          <button type="submit" className="retro-button">
            {status.submitted && !status.success ? 'Sending...' : 'SUBMIT'}
          </button>

          {status.submitted && (
            <div className={`status-message ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>


      {/* Navigation */}
      <div className="section-heading">
        <span className="diamond">♦</span> NAVIGATION <span className="diamond">♦</span>
      </div>

      <div className="nav-grid">
        {/* Home Link */}
        {isLinkActive("/") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">🏡</span>
            <span className="nav-label">Home</span>
          </div>
        ) : (
          <Link to="/" className="nav-card">
            <span className="nav-icon">🏡</span>
            <span className="nav-label">Home</span>
          </Link>
        )}

        {/* Portfolio Link */}
        {isLinkActive("/portfolio") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">💼</span>
            <span className="nav-label">Portfolio</span>
          </div>
        ) : (
          <Link to="/portfolio" className="nav-card">
            <span className="nav-icon">💼</span>
            <span className="nav-label">Portfolio</span>
          </Link>
        )}

        {/* Freelance Link */}
        {isLinkActive("/freelance") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">💰</span>
            <span className="nav-label">Freelance</span>
          </div>
        ) : (
          <Link to="/freelance" className="nav-card">
            <span className="nav-icon">💰</span>
            <span className="nav-label">Freelance</span>
          </Link>
        )}

        {/* Contact Link */}
        {isLinkActive("/contact") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">✉️</span>
            <span className="nav-label">Contact</span>
          </div>
        ) : (
          <Link to="/contact" className="nav-card">
            <span className="nav-icon">✉️</span>
            <span className="nav-label">Contact</span>
          </Link>
        )}
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://linkedin.com/in/matthew-bixby/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <div className="pixel-icon">in</div>
        </a>
        <a href="https://github.com/mattbixby123" target="_blank" rel="noopener noreferrer" className="social-icon">
          <div className="pixel-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </div>
        </a>
        <Link to="/contact" className="social-icon">
          <div className="pixel-icon">@</div>
        </Link>
      </div>

      {/* Footer */}
      <div className="retro-footer">
        © {new Date().getFullYear()} Matthew Bixby 💻
      </div>

      {/* Watermark */}
      <div className="watermark">
        All rights reserved.
      </div>
    </div>
  );
};

export default RetroContact;