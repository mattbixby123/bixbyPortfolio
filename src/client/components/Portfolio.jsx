import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import ProjectCard from './ProjectCard';

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
    technologies: ["React", "React Router", "React Hooks", "Redux Toolkit", "RTK Query", "Authentication", "HTML5", "CSS", "JavaSript"],
    link: "https://66427587496fcb2483ba46cf--celebrated-crostata-770299.netlify.app/",
    code: "https://github.com/mattbixby123/B30A-BookBuddy-Bixby"
  },
  {
    title: "Classroom Manager",
    emoji: "🧑‍🏫",
    description: "This Classroom Manager incorporates Prisma and Prisma Client, creating a Prisma schema to define instructor and student models, and developing the seed.js file to work seamlessly with Prisma Migrate. User passwords are encrypted using bcrypt before being transmitted to the server. Users have the option to register or log in with GitHub via OAuth to access the site.",
    technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "GitHub OAuth"],
    link: "https://unit4-classroommanager-starter.onrender.com/",
    code: "https://github.com/mattbixby123/Unit4.ClassroomManager.Starter"
  },
  {
    title: "Full Stack eCommerce Application",
    emoji: "💸",
    description: "The capstone project is an e-commerce platform for buying vintage paper media (books, comics, and magazines). It offers customers and admins a wide array of features and tools. The project is meticulously crafted for scalability, performance, and user satisfaction. Emphasizing meticulous database management, robust security measures, and seamless integration with payment gateways, the project aims to deliver a cutting-edge e-commerce solution tailored to meet diverse user needs.",
    technologies: ["React-Redux", "React-Router", "Redux Toolkit", "Express JS", "PostgreSQL", "Prisma ORM", "bcrypt encryption", "MUI Styling & Pagination", "STRIPE payment processing"],
    link: "https://www.youtube.com/watch?v=HZryg5wUy-w",
    code: "https://github.com/mattbixby123/eCommCapstone"
  },
  {
    title: "moodTrak",
    emoji: "📆",
    description: "How do you feel today? This is a daily mood tracking app that was completed in a single weekend. This app allows you to log your  daily mood and see your past records.",
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
    description: "AWS Cloud deployment project utilizing my recent AWS CCP certification to deploy a full stack application.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Redux Toolkit", "RTK Query", "Material UI Data Grid", "Node.js", "Prisma ORM", "AWS EC2", "AWS RDS", "AWS API Gateway", "AWS Amplify", "AWS S3"],
    link: "https://main.d2y97dvo3t7six.amplifyapp.com/",
    code: "https://github.com/mattbixby123/InventoryManagement"
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
        {projects.slice().reverse().map((project, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;