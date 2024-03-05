
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbarr className="top-2" />
  
    </div>
  );
}

function Navbarr({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link>
         <MenuItem setActive={setActive} active={active} item="Team up"></MenuItem>
        </Link>
        <Link to='/profile'>
        <MenuItem setActive={setActive} active={active} item="Profile"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

