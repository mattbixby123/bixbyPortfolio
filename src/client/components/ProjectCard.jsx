import React, { useState } from 'react';
import { Card, CardContent, Typography, Chip, Button, Box, Tooltip, useMediaQuery, useTheme } from '@mui/material';

const ProjectCard = ({ title, description, technologies, emoji, link, code }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDescriptionMouseEnter = () => {
    setShowFullDescription(true);
  };

  const handleDescriptionMouseLeave = () => {
    setShowFullDescription(false);
  };

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: '0.3s',
      '&:hover': { transform: 'translateY(-5px)' },
      backgroundColor: '#f5f5f5'
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom color="#003300">
          {title} <span role="img" aria-label={title}>{emoji}</span>
        </Typography>
        <Tooltip
          title={description}
          placement={isMobile ? 'bottom' : 'bottom-start'}
          open={showFullDescription}
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <Typography
            variant="body2"
            color="#181818"
            paragraph
            onMouseEnter={isMobile ? undefined : handleDescriptionMouseEnter}
            onMouseLeave={isMobile ? undefined : handleDescriptionMouseLeave}
            sx={{
              height: isMobile ? 'auto' : '80px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: isMobile ? 'block' : '-webkit-box',
              WebkitLineClamp: isMobile ? 'none' : 3,
              WebkitBoxOrient: 'vertical',
              cursor: 'default'
            }}
          >
            {description}
          </Typography>
        </Tooltip>
      </CardContent>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
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
        {link && (
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
        )}
        {code && (
          <Button
            variant="outlined"
            href={code}
            target="_blank"
            fullWidth
            sx={{
              borderColor: '#003300',
              color: '#003300',
              '&:hover': { bgcolor: '#CCFFCC' }
            }}
          >
            View Repository
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;