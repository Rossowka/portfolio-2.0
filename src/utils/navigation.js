import { PROJECTS } from "./projects";

export const navigation = [
  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "projects",
    title: "Work",
    url: "/projects",
    sup: PROJECTS.length,
  },
  {
    id: "playground",
    title: "Play",
    url: "/playground",
  },
];
