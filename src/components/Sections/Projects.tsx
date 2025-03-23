import { TProject } from "@/types";
import React from "react";
import ProjectCard from "../modules/project/ProjectCard";

const Projects = ({ projects }: { projects: TProject[] }) => {
  if (!projects || projects.length < 0) return null;
  return (
    <section id="projects" className="pt-20 text-white mb-20">
      <h1 className="text-center text-4xl mb-4">Projects</h1>
      <div className="h-0.5 border-b border-[#292524] my-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 justify-center">
        {projects?.map((item) => (
          <ProjectCard key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
