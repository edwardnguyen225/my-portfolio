import { Project } from "@/types";

const technologies = {
  react: {
    name: "React",
    icon: "/icons/react.svg",
  },
  next: {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  vue: {
    name: "Vue",
    icon: "/icons/vue.svg",
  },
  svelte: {
    name: "Svelte",
    icon: "/icons/svelte.svg",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  typescript: {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  redux: {
    name: "Redux",
    icon: "/icons/redux.svg",
  },
  zustand: {
    name: "Zustand",
    icon: "/icons/zustand.svg",
  },
  prisma: {
    name: "Prisma",
    icon: "/icons/prisma.svg",
  },
  marked: {
    name: "Marked",
    icon: "/icons/marked.svg",
  },
  OutSystems: {
    name: "OutSystems",
    icon: "/icons/outsystems.svg",
  },
  nest: {
    name: "NestJS",
    icon: "/icons/nestjs.svg",
  },
};
type Tech = keyof typeof technologies;

const getTechnologies = (techs: Tech[]) => {
  const techList: string[] = [];
  techs.forEach((tech) => {
    techList.push(technologies[tech].name);
  });
  return techList;
};

const kanbanTaskManagerV2: Project = {
  title: "Kanban Task Manager V2",
  slug: "kanban-task-manager-v2",
  description:
    "My first full-stack project. A fully-functional task management app with NestJS backend and NextJS frontend",
  image: "/projects/kanban-task-manager-v2.png",
  tags: ["next", "zustand", "typescript", "tailwindcss"],
  sourceLink: "https://github.com/edwardnguyen225/kanban-task-manager",
  demoLink: "https://kanban.trinhan.dev/",
  startDate: "2024-05",
  technologies: getTechnologies(["next", "tailwindcss", "nest", "prisma"]),
};

const markdownEditor: Project = {
  title: "Markdown Editor",
  slug: "markdown-editor",
  description: "A simple markdown editor",
  image: "/projects/markdown-editor.png",
  tags: ["react", "typescript", "tailwindcss"],
  sourceLink: "https://github.com/edwardnguyen225/markdown-editor-reactjs",
  demoLink: "https://markdown-editor-reactjs.trinhan.xyz/",
  startDate: "2024-05",
  technologies: getTechnologies([
    "react",
    "typescript",
    "tailwindcss",
    "marked",
  ]),
};

const mattermost: Project = {
  title: "Mattemost",
  slug: "mattermost",
  description: "A messaging app for teams",
  image: "/projects/mattermost.png",
  tags: ["Open Source", "react", "redux", "typescript"],
  sourceLink: "https://github.com/mattermost/mattermost",
  demoLink: "https://community.mattermost.com/",
  startDate: "2023-10",
  technologies: getTechnologies(["react", "redux", "typescript"]),
};

const rockPaperScissors: Project = {
  title: "Rock Paper Scissors",
  slug: "rock-paper-scissors",
  description:
    "A simple rock paper scissors game, include its advanced version",
  image: "/projects/rock-paper-scissors.png",
  tags: ["svelte", "typescript", "tailwindcss"],
  sourceLink:
    "https://github.com/edwardnguyen225/frontend-mentor-challenges/tree/main/rock-paper-scissors-master",
  demoLink: "https://rock-paper-scissors.trinhan.xyz",
  startDate: "2023-10",
  technologies: getTechnologies(["svelte", "typescript", "tailwindcss"]),
};

const kanbanTaskManager: Project = {
  title: "Kanban Task Manager",
  slug: "kanban-task-manager",
  description:
    "A fully-functional task management app with a light/dark mode toggle",
  image: "/projects/kanban-task-manager.png",
  tags: ["next", "zustand", "typescript", "tailwindcss"],
  sourceLink:
    "https://github.com/edwardnguyen225/frontend-mentor-challenges/tree/main/kanban-task-manager",
  demoLink: "https://kanban-task-manager.trinhan.xyz/",
  startDate: "2024-01",
  technologies: getTechnologies([
    "next",
    "zustand",
    "typescript",
    "tailwindcss",
  ]),
};

const planetsFactSite: Project = {
  title: "Planets Fact Site",
  slug: "planets-fact-site",
  description: "an 8-page fact site for all planets in our solar system",
  image: "/projects/planets-fact-site.png",
  tags: ["next", "typescript", "tailwindcss"],
  sourceLink:
    "https://github.com/edwardnguyen225/frontend-mentor-challenges/tree/main/planets-fact-site/",
  demoLink: "https://planets-fact-site.trinhan.xyz",
  startDate: "2023-12",
  technologies: getTechnologies(["next", "typescript", "tailwindcss"]),
};

const blogrLandingPage: Project = {
  title: "Blogr Landing Page",
  slug: "blogr-landing-page",
  description: "A landing page for a blogging platform. First time using Vue 3",
  image: "/projects/blogr-landing-page.png",
  tags: ["next", "typescript", "tailwindcss"],
  sourceLink: "https://github.com/edwardnguyen225/frontendmentor-blogr",
  demoLink: "https://blogr.trinhan.xyz/",
  startDate: "2024-04",
  technologies: getTechnologies(["vue", "typescript", "tailwindcss"]),
};

const vietnamQuiz: Project = {
  title: "Vietnam Quiz",
  slug: "vietnam-quiz",
  description: "A quiz about Vietnam. First time using OutSystems",
  image: "/projects/vietnam-quiz.png",
  tags: ["next", "typescript", "tailwindcss"],
  demoLink:
    "https://personal-fasvfiiv.outsystemscloud.com/VietnamQuizGame/VietnamQuiz",
  startDate: "2024-05",
  technologies: getTechnologies(["OutSystems"]),
};

export const projects = {
  mattermost,
  rockPaperScissors,
  kanbanTaskManager,
  planetsFactSite,
  blogrLandingPage,
  markdownEditor,
  kanbanTaskManagerV2,
};

export const sortedProjectsList = [
  kanbanTaskManagerV2,
  markdownEditor,
  vietnamQuiz,
  mattermost,
  kanbanTaskManager,
  rockPaperScissors,
  blogrLandingPage,
  planetsFactSite,
];
