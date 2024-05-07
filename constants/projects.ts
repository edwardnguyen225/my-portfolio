import { Project } from "@/types";

const mattermost: Project = {
  title: "Mattemost",
  slug: "mattermost",
  description: "A messaging app for teams",
  image: "/projects/mattermost.png",
  tags: ["Open Source", "react", "redux", "typescript"],
  sourceLink: "https://github.com/mattermost/mattermost",
  demoLink: "https://community.mattermost.com/",
  startDate: "2023-10",
  technologies: ["react", "redux", "typescript"],
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
  technologies: ["svelte", "typescript", "tailwindcss"],
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
  technologies: ["next", "zustand", "typescript", "tailwindcss"],
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
  technologies: ["next", "typescript", "tailwindcss"],
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
  technologies: ["vue", "CSS"],
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
  technologies: ["OutSystems"],
};

export const projects = {
  mattermost,
  rockPaperScissors,
  kanbanTaskManager,
  planetsFactSite,
  blogrLandingPage,
};

export const sortedProjectsList = [
  vietnamQuiz,
  mattermost,
  kanbanTaskManager,
  rockPaperScissors,
  blogrLandingPage,
  planetsFactSite,
];
