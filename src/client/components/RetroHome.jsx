import React from 'react';
import { Link } from 'react-router-dom';

const RetroHome = () => {
  // Updated technologies list organized by category - aligned with resume
  const technologies = {
    backend: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'REST APIs',
      'Microservices',
      'Node.js',
      'Express.js'
    ],
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS'
    ],
    'cloud & infrastructure': [
      'AWS (EC2, RDS, S3)',
      'Docker',
      'Linux/Fedora',
      'VPS deployment',
      'nginx',
      'SSL/TLS'
    ],
    database: [
      'PostgreSQL',
      'MySQL',
      'Spring Data JPA',
      'Prisma ORM'
    ],
    'testing & tools': [
      'JUnit',
      'Mockito',
      'Git',
      'Maven',
      'Swagger',
      'JWT',
      'Postman'
    ],
    'integrations & security': [
      'Plaid API',
      'Dwolla ACH',
      'Sentry.io',
      'OAuth',
      'bcrypt'
    ]
  };

  return (
    <div className="retro-container">
      {/* Pixelated Header with terminal-style symbols */}
      <div className="retro-header">
        <div className="retro-title">~ % cd matthew@bixby</div>
      </div>

      {/* Featured banner */}
      <div className="featured-banner">
        Full Stack Software Engineer - Java | Spring Boot | React | AWS Certified ✓
      </div>


      {/* Navigation */}
      <div className="section-heading">
        <span className="diamond">♦</span> NAVIGATION <span className="diamond">♦</span>
      </div>

      <div className="nav-grid">
        <Link to="/portfolio" className="nav-card">
          <span className="nav-icon">💼</span>
          <span className="nav-label">Portfolio</span>
        </Link>

        <Link to="/contact" className="nav-card">
          <span className="nav-icon">✉️</span>
          <span className="nav-label">Contact</span>
        </Link>
      </div>

      {/* Section Heading ABOUT ME */}
      <div className="section-heading">
        <span className="diamond">♦</span> ABOUT ME <span className="diamond">♦</span>
      </div>

      {/* About Content - Updated to match current focus */}
      <div className="pixel-card">
        <p>
          <strong className='sub-heading'>👋 Hi, I'm Matt (he/him)!</strong><br />
          Full-stack software engineer focused on building and deploying <strong>production-grade Java/Spring applications</strong>
          with robust infrastructure on AWS and Linux VPS environments. I combine backend optimization, secure deployment practices,
          and systematic problem-solving to deliver scalable, high-performance systems.
        </p>

        <div className="sub-heading">🛠️ WHAT I BUILD</div>
        <ul className="retro-list">
          <li>➤ RESTful microservices with Spring Boot, JPA, and JWT authentication</li>
          <li>➤ Full-stack applications using React, Next.js, and TypeScript</li>
          <li>➤ Secure, high-availability infrastructure with Docker, nginx, and Let's Encrypt SSL</li>
          <li>➤ Real-time systems using WebSockets and event-driven architecture</li>
        </ul>

        <div className="sub-heading">🚀 CURRENT FOCUS</div>
        <ul className="retro-list">
          <li>➤ Backend Java Intern at Revature: building enterprise Spring Boot microservices</li>
          <li>➤ Optimizing API performance — investigating cold-start behavior and load resilience</li>
          <li>➤ Implementing zero-downtime deployments and CI/CD pipelines</li>
          <li>➤ Strengthening cloud architecture skills on AWS (EC2, RDS, S3, API Gateway)</li>
          <li>➤ Open to full-time Full Stack or Backend Engineer roles</li>
        </ul>

        <div className="sub-heading">🎓 EDUCATION & CREDENTIALS</div>
        <ul className="retro-list">
          <li>➤ AWS Certified Cloud Practitioner (2024)</li>
          <li>➤ Software Engineering Bootcamp, Fullstack Academy (2024)</li>
          <li>➤ B.S. in Chemistry, Ithaca College (2017, GPA: 3.5)</li>
        </ul>

        <div className="sub-heading">🔍 WHY IT ALL FITS</div>
        <p>
          My background in chemistry trained me in rigorous testing, data analysis, and methodical troubleshooting —
          skills I now apply to software performance, deployment reliability, and system design.
          I thrive where code meets infrastructure.
        </p>
      </div>

      {/* Section Heading TECH STACK */}
      <div className="section-heading">
        <span className="diamond">♦</span> TECH STACK <span className="diamond">♦</span>
      </div>

      {/* Technologies - Updated with comprehensive categories */}
      <div className="tech-categories">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="tech-category">
            <div className="category-title">{category.toUpperCase()}</div>
            <div className="tech-grid">
              {techs.map((tech) => (
                <div key={tech} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="section-heading">
        <span className="diamond">♦</span> NAVIGATION <span className="diamond">♦</span>
      </div>

      <div className="nav-grid">
        <Link to="/portfolio" className="nav-card">
          <span className="nav-icon">💼</span>
          <span className="nav-label">Portfolio</span>
        </Link>

        <Link to="/contact" className="nav-card">
          <span className="nav-icon">✉️</span>
          <span className="nav-label">Contact</span>
        </Link>
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

export default RetroHome;