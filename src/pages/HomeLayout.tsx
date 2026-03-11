import React from "react";
import { Outlet } from "react-router";

const HomeLayout: React.FC = () => {
  return (
    <nav>
      <span className="text-4xl text-primary">Comfy</span>
      <Outlet />
    </nav>
  );
};

export default HomeLayout;
