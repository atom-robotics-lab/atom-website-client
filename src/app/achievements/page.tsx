import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Adjust import path if necessary

const fixedSizeStyle = {
  width: '300px', // Adjust width as needed
  height: '200px', // Adjust height as needed
  display: 'flex', // Use flex to center content
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  overflow: 'hidden', // Hide overflow to crop image
};

const imageStyle = {
  width: '100%', // Make sure the image fills the container
  height: '100%', // Make sure the image fills the container
  objectFit: 'cover', // Crop the image to fit the container
};

const achievements = [
  {
    title: "Escalade",
    description: "Finalists",
    header: "",
    icon: <img src="/images/escalade.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Code CLash 1.0",
    description: "1st Position",
    header: "",
    icon: <img src="/images/cc.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackWithMAIT 5.0",
    description: "1st Position",
    header: "",
    icon: <img src="/images/hwm5.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackBVP",
    description: "3rd Position",
    header: "",
    icon: <img src="/images/hackbvp.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "eYantra Luminosity Drone",
    description: "Semi-Finalists",
    header: "",
    icon: <img src="/images/drone.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "eYantra Hologlyph",
    description: "Semi Finalists",
    header: "",
    icon: <img src="/images/hologlyph.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "eYantra Cosmo Logistic",
    description: "Finalists",
    header: "",
    icon: <img src="/images/cosmo.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Innovation Mela",
    description: "1st Position",
    header: "",
    icon: <img src="/images/imela.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Code Kshetra",
    description: "1st Position",
    header: "",
    icon: <img src="/images/codekshetra.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackJNU",
    description: "TOP 5",
    header: "",
    icon: <img src="/images/hackjnu.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "ABU Robocon",
    description: "Stage 1 (94/100)",
    header: "",
    icon: <img src="/images/aburobocon.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackWithMAIT 4.0",
    description: "1st Position",
    header: "",
    icon: <img src="/images/hwm4.png" alt="Icon 1" style={imageStyle} />,
  },
];

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-blue-500">A.T.O.M Robotics Lab</span> <br /> Our Journey of Excellence
      </h1>
      <BentoGrid className="w-full max-w-6xl">
        {achievements.map((achievement, index) => (
          <BentoGridItem
            key={index}
            title={achievement.title}
            description={achievement.description}
            header={achievement.header}
            icon={<div style={fixedSizeStyle}>{achievement.icon}</div>}
            className="bg-blue-100"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default AchievementsPage;