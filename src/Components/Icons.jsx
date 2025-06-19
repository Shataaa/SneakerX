import { BsFillGearFill } from "react-icons/bs"; 
import { AiFillBell } from "react-icons/ai"; 
import React from "react";

export default function Icons() {
    return (
        <div id="icons-container" className="flex items-center space-x-4">
            {/* Settings Icon */}
            <div id="settings-icon" className="p-3 text-2xl text-gray-500 rounded-2xl cursor-pointer">
                <BsFillGearFill />
            </div>
            {/* Notification Icon */}
            <div id="notification-icon" className="p-3 text-2xl text-gray-500 rounded-2xl cursor-pointer">
                <AiFillBell />
            </div>
        </div>
    );
}