import React from 'react';
import { Paper, Card, CardContent, Typography } from '@mui/material';

function Home() {
  return ( 
    <div style={{ display: 'flex' }}>
      <Paper elevation={1} sx={{ padding: '20px', backgroundColor: '#d9d9d9', color: '#181818', width: '20%' }}>
        <img src="Bixby-purpleback.png" alt="Avatar" style={{ width: '100%' }} />
            <div className="logo-container">
              <img src="ic-logo-blue.webp" alt="IthacaCollegeLogo" className="logo-image" />
              <img src="fullstack-academy-logo-square-lg.jpg" alt="fullstackAcademyLogo" className='logo-image' />
            </div>
      </Paper>
      <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', width: '80%' }}>
        <CardContent>
          <Typography variant="h5" color="#003300" component="div">
            About Me
          </Typography>
          <br />
          <Typography variant="body2" color="#181818" component="p">
          Hello there 👋 ... I'm Matthew Bixby, and I'm deeply passionate about full-stack web development. I view it as the cornerstone of the future and continuously strive to enhance my skills in this field. With an inherent love for learning, coupled with a natural aptitude for visualization and problem-solving, I pride myself on being an exceptionally fast learner.

Recently, I enrolled in the Web Development Program at Fullstack Academy, driven by my fervent belief in the transformative power of web development. My studies encompass HTML5, CSS, JavaScript, Git and GitHub, JavaScript APIs, React (including React Router and React Hooks), Redux, SQL, and Prisma ORM.
          </Typography>
          <br />
          <Typography variant="h5" color="#003300" component="div">
            Education
          </Typography>
          <Typography variant="body2" color="#181818" component="p">
            <ul>
              <li>
              I have a Bachelor of Science in Chemistry from Ithaca College c/o 2017.
              </li>
              <li>
              As of June 13th, 2024 I'll have a Web Development Certificate issued by Fullstack Academy for my immersive web development program (28 wks)
              </li>
            </ul>
          </Typography>
          <Typography variant="h5" color="#003300" component="div">
            Technologies Mastered
          </Typography>
          <br />
          <Typography variant="body2" color="#181818" component="p">
              HTML5, CSS, JavaScript, Git and GitHub, JavaScript APIs, React, React Router, and React Hooks, Redux, SQL, Prisma ORM
          </Typography>
          <br />
          <Typography variant="h5" color="#003300" component="div">
            Hobbies and Interests
          </Typography>
          <Typography variant="body2" color="#181818" component="div">
              <ul>
                <li>
                I have a cat and a dog 🐱🐕 (Stella and Luna)
                </li>
                <li>
                Reading (all genres) 📚
                </li>
                <li>
                Hiking 🥾🌲
                </li>
                <li>
                Plants 🪴🌵
                </li>
              </ul>
          </Typography>
        </CardContent>
      </Paper>
    </div>
   );
}

export default Home;
