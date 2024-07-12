import React from "react";
import { Paper, Typography } from '@mui/material'

function Portfolio() {
  return ( 
    <>
    <div className="projectList">
    <Typography variant="h7" color='#003300' fontWeight='900' backgroundColor='#CCFFCC' sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        Thank you for visiting ... Please click any Emoji below to open a new tab with the coresponding project
    </Typography>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', margin: '10px' }}>
      <Typography variant="h5" color="#003300" component="div">
        #1 Puppy Bowl - <a href="https://664255b4e94e3705d7a90302--bespoke-pixie-99297e.netlify.app/" target="_blank" style={{ textDecoration: 'underline overline' }}>🐶</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
      This application is for managing a Puppy Bowl competition. Users will be able to view a list of players competing in the bowl, access detailed information about each player, create new players through a form, search for specific players, and delete players they have created.
      </Typography>
      <Typography variant="h7" color='#003300' fontWeight='900'>
        TECHNOLOGIES IMPLEMENTED: React-Redux, React Router, Redux Toolkit, HTML5, CSS, Javascript, Javascript APIs.  <b>(React Fundamentals)</b>
      </Typography>
    </Paper>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', margin: '10px' }}>
      <Typography variant="h5" color="#003300" component="div">
        #2 Book Buddy - <a href="https://66427587496fcb2483ba46cf--celebrated-crostata-770299.netlify.app/" target="_blank" style={{ textDecoration: 'underline overline' }}>📗</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
      This project is a web app for a fictitious library. This app allows you to browse a category of books that are fetched from an external API. As a registered user, you can checkout books and return them. You can also view your reserved books when accessing the account route.       </Typography>
      <Typography variant="h7" color='#003300' fontWeight='900'>
        TECHNOLOGIES IMPLEMENTED: React, React Router, <u><b>React Hooks(state and effect)</b></u>, Redux Toolkit, <u>RTK Query</u>, Authentication, HTML5, CSS, JS, and JS APIs.
      </Typography>
    </Paper>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', margin: '10px' }}>
      <Typography variant="h5" color="#003300" component="div">
        #3 Classroom Manager - <a href="https://unit4-classroommanager-starter.onrender.com/" target="_blank" style={{ textDecoration: 'underline overline' }}>🧑‍🏫</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
      This Classroom Manager incorporates Prisma and Prisma Client, creating a Prisma schema to define instructor and student models, and developing the seed.js file to work seamlessly with Prisma Migrate. User passwords are encrypted using bcrypt before being transmitted to the server. Users have the option to register or log in with GitHub via OAuth to access the site. Frontend components are provided to facilitate the "Login via GitHub" functionality, and a redirect route is established on the backend to receive the authorization code from GitHub. The backend is capable of making requests to GitHub on behalf of users, storing GitHub-authenticated user accounts in the database, and issuing tokens to the client upon successful authentication, irrespective of the login method employed.    
      </Typography>
      <Typography variant="h7" color='#003300' fontWeight='900'>
        TECHNOLOGIES IMPLEMENTED: React-Redux, React-Router, Redux Toolkit, Express JS, PostgreSQL, <u>Prisma ORM</u>, bcrypt encryption, <u>GitHub OAuth</u>.
      </Typography>
    </Paper>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', margin: '10px' }}>
      <Typography variant="h5" color="#003300" component="div">
        #4 Full Stack eCommerce Applcation - <a href="https://www.youtube.com/watch?v=HZryg5wUy-w" target="_blank" style={{ textDecoration: 'underline overline' }}>💸</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
      
      The capstone project is an e-commerce platform for buying vintage paper media (books, comics, and magazines).  It offers customers and admins a wide array of features and tools. The project is meticulously crafted for scalability, performance, and user satisfaction. Emphasizing meticulous database management, robust security measures, and seamless integration with payment gateways, the project aims to deliver a cutting-edge e-commerce solution tailored to meet diverse user needs.
      </Typography>
       <Typography variant="h7" color='#003300' fontWeight='900'>
        TECHNOLOGIES IMPLEMENTED: React-Redux, React-Router, Redux Toolkit, Express JS, PostgreSQL, Prisma ORM, bcrypt encryption, MUI Styling & Pagination, STRIPE payment processing 
      </Typography>
    </Paper>
    </div>
    </>
   );
}

export default Portfolio;

