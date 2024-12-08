import {
  LibrarySquare,
  Home,
  LayoutDashboard,
  CopyPlus,
  CircleHelp,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-main h-screen w-20 flex flex-col items-center py-7 sticky top-0">
      <LibrarySquare className="text-white" size={35} />
      <main className="flex flex-col justify-center items-center gap-5 w-full h-full">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Home className="text-white cursor-pointer" strokeWidth={1} />
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <LayoutDashboard
            className="text-white cursor-pointer"
            strokeWidth={1}
          />
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <CopyPlus className="text-white cursor-pointer" strokeWidth={1} />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <CircleHelp className="text-white cursor-pointer" strokeWidth={1} />
        </NavLink>
      </main>
      <LogOut className="text-white cursor-pointer" size={20} />
    </nav>
  );
};

export default Navbar;
