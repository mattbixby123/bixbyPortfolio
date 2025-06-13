import React from 'react';
import { Link } from 'react-router-dom';

const RetroHome = () => {
  // Updated technologies list organized by category
  const technologies = {
    frontend: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Remix.js',
      'Redux Toolkit',
      'React-Router',
      'Tailwind CSS',
      'MUI Core'
    ],
    backend: [
      'Node.js',
      'Express',
      'Java',
      'Spring Boot',
      'Spring Framework',
      'Spring Security',
      'Spring Data JPA',
      'Javalin'
    ],
    database: [
      'PostgreSQL',
      'Prisma ORM',
      'MySQL',
      'JpaRepository'
    ],
    'cloud & devops': [
      'AWS Certified',
      'GitHub OAuth',
      'REST APIs'
    ],
    'security & integration': [
      'Stripe payments',
      'Dwolla ACH',
      'Plaid API',
      'bcrypt',
      'Sentry.io monitoring'
    ],
    'testing & build': [
      'Maven',
      'JUnit',
      'Mockito'
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
        Full Stack Engineer - Java | React | AWS Certified ✓
      </div>

      {/* Section Heading ABOUT ME */}
      <div className="section-heading">
        <span className="diamond">♦</span> ABOUT ME <span className="diamond">♦</span>
      </div>

      {/* About Content - Updated to match README */}
      <div className="pixel-card">
        <p>
          <strong>👋 Hi, I'm Matt (he/him)!</strong><br />
          Full-stack software engineer with a chemistry background, combining analytical precision
          with modern web development. Seeking to leverage my cross-stack experience to build
          robust, scalable applications.
        </p>

        <div className="sub-heading">🌱 CURRENTLY</div>
        <ul className="retro-list">
          <li>➤ Completed comprehensive Java, Spring Framework, and SQL training</li>
          <li>➤ Expanding into C# and ASP.NET for enterprise development</li>
          <li>➤ Contributing to climate technology projects at Model.Earth</li>
          <li>➤ Building BIXSTOCK - comprehensive inventory management system with AWS infrastructure</li>
          <li>➤ Open to full-time Software Engineer roles</li>
        </ul>

        <div className="sub-heading">📚 RECENT LEARNING</div>
        <ul className="retro-list">
          <li>➤ Java, Spring Boot, Spring Security, SQL fundamentals</li>
          <li>➤ Currently exploring C# and ASP.NET Core</li>
          <li>➤ AWS Cloud Architecture (Certified Cloud Practitioner)</li>
        </ul>

        <div className="sub-heading">🎓 EDUCATION</div>
        <ul className="retro-list">
          <li>➤ Bachelor of Science in Chemistry from Ithaca College c/o 2017</li>
          <li>➤ Software Engineering Bootcamp Certificate from Fullstack Academy, June 2024</li>
        </ul>

        <div className="sub-heading">🌿 BEYOND CODING</div>
        <p>
          Wildlife biology, botany, nature photography, and open source contributions.
          My chemistry lab background gives me a unique perspective on problem-solving
          and analytical thinking.
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