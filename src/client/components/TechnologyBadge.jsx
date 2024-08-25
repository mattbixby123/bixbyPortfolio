import React from 'react';
import { Chip } from '@mui/material';

function TechnologyBadge({ technology }) {
  return (
    <Chip
      label={technology}
      sx={{
        backgroundColor: '#e0e0e0',
        '&:hover': {
          backgroundColor: '#003300',
          color: '#ffffff'
        }
      }}
    />
  );
}

export default TechnologyBadge;