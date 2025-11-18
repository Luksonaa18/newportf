"use client";
import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="w-full bg-[#0F011F] text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Community Section */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl font-bold mb-4">Community</h2>
          <a
            href="#"
            className="flex items-center gap-2 my-2 hover:text-purple-400 transition-colors"
          >
            <RxGithubLogo size={20} /> Github
          </a>
          <a
            href="#"
            className="flex items-center gap-2 my-2 hover:text-purple-400 transition-colors"
          >
            <RxDiscordLogo size={20} /> Discord
          </a>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <a
            href="#"
            className="flex items-center gap-2 my-2 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 my-2 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={20} /> Linkedin
          </a>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl font-bold mb-4">About</h2>
          <a
            href="#"
            className="my-2 hover:text-purple-400 transition-colors"
          >
            Become a Sponsor
          </a>
          <a
            href="#"
            className="my-2 hover:text-purple-400 transition-colors"
          >
            Learn About Me
          </a>
          <a
            href="mailto:lukazhozhadze53@gmail.com"
            className="my-2 hover:text-purple-400 transition-colors"
          >
            lukazhozhadze53@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center text-gray-400 text-sm"
      >
        &copy; {new Date().getFullYear()} Luka Zhozhadze. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Footer;
