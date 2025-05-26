"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavBarWrapper = () => {
  const pathname = usePathname();

    const textColorClass =
    pathname === "/projects" ? "text-f-inverse" : "text-f-primary";
  const bgColorClass =
    pathname === "/projects" ? "bg-s-inverse" : "bg-s-primary";
  const underlineColorClass =
    pathname === "/projects" ? "bg-s-primary" : "bg-s-inverse";

  return (
    <NavBar
      key={pathname}
      pathname={pathname}
      textColorClass={textColorClass}
      bgColorClass={bgColorClass}
      underlineColorClass={underlineColorClass}
    />
  );
};

export default NavBarWrapper;
