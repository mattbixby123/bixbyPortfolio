import React from 'react'; // Remove useState since we're not using tabs
import { Link } from 'react-router-dom';

const RetroPortfolio = () => {

  const projects = [
    {
      title: "Puppy Bowl",
      emoji: "🐶",
      description: "This application is for managing a Puppy Bowl competition. Users will be able to view a list of players competing in the bowl, access detailed information about each player, create new players through a form, search for specific players, and delete players they have created.",
      technologies: ["React-Redux", "React Router", "Redux Toolkit", "HTML5", "CSS", "JavaScript", "JavaScript APIs"],
      link: "https://664255b4e94e3705d7a90302--bespoke-pixie-99297e.netlify.app/",
      code: "https://github.com/mattbixby123/PuppyBowlSPA"
    },
    {
      title: "Book Buddy",
      emoji: "📗",
      description: "This project is a web app for a fictitious library. This app allows you to browse a category of books that are fetched from an external API. As a registered user, you can checkout books and return them. You can also view your reserved books when accessing the account route.",
      technologies: ["React", "React Router", "React Hooks", "Redux Toolkit", "RTK Query", "Authentication", "HTML5", "CSS", "JavaScript"],
      link: "#",
      code: "https://github.com/mattbixby123/B30A-BookBuddy-Bixby"
    },
    {
      title: "Classroom Manager",
      emoji: "🧑‍🏫",
      description: "This Classroom Manager incorporates Prisma and Prisma Client, creating a schema to define instructor and student models. User passwords are encrypted using bcrypt, and users can register or log in with GitHub OAuth.",
      technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "GitHub OAuth"],
      link: "#",
      code: "https://github.com/mattbixby123/Unit4.ClassroomManager.Starter"
    },
    {
      title: "Full Stack eCommerce",
      emoji: "💸",
      description: "The capstone project is an e-commerce platform for buying vintage paper media (books, comics, and magazines). It offers customers and admins a wide array of features and tools. The project is meticulously crafted for scalability, performance, and user satisfaction.",
      technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "MUI Styling & Pagination", "STRIPE payment processing"],
      link: "https://www.youtube.com/watch?v=HZryg5wUy-w",
      code: "https://github.com/mattbixby123/eCommCapstone"
    },
    {
      title: "moodTrak",
      emoji: "📆",
      description: "How do you feel today? This is a daily mood tracking app that was completed in a single weekend. This app allows you to log your daily mood and see your past records.",
      technologies: ["React", "NextJS", "Tailwind CSS", "Firebase", "Netlify deployment"],
      link: "https://moodtrak.netlify.app/",
      code: "https://github.com/mattbixby123/moodtrak"
    },
    {
      title: "Horizon Bank Acct. Manager",
      emoji: "🏦",
      description: "This modern banking app allows you to access all of your accounts, accross all of your banks, from one secured dashboard.",
      technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "Appwrite", "Dwolla API", "Sentry for bug monitoring", "Plaid API"],
      link: "https://banking-next-khaki.vercel.app/",
      code: "https://github.com/mattbixby123/banking-next"
    },
    {
      title: "Inventory Management",
      emoji: "💭",
      description: "This AWS Cloud deployment project utilizing my recent AWS CCP certification to deploy a full stack application.",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Redux Toolkit", "RTK Query", "Material UI Data Grid", "Node.js", "Prisma ORM", "AWS EC2", "AWS RDS", "AWS API Gateway", "AWS Amplify", "AWS S3"],
      link: "https://youtu.be/rKDfmq2-L0I",
      code: "https://github.com/mattbixby123/InventoryManagement"
    },
    {
      title: "Spring Social Media API",
      emoji: "🌱",
      description: "Enterprise-grade social media backend API built with Spring Framework. Features complete user account management, CRUD operations for messages, and secure authentication. Demonstrates advanced Spring Boot, Spring Data JPA, and RESTful API design principles.",
      technologies: ["Java", "Spring Boot", "Spring Framework", "Spring Data JPA", "Spring Web", "REST APIs", "Authentication"],
      link: null,
      code: "https://github.com/mattbixby123/mattbixby123-pep-spring-project"
    },
    {
      title: "Social Media Blog API",
      emoji: "☕",
      description: "Full-stack backend API for social media application using core Java technologies. Implements user registration, authentication, message management, and data persistence. Built with Test-Driven Development methodology and clean architecture principles.",
      technologies: ["Java", "Javalin", "JDBC", "Maven", "JUnit", "Mockito", "REST APIs", "TDD"],
      link: null,
      code: "https://github.com/mattbixby123/mattbixby123-pep-project"
    },
    {
      title: "Weather App",
      emoji: "🌤️",
      description: "A responsive weather application providing real-time weather data and 5-day forecasts for any location worldwide. Features location search, current location detection, detailed weather metrics, and an intuitive user interface with smooth loading states.",
      technologies: ["NextJS 15", "React 19", "TypeScript", "Tailwind CSS", "TanStack React Query", "Jotai", "Axios", "OpenWeatherMap API", "date-fns"],
      link: "https://weather-91eymv0ih-matthew-bixbys-projects.vercel.app/",
      code: "https://github.com/mattbixby123/weather-app"
    },
    {
      title: "Investment Portfolio Tracker (Backend)",
      emoji: "📈",
      description: "Built with Spring architecture. Integrates with Alpha Vantage API for stock market info. Features user authentication with JWT tokens, portfolio management, investment tracking,  data persistence. Includes test coverage for controller & service layers.",
      technologies: ["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "JWT Authentication", "Flyway Migration", "Alpha Vantage API", "Maven", "JUnit 5", "Testcontainers", "Lombok"],
      link: null,
      code: "https://github.com/mattbixby123/portfolio-tracker-backend"
    }
  ];

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
        Project Portfolio
      </div>

      {/* Projects Section - Remove conditional rendering since we only have projects */}
      <div className="section-heading">
        <span className="diamond">♦</span> Projects <span className="diamond">♦</span>
      </div>

      <div className="projects-grid">
        {projects.slice().reverse().map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="project-emoji">{project.emoji}</span>
              <span className="project-title">{project.title}</span>
            </div>

            <div className="project-description">
              {project.description}
            </div>

            {/* <div className="project-tech">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="tech-pill">{tech}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="tech-pill">+{project.technologies.length - 4}</span>
              )}
            </div> */}
            <div className="project-tech">
              {/* Show first 4 technologies */}
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="tech-pill">{tech}</span>
              ))}

              {/* Show +X counter if there are more than 4 */}
              {project.technologies.length > 4 && (
                <span className="tech-pill counter">
                  +{project.technologies.length - 4}
                </span>
              )}

              {/* Hidden pills that show on hover */}
              {project.technologies.slice(4).map((tech, idx) => (
                <span key={idx + 4} className="tech-pill hidden-pill">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.link && project.link !== "#" && project.link !== null ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button demo-btn">
                  View Demo
                </a>
              ) : (
                <span className="project-button demo-btn disabled-btn">
                  {project.technologies.some(tech => tech === 'Java' || tech.includes('Spring') || tech === 'Javalin') ?
                    'Backend API - No Demo' : 'No Demo Available'}
                </span>
              )}

              <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-button code-btn">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="section-heading">
        <span className="diamond">♦</span> NAVIGATION <span className="diamond">♦</span>
      </div>

      <div className="nav-grid">
        <Link to="/" className="nav-card">
          <span className="nav-icon">🏡</span>
          <span className="nav-label">Home</span>
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

export default RetroPortfolio;