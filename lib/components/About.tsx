"use client";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaFile } from "react-icons/fa6";

const services = [
  {
    icon: <FaCode className="text-yellow-400 text-4xl mb-4" />,
    title: "Web Development",
    description:
      "Building responsive, modern, and interactive web apps using Next.js, React, and Tailwind CSS.",
  },
  {
    icon: <FaPalette className="text-yellow-400 text-4xl mb-4" />,
    title: "UI/UX Design",
    description:
      "Creating visually appealing and intuitive user interfaces for seamless experiences.",
  },
  {
    icon: <FaFile className="text-yellow-400 text-4xl mb-4" />,
    title: "Transcription & Subtitling",
    description:
      "Adding captions, subtitles, and transcriptions to video content with clarity and precision.",
  },
];

const AboutPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      {/* About Write-up */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
          About Me
        </h2>
        <p className="text-white text-lg md:text-xl">
          Passionate about building seamless web experiences that combine clean
          code with intuitive design. I specialize in frontend development,
          UI/UX design, and video transcription & subtitling to deliver polished
          digital solutions.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(({ icon, title, description }, i) => (
          <motion.div
            key={i}
            className="bg-black p-6 rounded-xl flex flex-col items-center text-center border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            {icon}
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>
            <p className="text-white">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
