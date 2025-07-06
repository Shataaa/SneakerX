import React from "react";

export default function SidebarLogo() {
  return (
    <div id="sidebar-logo" className="font-arimo flex flex-col">
      <img src="/img/SneakersX.png" />
      <span
        id="logo-subtitle"
        className="font-arimo font-semibold text-gray-400 ml-8"
      >
        SneakersX Admin Dashboard
      </span>
    </div>
  );
}
