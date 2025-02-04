import { projects } from "./projects";

export const navigation = [
    {
      id: "about",
      title: "About",
      url: "/about",
    },
    {
      id: "projects",
      title: "Projects",
      url: "/projects",
      sup: projects.length,
    },
    {
      id: "contact",
      title: "Contact",
      url: "/contact",
    },
  ];