"use client"

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Inter , Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
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
        className={poppins.className} // Apply Poppins font
        sx={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#0d47a1',
          textAlign: 'center',
          marginBottom: '2rem',
          '& span': {
            background: 'linear-gradient(to right, #e91e63, #9c27b0)',
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
    </Box>
  );
};

export default Home;
