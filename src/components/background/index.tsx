// components/Background.tsx
"use client"
import React, { useEffect } from 'react';

interface BackgroundProps {
  color?: string;
  logoUrl: string;  // URL of the logo image
  rotationSpeed?: number; // Rotation speed in seconds
}

const Background: React.FC<BackgroundProps> = ({ color = '#010019', logoUrl, rotationSpeed = 20 }) => {
  useEffect(() => {
    // Apply background color to the body
    document.body.style.backgroundColor = color;

    // Cleanup to reset background color when component unmounts or on route change
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return (
    <div className="background-logo">
      <img src={logoUrl} alt="Rotating Logo" className="rotating-logo" />
      <style jsx>{`
        .background-logo {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          opacity: 0.2;
        }

        .rotating-logo {
          width: 40vw; /* Adjust the size of the logo */
          height: auto; /* Adjust the size of the logo */
          animation: rotate ${rotationSpeed}s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
