// components/Home.tsx
"use client"

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Silkscreen, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400"],
});

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        className={silkscreen.className}
        sx={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#ffff',
          textAlign: 'center',
          marginBottom: '2rem',
          whiteSpace: 'nowrap', 
          overflow: 'hidden',
          borderRight: '.15em solid #001ea5', 
          animation: 'typing 3.5s steps(30, end), blink-caret .75s step-end infinite',
          '& span': {
            background: '#001ea5',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          },
        }}
      >
        Welcome to <span>A.T.O.M Robotics</span>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{
            background: '#0d47a1',
            color: 'white',
            borderRadius: '20px',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            '&:hover': {
              background: '#0a3b6c',
            },
          }}
        >
          Contact Us
        </Button>
        <Button
          sx={{
            background: '#0d47a1',
            color: 'white',
            borderRadius: '20px',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            '&:hover': {
              background: '#0a3b6c',
            },
          }}
        >
          Selection Task
        </Button>
      </Box>

      <style jsx>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #001ea5; }
        }
      `}</style>
    </Box>
  );
};

export default Home;
