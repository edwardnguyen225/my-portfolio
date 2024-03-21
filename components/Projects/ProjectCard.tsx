"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RxEyeOpen, RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
  sourceLink?: string;
  demoLink?: string;
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

const ProjectCard = ({
  src,
  title,
  description,
  href,
  sourceLink,
  demoLink,
}: Props) => {
  return (
    <div className="min-w-[300px] max-w-[420px] grow-0 shrink-0 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-gray-300">{description}</p>
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
        {sourceLink && (
          <ProjectLink href={sourceLink}>
            <RxGithubLogo />
            Source Code
          </ProjectLink>
        )}
        {demoLink && (
          <ProjectLink href={demoLink}>
            <RxEyeOpen />
            Demo
          </ProjectLink>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
