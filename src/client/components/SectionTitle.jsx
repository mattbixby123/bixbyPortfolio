import React from 'react';
import { Typography } from '@mui/material';

function SectionTitle({ children }) {
  return (
    <Typography
      variant="h5"
      component="h2"
      gutterBottom
      sx={{
        color: '#003300',
        borderBottom: '2px solid #003300',
        paddingBottom: 1,
        marginTop: 4,
        marginBottom: 2
      }}
    >
      {children}
    </Typography>
  );
}

export default SectionTitle;