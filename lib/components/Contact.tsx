// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Footer() {
  const footerLinks = {
    About: ["Home", "About", "Skills", "Projects"],
    Services: ["Web Development", "UI/UX Design", "Transcription"],
    Legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className={cn(
          "absolute inset-0 opacity-20",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)]"
        )}
      />

      <motion.div
        className="relative z-20 max-w-6xl "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
             <div className="flex flex-col items-center">
        <TextGenerateEffect
          words="Ready to take 'your' digital presence to the next level?"
          className="text-center text-3xl font-bold leading-tight md:text-5xl lg:text-6xl text-blue-100"
        />
        <p className="md:mt-5 font-bold text-yellow-400 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:project.gabby84@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      

      </motion.div>

      {/* Bottom Text */}
      <div className="flex mt-16 md:flex-row font-bold flex-col justify-between text-yellow-400 items-center">
        <p>&copy; {new Date().getFullYear()} Gabriel Okeke. All rights reserved.</p>

        <div className="flex items-centerjustify-center md:gap-3 gap-8">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[25px]"/>
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[25px]"/>
            </a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[25px]"/>
            </a>
        </div>
      </div>
    </footer>
  );
}


      // <motion.div
      //   className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
      //   initial={{ opacity: 0, y: 40 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true, amount: 0.3 }}
      //   transition={{ duration: 0.8, ease: "easeOut" }}
      // >
      //   {/* Intro / About */}
      //   <div>
      //     <h3 className="text-xl font-bold text-yellow-400 mb-4">Hi, I'm Gabriel</h3>
      //     <p className="text-gray-300 text-sm md:text-base">
      //       A passionate Next.js developer & frontend enthusiast. I create responsive, interactive, and modern web apps. Let's connect and build amazing things together!
      //     </p>
      //   </div>

      //   {/* Footer Links */}
      //   {Object.entries(footerLinks).map(([section, links], idx) => (
      //     <div key={idx}>
      //       <h4 className="text-yellow-400 font-semibold mb-4">{section}</h4>
      //       <ul className="space-y-2">
      //         {links.map((link, i) => (
      //           <li key={i}>
      //             <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
      //               {link}
      //             </a>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //   ))}

      //   {/* Contact / Socials */}
      //   <div>
      //     <h4 className="text-yellow-400 font-semibold mb-4">Get in Touch</h4>
      //     <p className="text-gray-300 mb-4 text-sm">Email me at:</p>
      //     <a
      //       href="mailto:gabriel@example.com"
      //       className="flex items-center gap-2 text-yellow-400 font-medium hover:text-white transition-colors text-sm"
      //     >
      //       <FaEnvelope /> gabriel@example.com
      //     </a>
      //     <div className="flex gap-4 mt-6 text-yellow-400 text-xl">
      //       <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
      //         <FaGithub />
      //       </a>
      //       <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
      //         <FaLinkedin />
      //       </a>
      //       <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
      //         <FaTwitter />
      //       </a>
