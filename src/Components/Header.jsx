import React from "react";
import SearchBar from "./SearchBar";
import Icons from "./Icons";

export default function Header() {
    return (
        <div id="header-container" className="flex justify-end items-center p-4 space-x-4">
            {/* Search Bar */}
            <SearchBar />
            {/* Icon */}
            <Icons />
        </div>
    );
}
