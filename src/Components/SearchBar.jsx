import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiSettings, FiBell } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="font-arimo flex items-center justify-end gap-8 w-full">
      <div className="font-arimo w-72">
        <div id="search-bar" className="font-arimo relative w-full">
          <input
            id="search-input"
            className="font-arimo border border-gray-300 p-3 pl-10 bg-white w-80 rounded-full outline-none text-sm text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Type here..."
          />
          <FaSearch
            id="search-icon"
            className="font-arimo absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="font-arimo flex items-center gap-2">
        <button
          className="font-arimo px-4 py-2 text-gray-500 rounded-lg flex items-center space-x-2"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          <FaUserAlt className="font-arimo text-2xl" />
          <span className="font-arimo">Sign In</span>
        </button>

        <ul
          className="font-arimo dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a
              className="font-arimo"
              onClick={() =>
                window.open("https://sneaker-x-mocha.vercel.app/", "_blank")
              }
            >
              Admin
            </a>
          </li>
          <li>
            <a
              className="font-arimo"
              onClick={() =>
                window.open("https://react-project-gooy.vercel.app/", "_blank")
              }
            >
              Guest
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
