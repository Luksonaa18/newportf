"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  href: string; // external link
  images: { src: any; className?: string; breakpoint: string }[];
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
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#0F011F] cursor-pointer pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center p-4"
        >
          {images.map((img, index) => (
            <div key={index} className={img.breakpoint}>
              <Image
                src={img.src}
                alt={title}
                width={300}
                height={300}
                className={`rounded-lg shadow-md object-contain ${img.className || ""}`}
              />
            </div>
          ))}
        </motion.div>

        <div className="p-4">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
