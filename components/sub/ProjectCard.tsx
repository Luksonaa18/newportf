"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ResponsiveSize {
  width: number;
  height: number;
}

interface ImgProps {
  src: any;
  mobile: ResponsiveSize;
  desktop: ResponsiveSize;
  className?: string;
}

interface Props {
  title: string;
  description: string;
  href: string;
  images: ImgProps[];
}

const ProjectCard = ({ title, description, images, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="relative overflow-hidden rounded-2xl shadow-xl border border-[#33146e] bg-gradient-to-b from-[#17002b] to-[#0b0016] p-6 cursor-pointer"
      >
        {/* IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="
            flex flex-col md:flex-row
            items-center justify-center 
            gap-4 md:gap-6
          "
        >
          {images.map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* MOBILE VIEW */}
              <div className="block md:hidden">
                <Image
                  src={img.src}
                  alt={title}
                  width={img.mobile.width}
                  height={img.mobile.height}
                  className={`
                    rounded-xl shadow-lg 
                    object-contain 
                    ${img.className || ""}
                  `}
                />
              </div>

              {/* DESKTOP VIEW */}
              <div className="hidden md:block">
                <Image
                  src={img.src}
                  alt={title}
                  width={img.desktop.width}
                  height={img.desktop.height}
                  className={`
                    rounded-xl shadow-xl 
                    object-contain
                    ${img.className || ""}
                  `}
                />
              </div>

            </div>
          ))}
        </motion.div>

        {/* TEXT */}
        <div className="mt-6 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            {title}
          </h1>
          <p className="mt-2 text-gray-300 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
