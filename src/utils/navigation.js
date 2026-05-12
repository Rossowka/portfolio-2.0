import { PROJECTS } from "./projects";

export const navigation = [
  {
    id: "about",
    title: "about",
    url: "/about",
  },
  {
    id: "projects",
    title: "projects",
    url: "/projects",
    sup: PROJECTS.length,
  },
  {
    id: "playground",
    title: "playground",
    url: "/playground",
  },
];
