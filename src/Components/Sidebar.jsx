import React from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import SidebarLogo from "./SidebarLogo";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-gray-100 p-10 "
    >
      {/* Logo */}
      <SidebarLogo />

      {/* List Menu */}
      <SidebarMenu />
      <br />
      {/* Footer */}
      <SidebarFooter />
    </div>
  );
}
