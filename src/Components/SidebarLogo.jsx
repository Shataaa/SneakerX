import React from "react";

export default function SidebarLogo() {
    return (
        <div id="sidebar-logo" className="flex flex-col">
            <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
                SneakersX
                {/* <b id="logo-dot" className="text-biru">.</b> */}
            </span>
            <span id="logo-subtitle" className="font-semibold text-gray-400">
                SneakersX Admin Dashboard
            </span>
        </div>
    );
}