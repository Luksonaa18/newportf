"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-250 px-6 md:px-10">

      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <span className="font-bold ml-2 text-gray-300 hidden md:block">
            Luka Dev
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:opacity-70 transition">About me</a>
            <a href="#skills" className="cursor-pointer hover:opacity-70 transition">Skills</a>
            <a href="#projects" className="cursor-pointer hover:opacity-70 transition">Projects</a>
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden mt-4 bg-[#0300148a] backdrop-blur-md rounded-xl py-4 px-6 flex flex-col gap-4 text-gray-200 border border-[#7042f861]"
          >
            {["about-me", "skills", "projects"].map((link) => (
              <motion.a
                key={link}
                variants={itemVariants}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-lg hover:scale-105 transition-transform"
              >
                {link.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </motion.a>
            ))}

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-4"
            >
              {Socials.map((social) => (
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={22}
                  height={22}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
