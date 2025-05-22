"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavBarWrapper = () => {
  const pathname = usePathname();

  return (
    <NavBar
      key={pathname}
      pathname={pathname}
    />
  );
};

export default NavBarWrapper;
