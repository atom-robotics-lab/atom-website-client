import React from 'react'
import ".//globals.css";
import Navbar from '../components/navbar';
import Background from '../components/background';
import Home from '@/components/home';

const page = () => {
  return (
    <div>
      <Background 
        color="#010019"  // Light blue background
        logoUrl="/logo_1.png"  // Replace with your logo path
        rotationSpeed={30}  // Optional: set the rotation speed
      />
      <Navbar/>
      <Home/>      
      

    </div>
  )
}

export default page;

