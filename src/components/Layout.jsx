import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row h-[700px] w-[1500px]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
