"use client";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
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
    <footer className="w-full relative z-12121212 bg-[#0F011F] text-gray-200 py-12 px-6">
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

          <Link
            href="https://github.com/Luksonaa18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 my-2 hover:text-purple-400 transition-colors cursor-pointer"
          >
            <RxGithubLogo size={20} /> Github
          </Link>
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

          <Link
            href="#"
            className="flex items-center gap-2 my-2 hover:text-pink-500 transition-colors cursor-pointer"
          >
            <FaInstagram size={20} /> Instagram
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 my-2 hover:text-blue-500 transition-colors cursor-pointer"
          >
            <FaLinkedin size={20} /> Linkedin
          </Link>
        </motion.div>

        {/* About */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl font-bold mb-4">About</h2>

          <Link href="#" className="my-2 hover:text-purple-400 transition-colors cursor-pointer">
            Become a Sponsor
          </Link>

          <Link href="#" className="my-2 hover:text-purple-400 transition-colors cursor-pointer">
            Learn About Me
          </Link>

          <Link
            href="mailto:lukazhozhadze53@gmail.com"
            className="my-2 hover:text-purple-400 transition-colors cursor-pointer"
          >
            lukazhozhadze53@gmail.com
          </Link>
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
    </footer>
  );
};

export default Footer;
