import React from 'react';
import { Card, CardContent, Typography, Chip, Button, Box } from '@mui/material';

const ProjectCard = ({ title, description, technologies, emoji, link }) => (
  <Card sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s',
    '&:hover': { transform: 'translateY(-5px)' },
    backgroundColor: '#d9d9d9'
  }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="div" gutterBottom color="#003300">
        {title} <span role="img" aria-label={title}>{emoji}</span>
      </Typography>
      <Typography variant="body2" color="#181818" paragraph sx={{
        height: '100px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical'
      }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
        {technologies.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              backgroundColor: '#CCFFCC',
              color: '#003300',
              fontSize: '0.7rem',
              height: '20px'
            }}
          />
        ))}
      </Box>
    </CardContent>
    <Box sx={{ p: 2 }}>
      <Button
        variant="contained"
        href={link}
        target="_blank"
        fullWidth
        sx={{
          bgcolor: '#003300',
          color: '#d9d9d9',
          '&:hover': { bgcolor: '#004400' }
        }}
      >
        View Project
      </Button>
    </Box>
  </Card>
);

export default ProjectCard;