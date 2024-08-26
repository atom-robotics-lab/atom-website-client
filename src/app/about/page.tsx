"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* About Section */}
      <div className="w-full flex flex-col md:flex-row items-start p-8 md:p-16 mt-16 md:mt-24">
        {/* Left section (now on the right side) */}
        <div className="md:w-1/2 text-xl leading-relaxed mr-4 max-w-md md:max-w-lg">
          <p>
            Our world is heading towards an Industrial Revolution with the
            introduction of Robotics & AI. Intelligent & Advanced robots are now
            being used everywhere to either assist humans or execute tasks that
            otherwise wouldn't have been possible by humans. Open source
            technologies like Gazebo Robotics Simulator & ROS (Robot Operating
            System) have made intelligent industrial/household robotics
            accessible to students & researchers. As engineering students,
            these technologies intrigue us to become a part of this industrial
            revolution on the brink of innovation.
          </p>
        </div>

        {/* Right section (now on the left side) */}
        <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0 md:ml-4">
          <div className="bg-blue-600 text-white p-8 md:p-10 rounded-md text-center w-80 h-72 md:w-96 md:h-80 flex items-center justify-center mt-2 md:mt-6">
            <div>
              <p className="text-4xl font-bold mb-5">WE ARE A.T.O.M</p>
              <p className="text-xl">A SOCIETY | COMMUNITY OF ROBOTICS BASED IN DELHI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full p-8 md:p-16 mt-16">
        <FocusCards
          cards={[
            {
              circleImageSrc: "/images/naman.png", // Optional circle image
              name: "NAMAN MALIK (@Mr_No-Man)",
              description: "Founder | Admin | CAD | IOT",
              instagramLink: "https://instagram.com/_naman.malik_",
              githubLink: "https://github.com/naman",
              linkedinLink: "https://linkedin.com/in/naman", // Optional LinkedIn link
            },
            {
              circleImageSrc: "/images/manav.png",
              name: "MANAV SETHI (@insaanimanav)",
              description: "Founder | Admin | Devops Nerd",
              instagramLink: "https://instagram.com/valley_enthusiast",
              githubLink: "https://github.com/valley_enthusiast",
              linkedinLink: "https://linkedin.com/in/valley_enthusiast",
            },
            {
              circleImageSrc: "/images/Jasmeet.png",
              name: "JASMEET SINGH (@processsingh)",
              description: "Founder | Admin | IOT | Embedded Systems",
              instagramLink: "https://instagram.com/sala_specialist",
              githubLink: "https://github.com/sala_specialist",
              linkedinLink: "https://linkedin.com/in/sala_specialist",
            },
            {
              circleImageSrc: "/images/arjun.png",
              name: "ARJUN K HARIDAS (@topgun837)",
              description: "ADMIN | AI/ML",
              instagramLink: "https://instagram.com/camping_pro",
              githubLink: "https://github.com/camping_pro",
              linkedinLink: "https://linkedin.com/in/camping_pro",
            },
            {
              circleImageSrc: "/images/jc.png",
              name: "JAYESH CHAUDHARY (@jc)",
              description: "ADMIN | Embedded Systems | IOT",
              instagramLink: "https://instagram.com/road_explorer",
              githubLink: "https://github.com/road_explorer",
              linkedinLink: "https://linkedin.com/in/road_explorer",
            },
            {
              circleImageSrc: "/images/aakshar.png",
              name: "AAKSHAR GARG (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/rule_keeper",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/aakshar.png",
              name: "AAKSHAR GARG (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/rule_keeper",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
