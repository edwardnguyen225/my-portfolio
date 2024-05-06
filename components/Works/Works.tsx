import React from "react";
import { workExperiences } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20 pb-80"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experiences
      </h1>
      <div className="h-full w-full flex flex-col flex-wrap justify-center items-center gap-10 px-10">
        {workExperiences.map((exp) => (
          <div className="border-l-2 pl-4 border-neutral-200 relative">
            <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
            <a className="text-primary text-violet-400" href={exp?.link ?? ""}>
              {exp.company}
            </a>
            <p className="text-sm text-gray-400">
              {exp.start} - {exp.end}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
