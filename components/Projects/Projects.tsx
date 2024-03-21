import React from "react";
import ProjectCard from "./ProjectCard";
import { sortedProjectsList } from "@/constants";

const getProjectHref = (slug: string) => {
  return "/projects/" + slug;
};

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20 pb-80"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col flex-wrap justify-center md:flex-row gap-10 px-10">
        {sortedProjectsList.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            href={getProjectHref(project.slug)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
