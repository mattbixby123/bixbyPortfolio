import React from 'react';
import {
  Paper, Typography, Box, Grid, Chip, useMediaQuery, useTheme, Container, Divider
} from '@mui/material';
import TechnologyBadge from './TechnologyBadge';
import SectionTitle from './SectionTitle';

const technologies = [
  'HTML5', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'SQL', 'Git'
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src="Bixby-purpleback.png"
                alt="Matthew Bixby"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '50%',
                  border: '4px solid #003300',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ color: '#003300' }}>
              Matthew Bixby
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#181818' }}>
              Full Stack Web Developer
            </Typography>
            <Typography variant="body1" paragraph>
              Hello there 👋 ... I'm deeply passionate about full-stack web development. I view it as the cornerstone of the future and continuously strive to enhance my skills in this field. With an inherent love for learning, coupled with a natural aptitude for visualization and problem-solving, I pride myself on being an exceptionally fast learner.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <SectionTitle>About Me</SectionTitle>
        <Typography variant="body1" paragraph>
          Recently, I completed the Web Development Program at Fullstack Academy, driven by my fervent belief in the transformative power of web development. My studies encompass HTML5, CSS, JavaScript, Git and GitHub, JavaScript APIs, React (including React Router and React Hooks), Redux, SQL, and Prisma ORM.
        </Typography>

        <SectionTitle>Education</SectionTitle>
        <ul>
          <Typography component="li" variant="body1">
            Bachelor of Science in Chemistry from Ithaca College c/o 2017.
          </Typography>
          <Typography component="li" variant="body1">
            Web Development Certificate issued by Fullstack Academy (28 weeks immersive program), June 13th, 2024.
          </Typography>
        </ul>

        <SectionTitle>Technologies Mastered</SectionTitle>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {technologies.map((tech) => (
            <TechnologyBadge key={tech} technology={tech} />
          ))}
        </Box>

        <SectionTitle>Hobbies and Interests</SectionTitle>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip icon={<span>☕</span>} label="Coffee" />
          <Chip icon={<span>📚</span>} label="Reading sci-fi" />
          <Chip icon={<span>🥾</span>} label="Hiking" />
          <Chip icon={<span>🌿</span>} label="Plants" />
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;