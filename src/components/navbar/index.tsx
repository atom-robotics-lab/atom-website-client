"use client";
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 12,
        right: 5,
        zIndex: 1300, // Ensures it appears above other content
        backgroundColor: 'transparent',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Button color="inherit" href="#home" sx={{ mx: 2 }}>
          Home
        </Button>
        <Button color="inherit" href="#about" sx={{ mx: 2 }}>
          About
        </Button>
        <Button color="inherit" href="#contact" sx={{ mx: 2 }}>
         Achievements
        </Button>
        <Button color="inherit" href="#blogs" sx={{ mx: 2 }}>
          Projects
        </Button>
        <Button color="inherit" href="#blogs" sx={{ mx: 2 }}>
          Wiki
        </Button>
        <Button color="inherit" href="#blogs" sx={{ mx: 2 }}>
          Download
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
