import React from "react";
import { Paper, Typography } from '@mui/material'

function Portfolio() {
  return ( 
    <>
    <div className="projectList">
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" color="#003300" component="div">
        Puppy Bowl - <a href="https://664255b4e94e3705d7a90302--bespoke-pixie-99297e.netlify.app/" target="_blank">🐶</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
      This project aims to develop a web application for managing a bowl competition. Users will be able to view a list of players competing in the bowl, access detailed information about each player, create new players through a form, search for specific players, and delete players they themselves have created. The coding requirements include adherence to best practices in variable declaration, loop usage, control structures, function declarations and invocations, usage of basic and complex data types, DOM manipulation, CSS styling, and creating functional React components with proper state management. The focus is on delivering a clean, easily navigable, and aesthetically pleasing user interface while ensuring functionality and performance.
      </Typography>
    </Paper>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', marginBottom: '20px'  }}>
      <Typography variant="h5" color="#003300" component="div">
        Book Buddy - <a href="tbd" target="_blank">📗</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
      This project entails creating a web application for a library, with detailed requirements covering project management, functionality, implementation, and coding standards. Project management requirements include using GitHub for planning and code management. Functionality requirements specify routes via React Router, user authentication, book checkout/return functionality, and UI features. Implementation requirements encompass JavaScript basics, AJAX basics, front-end basics (including React components and state management with Redux), CSS basics, and testing. The code should be clean, well-organized, and connected to an API using RTK Query, with endpoints for CRUD operations on books and users. Styling should be implemented using a front-end React component library.      </Typography>
    </Paper>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', marginBottom: '20px'  }}>
      <Typography variant="h5" color="#003300" component="div">
        Classroom Manager - <a href="tbd" target="_blank">🧑‍🏫</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
        Classroom Manager details space
      </Typography>
    </Paper>
    <Paper elevation={1} sx={{ backgroundColor: '#d9d9d9', color: '#181818', padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" color="#003300" component="div">
        Full Stack eCommerce Applcation - <a href="tbd" target="_blank">💸</a>
      </Typography>
      <Typography variant="body2" color="#181818" component="p">
        unit 5 text space
      </Typography>
    </Paper>
    </div>
    </>
   );
}

export default Portfolio;

