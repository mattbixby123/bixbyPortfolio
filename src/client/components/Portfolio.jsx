import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "#1 Puppy Bowl",
    emoji: "🐶",
    description: "This application is for managing a Puppy Bowl competition. Users will be able to view a list of players competing in the bowl, access detailed information about each player, create new players through a form, search for specific players, and delete players they have created.",
    technologies: ["React-Redux", "React Router", "Redux Toolkit", "HTML5", "CSS", "Javascript", "Javascript APIs"],
    link: "https://664255b4e94e3705d7a90302--bespoke-pixie-99297e.netlify.app/"
  },
  {
    title: "#2 Book Buddy",
    emoji: "📗",
    description: "This project is a web app for a fictitious library. This app allows you to browse a category of books that are fetched from an external API. As a registered user, you can checkout books and return them. You can also view your reserved books when accessing the account route.",
    technologies: ["React", "React Router", "React Hooks", "Redux Toolkit", "RTK Query", "Authentication", "HTML5", "CSS", "JS"],
    link: "https://66427587496fcb2483ba46cf--celebrated-crostata-770299.netlify.app/"
  },
  {
    title: "#3 Classroom Manager",
    emoji: "🧑‍🏫",
    description: "This Classroom Manager incorporates Prisma and Prisma Client, creating a Prisma schema to define instructor and student models, and developing the seed.js file to work seamlessly with Prisma Migrate. User passwords are encrypted using bcrypt before being transmitted to the server. Users have the option to register or log in with GitHub via OAuth to access the site.",
    technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "GitHub OAuth"],
    link: "https://unit4-classroommanager-starter.onrender.com/"
  },
  {
    title: "#4 Full Stack eCommerce Application",
    emoji: "💸",
    description: "The capstone project is an e-commerce platform for buying vintage paper media (books, comics, and magazines). It offers customers and admins a wide array of features and tools. The project is meticulously crafted for scalability, performance, and user satisfaction. Emphasizing meticulous database management, robust security measures, and seamless integration with payment gateways, the project aims to deliver a cutting-edge e-commerce solution tailored to meet diverse user needs.",
    technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "MUI Styling & Pagination", "STRIPE payment processing"],
    link: "https://www.youtube.com/watch?v=HZryg5wUy-w"
  }
];

function Portfolio() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#CCFFCC' }}>
        <Typography variant="h6" align="center" color="#003300">
          Thank you for visiting ... Please click any Emoji below to open a new tab with the corresponding project
        </Typography>
      </Paper> */}
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;