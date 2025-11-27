import React from 'react';
import PageLayout from '../components/PageLayout';

const RetroHome = ({ currentPath }) => {
  // Updated technologies list organized by category - aligned with resume
  const technologies = {
    backend: [
      'Java',
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
    <PageLayout
      currentPath={currentPath}
      bannerText="Full Stack Software Engineer - Java | Spring Boot | React | AWS Certified ✓"
    >
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
    </PageLayout>
  );
};

export default RetroHome;