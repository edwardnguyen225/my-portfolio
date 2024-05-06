"use client";

import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RxEyeOpen, RxGithubLogo } from "react-icons/rx";
import TechBadge from "./TechBadge";

interface Props {
  project: Project;
  href: string;
}

const ProjectLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex gap-2 justify-center items-center px-2 py-1 bg-violet-900 text-white rounded-lg hover:bg-violet-700"
    >
      {children}
    </Link>
  );
};

const ProjectCard = ({ project, href }: Props) => {
  return (
    <div className="min-w-[300px] max-w-[420px] grow-0 shrink-0 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61] flex flex-col">
      <Image
        src={project.image}
        alt={project.title}
        width={420}
        height={254}
        className="w-full object-cover h-[254px]"
      />

      <div className="relative p-4 flex flex-col flex-1 gap-2">
        <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
        <div className="flex gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <p className="text-gray-300 line-clamp-3">{project.description}</p>
        <div>
          <Link
            href={href}
            className="text-violet-500 hover:text-violet-300 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="p-4 pt-0 flex items-center justify-start gap-4">
        {project.demoLink && (
          <ProjectLink href={project.demoLink}>
            <RxEyeOpen />
            Preview Site
          </ProjectLink>
        )}
        {project.sourceLink && (
          <ProjectLink href={project.sourceLink}>
            <RxGithubLogo />
            Source Code
          </ProjectLink>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
