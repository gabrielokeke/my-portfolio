import React from "react";
import { 
  FaReact, 
  FaMobile, 
  FaLaptopCode, 
  FaCode,
  FaLightbulb,
  FaRocket,
  FaBriefcase,
  FaTools
} from "react-icons/fa";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { SiNextdotjs } from "react-icons/si";
import { FaRegLightbulb, FaRocketchat } from "react-icons/fa6";

// Icon mapping for each experience
const experienceIcons = {
  1: SiNextdotjs,
  2: FaMobile,
  3: FaLaptopCode,
  4: FaRocketchat,
};

// Alternative icons you can use:
// FaLightbulb, FaRocket, FaBriefcase, FaTools

const Experience = () => {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-20 w-full bg-black">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center text-white">
        My <span className="text-yellow-400">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => {
          const IconComponent = experienceIcons[card.id as keyof typeof experienceIcons];
          
          return (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              className="flex-1 text-black dark:text-white border-yellow-400 border-2 dark:border-slate-800"
            >
              <div className="flex flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
                <div className="flex md:flex-row flex-col items-center justify-center lg:w-32 md:w-20 w-16 lg:h-32 md:h-20 h-16">
                  <IconComponent 
                    className="text-yellow-400 lg:text-6xl text-center md:text-start md:text-4xl text-3xl"
                  />
                </div>
                <div className="lg:ms-5">
                  <h1 className="text-start text-yellow-400 text-sm md:text-lg lg:text-xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white mt-2 text-xs md:text-sm lg:text-base font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;