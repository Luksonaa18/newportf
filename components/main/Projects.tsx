"use client";

import ProjectCard from "../sub/ProjectCard";

import phone1 from "@/public/Screenshot 2025-11-18 185501-portrait.png";
import laptop1 from "@/public/Screenshot 2025-11-18 185539-front.png";

import phone2 from "@/public/phone.png";
import phone3 from "@/public/phone1.png";
import laptop2 from "@/public/laptop.png";
import laptop3 from "@/public/laptop1.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full mb-20 relative z-100 w-full flex flex-col md:flex-row gap-10 px-10"
    >
      {/* PROJECT 1 */}
      <ProjectCard
        href="https://bobsnail.vercel.app/"
        title="Halloween Full-Stack Project"
        description="This project is enhanced with modern design which is still in process of deployment"
        images={[
          {
            src: phone1,
            mobile: { width: 100, height: 10 },
            desktop: { width: 100, height: 260 },
          },
          {
            src: laptop1,
            mobile: { width: 100, height: 10 },
            desktop: { width: 330, height: 260 },
          },
        ]}
      />
      <ProjectCard
        href="https://twitter-kappa-jade.vercel.app/"
        title="Twitter Clone"
        description="Cloned twitter before knowing any backend :) using firebase authentication"
        images={[
          {
            src: phone3,
            mobile: { width: 100, height: 10 },
            desktop: { width: 130, height: 260 },
          },
          {
            src: laptop3,
            mobile: { width: 180, height: 10 },
            desktop: { width: 330, height: 260 },
          },
        ]}
      />

      {/* PROJECT 2 */}
      <ProjectCard
        href="https://bags-prop.vercel.app/"
        title="Bags Website"
        description="Coming soon"
        images={[

          {
            src: laptop2,
            mobile: { width: 100, height: 10 },
            desktop: { width: 330, height: 260 },
          },
        ]}
      />
    </div>
  );
};

export default Projects;
