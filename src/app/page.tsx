import React from 'react'
import ".//globals.css";
import Navbar from '../components/navbar';
import Background from '../components/background';
import Home from '@/components/home';
import About from '@/components/about';
import Blogs from '@/components/blogs';
import Footer from '@/components/footer';

const Page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Background 
        color="#010019"  
        videoUrl="/4.mp4" 
        opacity={0.5}  
      />
      <Navbar />
      <div style={{ flex: 1 }}> {/* Make the content container flexible */}
        <Home />
        <About />
        <Blogs />
      </div>
      <Footer /> {/* Footer stays at the bottom */}
    </div>
  );
}

export default Page;

