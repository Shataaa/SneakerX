import React from "react";
import { FaBell } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";

export default function Icons() {
    return (
        <div id="icons-container" className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div id="notification-icon" className="relative p-3 bg-grey-100 rounded-2xl text-grey-500 cursor-pointer">
                <FaBell />
                <span
                    id="notification-badge"
                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-teal-200 rounded-full px-2 py-1 text-xs"
                >
                    125
                </span>
            </div>

            {/* Settings Icon */}
            <div id="settings-icon" className="p-3 bg-grey-100 rounded-2xl text-grey-500 cursor-pointer">
                <SlSettings />
            </div>
        </div>
    );
}