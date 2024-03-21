import React from "react";
import ProjectCard from "./ProjectCard";

const getProjectHref = (slug: string) => {
  return "/projects/" + slug;
};

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col flex-wrap justify-center md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href={getProjectHref("next-website")}
          sourceLink="https://github.com"
          demoLink="https://google.com"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href={getProjectHref("interactive-cards")}
          sourceLink="https://github.com"
          demoLink="https://google.com"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href={getProjectHref("space-website")}
          sourceLink="https://github.com"
          demoLink="https://google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
