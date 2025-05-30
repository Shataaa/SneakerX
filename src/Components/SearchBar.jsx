import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <div id="search-bar" className="relative w-full">
            <input
                id="search-input"
                className="border border-gray-300 p-3 pl-10 bg-white w-full rounded-full outline-none text-sm text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Type here..."
            />
            <FaSearch id="search-icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
    );
}