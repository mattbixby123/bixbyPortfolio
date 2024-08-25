import React from 'react';
import { Paper, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      padding: isMobile ? '10px' : '20px',
      // marginTop: '64px',
      maxWidth: '1200px',
      margin: 'auto',
    }}>
      <Paper elevation={3} sx={{
        padding: '20px',
        backgroundColor: '#d9d9d9',
        color: '#181818',
        marginBottom: '20px'
      }}>
        <img
          src="Bixby-purpleback.png"
          alt="Matthew Bixby"
          style={{
            width: '100%',
            maxWidth: '300px',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'block',
            margin: '0 auto'
          }}
        />
        <Box className="logo-container" sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px'
        }}>
          <img
            src="ic-logo-blue.webp"
            alt="IthacaCollegeLogo"
            className="logo-image"
            style={{ maxWidth: '45%', marginRight: '10px' }}
          />
          <img
            src="fullstack-academy-logo-square-lg.jpg"
            alt="fullstackAcademyLogo"
            className='logo-image'
            style={{ maxWidth: '45%' }}
          />
        </Box>
      </Paper>

      <Paper elevation={3} sx={{
        backgroundColor: '#d9d9d9',
        color: '#181818',
        padding: '20px'
      }}>
        <Typography variant={isMobile ? "h6" : "h5"} color="#003300" component="div" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body2" color="#181818" paragraph>
          Hello there 👋 ... I'm Matthew Bixby, and I'm deeply passionate about full-stack web development. I view it as the cornerstone of the future and continuously strive to enhance my skills in this field. With an inherent love for learning, coupled with a natural aptitude for visualization and problem-solving, I pride myself on being an exceptionally fast learner.
        </Typography>
        <Typography variant="body2" color="#181818" paragraph>
          Recently, I completed the Web Development Program at Fullstack Academy, driven by my fervent belief in the transformative power of web development. My studies encompass HTML5, CSS, JavaScript, Git and GitHub, JavaScript APIs, React (including React Router and React Hooks), Redux, SQL, and Prisma ORM.
        </Typography>

        <Typography variant={isMobile ? "h6" : "h5"} color="#003300" component="div" gutterBottom sx={{ marginTop: '20px' }}>
          Education
        </Typography>
        <Box component="ul" sx={{ pl: 4 }}>
          <Typography component="li" variant="body2" color="#181818">
            Bachelor of Science in Chemistry from Ithaca College c/o 2017.
          </Typography>
          <Typography component="li" variant="body2" color="#181818">
            Web Development Certificate issued by Fullstack Academy (28 weeks immersive program), June 13th, 2024.
          </Typography>
        </Box>

        <Typography variant={isMobile ? "h6" : "h5"} color="#003300" component="div" gutterBottom sx={{ marginTop: '20px' }}>
          Technologies Mastered
        </Typography>
        <Typography variant="body2" color="#181818" paragraph>
          HTML5, CSS, JavaScript, Git and GitHub, JavaScript APIs, React, React Router, React Hooks, Redux, SQL, Prisma ORM
        </Typography>

        <Typography variant={isMobile ? "h6" : "h5"} color="#003300" component="div" gutterBottom sx={{ marginTop: '20px' }}>
          Hobbies and Interests
        </Typography>
        <Box component="ul" sx={{ pl: 4 }}>
          <Typography component="li" variant="body2" color="#181818">Coffee ☕️</Typography>
          <Typography component="li" variant="body2" color="#181818">Reading, especially sci-fi 📚</Typography>
          <Typography component="li" variant="body2" color="#181818">Hiking 🥾🌲</Typography>
          <Typography component="li" variant="body2" color="#181818">Plants 🪴🌵</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Home;