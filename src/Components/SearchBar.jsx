import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiSettings, FiBell } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-end gap-8 w-full">
      <div className="w-72">
        <div id="search-bar" className="relative w-full">
          <input
            id="search-input"
            className="border border-gray-300 p-3 pl-10 bg-white w-80 rounded-full outline-none text-sm text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Type here..."
          />
          <FaSearch
            id="search-icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-4 py-2 text-gray-500 rounded-lg flex items-center space-x-2"
          onClick={() =>
            window.open("https://react-project-gooy.vercel.app/", "_blank")
          }
        >
          <div className="flex items-center gap-2 text-gray-500">
            <FaUserAlt className="text-2xl" />
            <span>Sign In</span>
          </div>
        </button>
      </div>
    </div>
  );
}
