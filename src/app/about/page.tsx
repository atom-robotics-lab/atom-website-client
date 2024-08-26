"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* About Section */}
      <div className="w-full flex flex-col md:flex-row items-start p-8 md:p-16 mt-16 md:mt-24">
        {/* Right section (now on the left side) */}
        <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0 md:ml-4">
          <div className="bg-blue-600 text-white p-8 md:p-10 rounded-md text-center w-80 h-72 md:w-96 md:h-80 flex items-center justify-center mt-2 md:mt-6">
            <div>
              <p className="text-4xl font-bold mb-5">WE ARE A.T.O.M</p>
              <p className="text-xl">A SOCIETY | COMMUNITY OF ROBOTICS BASED IN DELHI</p>
            </div>
          </div>
        </div>

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
              instagramLink: "https://instagram.com/insaanimanav_",
              githubLink: "https://github.com/valley_enthusiast",
              linkedinLink: "https://linkedin.com/in/valley_enthusiast",
            },
            {
              circleImageSrc: "/images/Jasmeet.png",
              name: "JASMEET SINGH (@processsingh)",
              description: "Founder | Admin | IOT | Embedded Systems",
              instagramLink: "https://instagram.com/debounsingh",
              githubLink: "https://github.com/sala_specialist",
              linkedinLink: "https://linkedin.com/in/sala_specialist",
            },
            {
              circleImageSrc: "/images/arjun.png",
              name: "ARJUN K HARIDAS (@topgun837)",
              description: "ADMIN | AI/ML",
              instagramLink: "https://instagram.com/arjun.kh8376",
              githubLink: "https://github.com/camping_pro",
              linkedinLink: "https://linkedin.com/in/camping_pro",
            },
            {
              circleImageSrc: "/images/jc.png",
              name: "JAYESH CHAUDHARY (@jc)",
              description: "ADMIN | Embedded Systems | IOT",
              instagramLink: "https://instagram.com/jchaudhary_00",
              githubLink: "https://github.com/road_explorer",
              linkedinLink: "https://linkedin.com/in/road_explorer",
            },
            {
              circleImageSrc: "/images/hriday.png",
              name: "HRIDAY AGGARWAL (@hra)",
              description: "ADMIN | OG",
              instagramLink: "https://instagram.com/hridayaggarwal",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/brad.png",
              name: "KARTIK RANA (@brad)",
              description: "ADMIN | MECHANICAL",
              instagramLink: "https://instagram.com/kartik_r.a.n.a",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/aakshar.png",
              name: "AAKSHAR GARG (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/divi.png",
              name: "DIVIYANSH SHARMA (@divi)",
              description: "CORE | MANAGEMENT",
              instagramLink: "https://instagram.com/divyanshsharma5289",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/alok.png",
              name: "ALOK SHARMA (@noemoji)",
              description: "CORE | ROS",
              instagramLink: "https://instagram.com/aloksharma041",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/manan.png",
              name: "MANAN GUPTA (@inspector)",
              description: "CORE | ROS",
              instagramLink: "https://instagram.com/manan_gupta28",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/xaifi.png",
              name: "SAHEEM AHMAD (@xaifi)",
              description: "CORE | MECHANICAL",
              instagramLink: "https://instagram.com/saheem_xaifi",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/krrish.png",
              name: "KRRISH (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/ayan.png",
              name: "AYAN(@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/priyanshu.png",
              name: "PRIYANSHU GARG (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/sparsh.png",
              name: "SPARSH (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/sanchay.png",
              name: "SANCHAY (@choose_her)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/ayush.png",
              name: "AYUSH (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/paarth.png",
              name: "PARTH SHARMA (@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            },
            {
              circleImageSrc: "/images/himanshu.png",
              name: "HIMANSHU(@cheekan tekka)",
              description: "ADMIN",
              instagramLink: "https://instagram.com/aakshar4",
              githubLink: "https://github.com/rule_keeper",
              linkedinLink: "https://linkedin.com/in/rule_keeper",
            }
          ]}
        />
      </div>
    </div>
  );
};

export default About;
