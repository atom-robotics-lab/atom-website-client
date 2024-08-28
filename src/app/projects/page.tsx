"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { WobbleCard } from "@/components/ui/wobble-card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projects = [
    {
      title: "MR Robot",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/mr-robot.png')]",
    },
    {
      title: "Hexapod",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/hexapod.png')]",
    },
    {
      title: "Robotic Arm",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/arm.png')]",
    },
    {
      title: "CNC",
      description: "ROS | Gazebo | Drone Control",
      bgImage: "bg-[url('/project-thumbnails/cnc.png')]",
    },
    {
      title: "Omnidrive AMR",
      description: "ROS | OpenCV | Humanoid Control",
      bgImage: "bg-[url('/project-thumbnails/omnidrive.jpg')]",
    },
    {
      title: "Swarm Bots",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/swarm-bot.jpeg')]",
    },
    {
      title: "MR Robot GUI",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/mr-robot-gui.png')]",
    },
    {
      title: "Robotic Arm GUI",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/robotic-arm-gui.jpg')]",
    },
    {
      title: "Line Follower",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/lfr.png')]",
    },
    {
      title: "Person Follower",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/person-follower.png')]",
    },
    {
      title: "Perception Pipeline",
      description: "ROS | OpenCV | Gazebo | Robot-Perception",
      bgImage: "bg-[url('/project-thumbnails/perception.png')]",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-8">
      <h1
        className={`${poppins.className} text-4xl md:text-4xl font-bold mb-12 text-center`}
      >
        We at <span className="text-blue-500">A.T.O.M Robotics Labs</span>{" "}
        <br /> have built some exciting projects
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
              currentPage === index + 1 ? "bg-blue-800" : "bg-gray-700"
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
