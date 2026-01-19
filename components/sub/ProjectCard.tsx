/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImgProps {
  phone: any;
  laptop: any;
}

interface Props {
  title: string;
  description: string;
  href: string;
  images: ImgProps;
}

const ProjectCard = ({ title, description, images, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open project ${title}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-2xl"
    >
      <motion.article
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 160, damping: 15 }}
        className="
          relative overflow-hidden
          rounded-2xl
          border border-purple-800/40
          bg-gradient-to-b from-[#17002b] to-[#0b0016]
          p-6
          shadow-xl
        "
      >
        {/* IMAGE */}
        <div className="relative w-full h-[220px] md:h-[260px]">
          {/* MOBILE IMAGE */}
          <Image
            src={images.phone}
            alt={`${title} mobile preview`}
            fill
            sizes="(max-width: 768px) 100vw, 0"
            className="
              object-contain
              rounded-xl
              md:hidden
            "
            priority
          />

          {/* DESKTOP IMAGE */}
          <Image
            src={images.laptop}
            alt={`${title} desktop preview`}
            fill
            sizes="(min-width: 768px) 400px"
            className="
              object-contain
              rounded-xl
              hidden md:block
            "
          />
        </div>

        {/* TEXT */}
        <div className="mt-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {title}
          </h2>
          <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Hover glow */}
        <div className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0 hover:opacity-100
          transition-opacity
          bg-gradient-to-tr from-purple-600/10 via-transparent to-indigo-600/10
        " />
      </motion.article>
    </a>
  );
};

export default ProjectCard;
