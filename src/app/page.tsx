import React from 'react'
import ".//globals.css";
import Navbar from '../components/navbar';
import Background from '../components/background';
import Home from '@/components/home';

const page = () => {
  return (
    <div>
      <Background 
        color="#010019"  
        videoUrl="/4.mp4"  // Replace with your video path
        opacity={0.5}  // Optional: set the opacity of the video
      />
      <Navbar/>
      <Home/>      
      

    </div>
  )
}

export default page;

