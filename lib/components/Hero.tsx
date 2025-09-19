"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className={cn(
          "absolute inset-0 opacity-30", // subtle grid
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Tagline */}
        <TextGenerateEffect
          words="Hi! I'm Gabriel, A Next.js Developer & Frontend Enthusiast"
          className="text-center text-3xl font-bold leading-tight md:text-5xl lg:text-6xl text-blue-100"
        />

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4">
          Transforming Ideas into Seamless Web Experiences
        </h2>

        {/* Short Intro */}
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Specializing in responsive, interactive, and modern web apps using Next.js, React, and Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
