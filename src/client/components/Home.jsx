import React from 'react';
import { Paper, Card, CardContent, Typography } from '@mui/material';

function Home() {
  return ( 
    <div style={{ display: 'flex' }}>
      <Paper elevation={1} sx={{ padding: '20px', backgroundColor: '#d9d9d9', color: '#181818', width: '20%' }}>
        <img src="Bixby-purpleback.png" alt="Avatar" style={{ width: '100%' }} />
      </Paper>
      <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', width: '80%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            About Me
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <Typography variant="h5" component="div">
            Places of Study
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <Typography variant="h5" component="div">
            Technologies Mastered
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <Typography variant="h5" component="div">
            Hobbies and Interests
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </CardContent>
      </Paper>
    </div>
   );
}

export default Home;
