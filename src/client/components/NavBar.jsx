import { useState } from 'react';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'Portfolio', 'Contact'];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 240 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} onClick={handleDrawerToggle}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return ( 
    <>
      <AppBar position="absolute">
      <Toolbar sx={{ 
              color: '#d9d9d9',
              backgroundColor: '#181818', // Set background color to #181818
              display: 'flex',
              justifyContent: 'space-between'
              }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="#d9d9d9" noWrap component="div">
              Matthew Bixby
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit" sx={{ fontWeight: '250', '&:active': {
                backgroundColor: '#003300', // Change background color on click
              },     '&:focus': {
                outline: 'none', // Remove outline when focused
              }, }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <nav aria-label="mailbox folders">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}


export default NavBar;
