import React from "react";

export default function Profile() {
    return (
        <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-[#4CD7CE]">
            <span id="profile-text">
                Hello, <b> Muhammad Rafie Shata </b>
            </span>
            <img
                id="profile-avatar"
                src="https://avatar.iran.liara.run/public/28"
                className="w-10 h-10 rounded-full"
                alt="Profile Avatar"
            />
        </div>
    );
}