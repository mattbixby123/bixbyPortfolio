import React from 'react';
import PageLayout from '../components/PageLayout';

const RetroPortfolio = ({ currentPath }) => {
  const projects = [
    {
      title: "Puppy Bowl",
      date: "May 2024",
      emoji: "🐶",
      description: "This application is for managing a Puppy Bowl competition. Users will be able to view a list of players competing in the bowl, access detailed information about each player, create new players through a form, search for specific players, and delete players they have created.",
      technologies: ["React-Redux", "React Router", "Redux Toolkit", "HTML5", "CSS", "JavaScript", "JavaScript APIs"],
      link: "https://bespoke-pixie-99297e.netlify.app/",
      code: "https://github.com/mattbixby123/PuppyBowlSPA"
    },
    {
      title: "Retro Rag Reads | eCommerce Platform",
      date: "Apr 2025",
      emoji: "💸",
      description: "The capstone project is an e-commerce platform for buying vintage paper media (books, comics, and magazines). It offers customers and admins a wide array of features and tools. The project is meticulously crafted for scalability, performance, and user satisfaction.",
      technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "MUI Styling & Pagination", "STRIPE payment processing"],
      link: "https://www.youtube.com/watch?v=HZryg5wUy-w",
      code: "https://github.com/mattbixby123/eCommCapstone"
    },
    {
      title: "moodTrak",
      date: "Aug 2024",
      emoji: "📆",
      description: "How do you feel today? This is a daily mood tracking app that was completed in a single weekend. This app allows you to log your daily mood and see your past records.",
      technologies: ["React", "NextJS", "Tailwind CSS", "Firebase", "Netlify deployment"],
      link: "https://moodtrak.netlify.app/",
      code: "https://github.com/mattbixby123/moodtrak"
    },
    {
      title: "Horizon Bank | Account Manager",
      date: "Aug 2024",
      emoji: "🏦",
      description: "This modern banking app allows you to access all of your accounts, accross all of your banks, from one secured dashboard.",
      technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "Appwrite", "Dwolla API", "Sentry for bug monitoring", "Plaid API"],
      link: "https://banking-next-khaki.vercel.app/",
      code: "https://github.com/mattbixby123/banking-next"
    },
    {
      title: "BIXSTOCK | Inventory Management System",
      date: "Sep 2024 - Aug 2025",
      emoji: "📦",
      description: "Scalable full-stack inventory management system with production VPS infrastructure. Implemented Docker containerization and nginx reverse proxy, achieving 30% reduction in API response times through caching and load balancing. Features zero-downtime deployment pipeline and comprehensive Linux server configuration with firewall management and SSL termination.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Prisma ORM", "PostgreSQL", "Docker", "nginx", "Linux/Fedora", "SSL/TLS", "AWS RDS"],
      link: "https://inventory.matthewbixby.com",
      code: "https://github.com/mattbixby123/InventoryManagement"
    },
    {
      title: "Spring Social Media API",
      date: "May 2025",
      emoji: "🌱",
      description: "Enterprise-grade social media backend API built with Spring Framework. Features complete user account management, CRUD operations for messages, and secure authentication. Demonstrates advanced Spring Boot, Spring Data JPA, and RESTful API design principles.",
      technologies: ["Java", "Spring Boot", "Spring Framework", "Spring Data JPA", "Spring Web", "REST APIs", "Authentication"],
      link: null,
      code: "https://github.com/mattbixby123/mattbixby123-pep-spring-project"
    },
    {
      title: "Social Media Blog API",
      date: "Apr 2025",
      emoji: "☕",
      description: "Full-stack backend API for social media application using core Java technologies. Implements user registration, authentication, message management, and data persistence. Built with Test-Driven Development methodology and clean architecture principles.",
      technologies: ["Java", "Javalin", "JDBC", "Maven", "JUnit", "Mockito", "REST APIs", "TDD"],
      link: null,
      code: "https://github.com/mattbixby123/mattbixby123-pep-project"
    },
    {
      title: "Weather App",
      date: "Jul 2025",
      emoji: "🌤️",
      description: "A responsive weather application providing real-time weather data and 5-day forecasts for any location worldwide. Features location search, current location detection, detailed weather metrics, and an intuitive user interface with smooth loading states.",
      technologies: ["NextJS 15", "React 19", "TypeScript", "Tailwind CSS", "TanStack React Query", "Jotai", "Axios", "OpenWeatherMap API", "date-fns"],
      link: "https://weather-91eymv0ih-matthew-bixbys-projects.vercel.app/",
      code: "https://github.com/mattbixby123/weather-app"
    },
    {
      title: "Investment Portfolio Tracker (Backend)",
      date: "Jun 2025 - Aug 2025",
      emoji: "📈",
      description: "Enterprise-grade Spring Boot REST API with real-time WebSocket streaming for live stock price updates. Features JWT authentication, comprehensive PostgreSQL data persistence, and dual API integration (Alpha Vantage REST + Finnhub WebSocket). Implemented robust testing strategy with 85% code coverage and detailed Swagger documentation. Demonstrates full-stack backend architecture with real-time capabilities.",
      technologies: ["Java 21", "Spring Boot", "Spring Security", "WebSocket", "Spring Data JPA", "PostgreSQL", "JWT Authentication", "JUnit", "Mockito", "Swagger", "Alpha Vantage API", "Finnhub API", "Maven", "Flyway Migration", "Testcontainers", "Real-time Streaming"],
      link: null,
      code: "https://github.com/mattbixby123/portfolio-tracker-backend"
    },
    {
      title: "Allergen Intelligence Platform",
      date: "Sep 2025",
      emoji: "🧪",
      description: "Spring Boot microservices platform for chemical allergen research in cosmetic ingredients. Achieves 95% cost reduction through intelligent caching strategy, integrating PubChem and OpenAI APIs for automated literature synthesis. Features PostgreSQL pgvector for sub-second cached responses (18s → 18ms) with all analysis backed by peer-reviewed citations.",
      technologies: ["Java 21", "Spring Boot", "PostgreSQL", "pgvector", "PubChem API", "OpenAI API", "Spring Data JPA", "REST APIs", "Intelligent Caching", "Research Automation"],
      link: null,
      code: "https://github.com/mattbixby123/allergen-intelligence"
    }
  ];

  return (
    <PageLayout
      currentPath={currentPath}
      bannerText="Project Portfolio"
    >
      {/* Projects Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> Projects <span className="diamond">♦</span>
      </div>

      <div className="projects-grid">
        {projects.slice().reverse().map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="project-emoji">{project.emoji}</span>
              <span className="project-title">{project.title}</span>
              {/* this line below allows for projects with a date. it also parses the space between the month and year to display as the date as two lines*/}
              {project.date && <span className="project-date">{project.date.replace(' ', '\n')}</span>}
            </div>

            <div className="project-description">
              {project.description}
            </div>

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
    </PageLayout>
  );
};

export default RetroPortfolio;