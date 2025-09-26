"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "A responsive web app built with Next.js and Tailwind CSS.",
    image: "/pic1.png", 
    live: "https://example.com/project1",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    description: "Interactive UI/UX design project with React and Framer Motion.",
    image: "/pic2.png",
    live: "https://example.com/project2",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    description: "A modern dashboard using Next.js, React, and Tailwind CSS.",
    image: "/pic3.png",
    live: "https://example.com/project3",
    github: "https://github.com/yourusername/project3",
  },
  {
    title: "Project Four",
    description: "A creative personal portfolio showcasing frontend projects.",
    image: "/pic4.png",
    live: "https://example.com/project4",
    github: "https://github.com/yourusername/project4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-16 lg:px-24 min-h-screen">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-white">
        A small selection of{" "}
       <span className="text-yellow-400">recent projects</span> 
      </h2>

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-black rounded-2xl overflow-hidden border-2 border-yellow-400 flex flex-col"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={600}
              height={300}
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{proj.title}</h3>
                <p className="text-gray-200 text-sm">{proj.description}</p>
              </div>
              <div className="mt-4 flex gap-4">
                <Link
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors text-sm font-medium"
                >
                  Live <FaExternalLinkAlt />
                </Link>
                
                <Link
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400 bg-transparent border-2 border-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium"
                >
                  GitHub <FaGithub />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note with full-width photo */}
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-4">
            Beyond the Frontend: My Backend Journey
          </h3>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            After months of intensive backend development study, diving deep into server architecture, database design, API development, and cloud deployment strategies, I&apos;m now channeling all that knowledge into building my first comprehensive fullstack application. This journey has transformed me from a frontend-focused developer into a well-rounded engineer who understands the complete web development ecosystem, from user interfaces to server logic and everything in between.
          </p>
        </div>

        <div className="flex-1 w-full relative">
          <div className="bg-black rounded-2xl overflow-hidden border-2 border-yellow-400 flex flex-col h-full">
            <Image
              src="/project1.png"
              alt="Gabriel Okeke - Backend Journey"
              width={600}
              height={300}
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">Fullstack Journey Project</h4>
                <p className="text-gray-200 text-sm">My comprehensive fullstack application combining all the backend knowledge I&apos;ve gained with modern frontend technologies.</p>
              </div>
              <div className="mt-4 flex gap-4">
                <Link
                  href="https://example.com/fullstack-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors text-sm font-medium"
                >
                  Live <FaExternalLinkAlt />
                </Link>
                
                <Link
                  href="https://github.com/yourusername/fullstack-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400 bg-transparent border-2 border-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium"
                >
                  GitHub <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}