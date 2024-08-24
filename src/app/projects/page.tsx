"use client";
import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import { WobbleCard } from "@/components/ui/wobble-card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const projects = [
    {
      title: "MR Robot",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/mr-robot.png')]",
    },
    {
      title: "Hexapod",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/path/to/image2.jpg')]",
    },
    {
      title: "Robotic Arm",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/path/to/image3.jpg')]",
    },
    {
      title: "Drone",
      description: "ROS | Gazebo | Drone Control",
      bgImage: "bg-[url('/path/to/image4.jpg')]",
    },
    {
      title: "Autonomous Car",
      description: "ROS | OpenCV | Car Simulation",
      bgImage: "bg-[url('/path/to/image5.jpg')]",
    },
    {
      title: "Humanoid Robot",
      description: "ROS | OpenCV | Humanoid Control",
      bgImage: "bg-[url('/path/to/image6.jpg')]",
    },
    {
      title: "MR Robot",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/path/to/image7.jpg')]",
    },
    {
      title: "Hexapod",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/path/to/image8.jpg')]",
    },
    {
      title: "Robotic Arm",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/path/to/image9.jpg')]",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-8">
      <h1 className={`${poppins.className} text-4xl md:text-4xl font-bold mb-12 text-center`}>
        We at <span className="text-blue-500">A.T.O.M Robotics Labs</span> <br /> have built some exciting projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {currentProjects.map((project, index) => (
          <WobbleCard
            key={index}
            containerClassName={`${project.bgImage} bg-cover bg-center min-h-[300px] flex flex-col justify-between relative`}
          >
            {/* Dark overlay to reduce brightness of the background image */}
        
            <div className="p-4 flex-1">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                {project.title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {project.description}
              </p>
            </div>
          </WobbleCard>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === index + 1 ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
