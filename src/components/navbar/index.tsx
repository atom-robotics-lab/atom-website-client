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
        zIndex: 1300, 
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'transparent',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
    
        <Box component="img" src="/logo_1.png" alt="Logo" sx={{ height: 70,marginLeft:"6rem" }} />

        
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" href="#home" sx={{ mx: 2 }}>
            Home
          </Button>
          <Button color="inherit" href="#about" sx={{ mx: 2 }}>
            About
          </Button>
          <Button color="inherit" href="#contact" sx={{ mx: 2 }}>
            Achievements
          </Button>
          <Button color="inherit" href="#projects" sx={{ mx: 2 }}>
            Projects
          </Button>
          <Button color="inherit" sx={{ mx: 2 }}
           href="https://atom-robotics-lab.github.io/wiki/" 
           target="_blank" 
           rel="noopener noreferrer" >
            Wiki
          </Button>
          <Button color="inherit" href="#download" sx={{ mx: 2 }}>
            Download
          </Button>
          <Button color='inherit'  sx={{mx:2, borderRadius:"32px",background: '#0d47a1',
            color: 'white',padding:"0.8rem 1rem"}}
           href="https://linktr.ee/a.t.o.m_robotics_lab" 
           target="_blank" 
           rel="noopener noreferrer">
            Get in touch
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
