"use client";

import ProjectCard from "../sub/ProjectCard";

import phone1 from "@/public/Screenshot 2025-11-18 185501-portrait.png";
import laptop1 from "@/public/Screenshot 2025-11-18 185539-front.png";
import phone2 from "@/public/findit.png";
import phone3 from "@/public/phone1.png";
import laptop2 from "@/public/finditpro.png";
import laptop3 from "@/public/laptop1.png";
import phone4 from "@/public/bags1.png";
import laptop4 from "@/public/bags.png";
import laptop5 from "@/public/nibb.png";
import laptop6 from "@/public/Screenshot 2026-04-06 at 21.47.02-front.png";
import phone5 from "@/public/nibb1.png";
import phone6 from "@/public/Screenshot 2026-04-06 at 21.47.57-portrait.png";

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 w-full px-6 md:px-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <ProjectCard
          href="https://bobsnail.vercel.app/"
          title="Halloween Full-Stack Project"
          description="Full-stack application featuring modern UI, authentication, and responsive layouts."
          images={{
            phone: phone1,
            laptop: laptop1,
          }}
        />

        <ProjectCard
          href="https://twitter-kappa-jade.vercel.app/"
          title="Twitter Clone"
          description="Pixel-perfect Twitter clone with Firebase authentication and responsive UI."
          images={{
            phone: phone3,
            laptop: laptop3,
          }}
        />

        <ProjectCard
          href="https://findit-livid.vercel.app/"
          title="Find It"
          description="Full-stack platform helping users find lost items using NestJS, Next.js, TypeScript and AWS for images. Featuring modern UI, authentication, and responsive layouts."
          images={{
            phone: phone2,
            laptop: laptop2,
          }}
        />
        <ProjectCard
          href="https://twitter-kappa-jade.vercel.app/"
          title="LuxBags"
          description="Full-stack platform for online bussiness which is in process of making"
          images={{
            phone: phone4,
            laptop: laptop4,
          }}
        />
        <ProjectCard
          href="https://twitter-kappa-jade.vercel.app/"
          title="Crevo"
          description="Full-stack platform 2 way marketing service for companies and content creators. role based controll over post and authorization.used gsap animation library for scroll triggers and tanstack query for fetching and mutations"
          images={{
            phone: phone5,
            laptop: laptop5,
          }}
        />
        <ProjectCard
          href="https://dopamine-rework.vercel.app/"
          title="Dopamine"
          description="Frontend project with three js for Dopamine energy drink"
          images={{
            phone: phone6,
            laptop: laptop6,
          }}
        />
      </div>
    </section>
  );
};

export default Projects;
