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
};

const kanbanTaskManager: Project = {
  title: "Kanban Task Manager",
  slug: "kanban-task-manager",
  description:
    "A fully-functional task management app with a light/dark mode toggle",
  image: "/projects/kanban-task-manager.png",
  tags: ["next", "zustand", "typescript", "tailwindcss"],
  sourceLink:
    "https://github.com/edwardnguyen225/frontend-mentor-challenges/tree/main/kanban-task-manager-master",
  demoLink: "https://kanban-task-manager.trinhan.xyz/",
  startDate: "2024-01",
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
};

export const projects = {
  mattermost,
  rockPaperScissors,
  kanbanTaskManager,
  planetsFactSite,
};

export const sortedProjectsList = [
  mattermost,
  kanbanTaskManager,
  rockPaperScissors,
  planetsFactSite,
];
