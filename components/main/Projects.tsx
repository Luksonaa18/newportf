"use client"
import ProjectCard from "../sub/ProjectCard";
import phone1 from "@/public/Screenshot 2025-11-18 185501-portrait.png"
import laptop1 from "@/public/Screenshot 2025-11-18 185539-front.png"
import phone2 from "@/public/phone.png"
import laptop2 from "@/public/laptop.png"

const Projects = () => {
  return (
 <div id="projects" className="h-full mb-20 relative z-100 w-full flex flex-col md:flex-row gap-10 px-10">
    <ProjectCard
    href="https://bobsnail.vercel.app/"
      images={[
        { src: phone1, breakpoint: "block md:hidden" },
        { src: laptop1, breakpoint: "hidden md:block" },
      ]}
      title="Halloween Full-Stack Project"
      description="This project is enhanced with modern design which is still in process of deployment"
    />
    <ProjectCard
    href="https://bags-prop.vercel.app/"
      images={[
        { src: phone2, breakpoint: "block md:hidden" },
        { src: laptop2, breakpoint: "hidden md:block" },
      ]}
      title="Bags Website"
      description="Coming soon"
    />
</div>

  );
};

export default Projects;
