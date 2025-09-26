"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "A responsive web app built with Next.js and Tailwind CSS.",
    image: "/pic1.png", 
    live: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "Interactive UI/UX design project with React and Framer Motion.",
    image: "/pic2.png",
    live: "https://example.com/project2",
  },
  {
    title: "Project Three",
    description: "A modern dashboard using Next.js, React, and Tailwind CSS.",
    image: "/pic3.png",
    live: "https://example.com/project3",
  },
  {
    title: "Project Four",
    description: "A creative personal portfolio showcasing frontend projects.",
    image: "/pic4.png",
    live: "https://example.com/project4",
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

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note with full-width photo */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <p className="text-yellow-400 text-lg md:text-xl text-center max-w-3xl">
         After a grueling backend study, I&apos;m currently working on my first fullstack app.
        </p>

        <div className="w-full h-[400px] md:h-[500px] relative">
          <Image
            src="/project1.png"
            alt="Gabriel Okeke"
            width={1200}
            height={500}
            className="w-full h-full object-cover rounded-lg border-2 border-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}