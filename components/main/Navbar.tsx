"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
  useEffect(()=>{
    if (open) {
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }
    return() =>{
      document.body.style.overflow = "auto"
    }
  },[open])

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-250 px-6 md:px-10">

      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <span className="font-bold ml-2 text-gray-300 md:block">
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full px-5 py-2.5  text-white">
            <a href="#about-me" className="cursor-pointer font-bold hover:opacity-70 transition">About me</a>
            <a href="#skills" className="cursor-pointer font-bold hover:opacity-70 transition">Skills</a>
            <a href="#projects" className="cursor-pointer font-bold hover:opacity-70 transition">Projects</a>
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden cursor-pointer md:flex flex-row gap-5">
          {Socials.map((social) => (
        <Link href={social.href} key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
        </Link>
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
{/* Mobile Menu */}
<AnimatePresence>
  {open && (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="
        md:hidden 
        absolute top-0 right-0 
        w-full h-screen 
        p-6 pt-10 
        flex flex-col items-center gap-8
        bg-black
 
        border-b border-white/10
        rounded-b-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        text-gray-200
        z-1212121212121212
      "
    >
      {/* CLOSE BUTTON */}
      <div className="w-full flex justify-end pr-2">
        <IoClose
          onClick={() => setOpen(false)}
          className="text-4xl text-gray-300 hover:text-white transition"
        />
      </div>

      {/* Menu Items */}
      {["about-me", "skills", "projects"].map((link) => (
        <motion.a
          key={link}
          variants={itemVariants}
          href={`#${link}`}
          onClick={() => setOpen(false)}
          className="
            cursor-pointer 
            text-3xl 
            font-semibold
            tracking-wide
            hover:scale-110 
            transition-transform
            text-white
          "
        >
          {link.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </motion.a>
      ))}

      {/* Social Icons */}
      <motion.div variants={itemVariants} className="flex gap-6 mt-4">
        {Socials.map((social) => (
          <Image
            src={social.src}
            alt={social.name}
            key={social.name}
            width={26}
            height={26}
            className="opacity-90 hover:opacity-100 transition"
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
