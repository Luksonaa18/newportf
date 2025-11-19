"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="
        flex flex-col md:flex-row 
        items-center justify-center 
        px-6 md:px-20 
        mt-24 md:mt-40 
        sm:mt-10
        w-full z-20 gap-10
      "
    >
      {/* LEFT SIDE */}
      <div className="w-full  flex flex-col gap-5 text-start">
        
        {/* Small Tag */}
        <motion.div
          variants={slideInFromTop}
          className="
            Welcome-box 
            py-2 px-[7px] 
            border border-[#7042f88b] 
            opacity-[0.9] 
            flex items-center w-fit
          "
        >
          <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
          <h1 className="Welcome-text text-[12px] md:text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="
            flex flex-col gap-4 
            mt-4 md:mt-6 
            text-4xl md:text-6xl 
            font-bold text-white 
            max-w-[600px]
          "
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="
            text-gray-400 
            text-base md:text-lg 
            my-4 md:my-5 
            max-w-[600px]
          "
        >
          I&apos;m a Full Stack Software Engineer with experience in modern web development. 
          Check out my projects and skills.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="
            py-2 px-4 
            button-primary 
            text-center text-white 
            cursor-pointer rounded-lg 
            max-w-[200px]
            text-sm md:text-base
          "
        >
          Learn More!
        </motion.a>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400}
          width={400}
          className="md:h-[650px] md:w-[650px] h-[320px] w-[320px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
