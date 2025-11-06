// In RetroFreelance.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const RetroFreelance = ({ currentPath }) => {
  // Helper function to determine if a link is active
  const isLinkActive = (path) => currentPath === path;

  return (
    <div className="retro-container">
      {/* Header - clickable to go home */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="retro-header">
          <div className="retro-title">~ % cd matthew@bixby</div>
        </div>
      </Link>

      {/* Featured banner */}
      <div className="featured-banner">
        Custom Web Development Services
      </div>

      {/* Navigation - Only at the top now */}
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

      {/* Intro Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> ABOUT THIS SERVICE <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I recently moved to the Hudson Valley and have been getting settled into the area.
          While I'm enjoying being part of the local community here, I'm also expanding my
          freelance practice and taking on new web development projects. Or helping with
          existing sites/projects that need additions.
        </p>
      </div>

      {/* What I Do Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> WHAT I DO <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I build complete web solutions from the ground up. Not templates or drag-and-drop
          builders: I write the code, design the interface, test everything, and deploy it.
          I handle the full stack: frontend design, backend logic, database architecture,
          hosting infrastructure, domain management, SSL certificates, and ongoing maintenance.
        </p>

        <p style={{ marginTop: '1rem' }}>
          I'm not limited to standard websites either. If you now need a database back end,
          a credit card processing option, inventory tracking, I can help.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Need a Product Information Management system? A Laboratory Information Management
          System? A custom CRM tailored to your workflow? If you can describe what you need,
          I can build it. The scope is defined by your vision, not by platform limitations.
        </p>
      </div>

      {/* Background Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> BACKGROUND <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I'm an AWS Certified full-stack developer currently working as a Backend Java Intern
          at Revature, where I build production applications handling real users and data.
          My stack includes React, Next.js, Spring Boot, and cloud infrastructure. I also
          specialize in Linux self-hosting solutions: deploying on VPS with Docker, nginx,
          and full SSL/TLS configuration.
        </p>

        <p style={{ marginTop: '1rem' }}>
          My portfolio focuses on projects built to demonstrate technical skills, not client work.
          If you don't see an example of exactly what you need, that doesn't mean I can't build it.
          I'm upfront about timelines, costs, and what's realistic for your budget. I'd rather
          tell you the truth about what makes sense than oversell you something you don't need.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> PRICING (50% OFF STANDARD RATES) <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <div className="pricing-grid">
          <div className="pricing-item">
            <div className="pricing-title">Basic Site</div>
            <div className="pricing-desc">5 pages, hosting, domain</div>
            <div className="pricing-cost">$500 <span className="pricing-normal">(normally $1,000)</span></div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Business Site</div>
            <div className="pricing-desc">10+ pages, forms, SEO, analytics</div>
            <div className="pricing-cost">$1,000 <span className="pricing-normal">(normally $2,000)</span></div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Custom Builds</div>
            <div className="pricing-desc">E-commerce, databases, integrations</div>
            <div className="pricing-cost">$2,000+ <span className="pricing-normal">(normally $4,000+)</span></div>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
          I'm offering this discount while building out my client base in the Hudson Valley. Limited availability.
        </p>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          Note: Build fees shown above are one-time costs. Ongoing hosting and maintenance starts at $25-50/month
          depending on site complexity and traffic.
        </p>
      </div>

      {/* Why Hire Individual Developer */}
      <div className="section-heading">
        <span className="diamond">♦</span> WHY HIRE AN INDIVIDUAL DEVELOPER <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <ul className="retro-list">
          <li>➤ You work directly with me. When something needs to change, you text or call me, not a support ticket system.</li>
          <li>➤ When you have a question about your site, I answer it.</li>
          <li>➤ You own everything: the source code, the domain registration, the content.</li>
          <li>➤ No platform subscriptions, no vendor lock-in.</li>
        </ul>

        <p style={{ marginTop: '1.5rem' }}>
          If you're a small business owner who needs a real web presence, or you've been
          frustrated by website builders that don't do what you need, let's talk. I do free
          consultations where I'll give you an honest assessment of what you actually need
          and what it'll cost.
        </p>
      </div>

      {/* CTA Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> LET'S TALK <span className="diamond">♦</span>
      </div>

      <div className="pixel-card" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Email me to schedule a free consultation
        </p>

        <a href="mailto:matthew.bixby1@gmail.com" className="retro-button">
          matthew.bixby1@gmail.com
        </a>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://linkedin.com/in/matthew-bixby/  " target="_blank" rel="noopener noreferrer" className="social-icon">
          <div className="pixel-icon">in</div>
        </a>
        <a href="https://github.com/mattbixby123  " target="_blank" rel="noopener noreferrer" className="social-icon">
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

export default RetroFreelance;