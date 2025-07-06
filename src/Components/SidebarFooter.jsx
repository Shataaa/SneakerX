import { GiHelp } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";
import React from "react";

export default function SidebarFooter() {
  return (
    <div id="sidebar-footer" className="font-arimo mt-auto">
      <div
        id="footer-card"
        className="font-arimo bg-[#4CD7CE] relative px-4 py-5 rounded-xl shadow-lg mb-8 flex flex-col items-start"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #5eead4 60%, #4CD7CE 100%)",
        }}
      >
        <div className="font-arimo absolute top-4 left-4 bg-white  rounded-full p-2">
          <GiHelp className="font-arimo text-teal-300 text-xl" />
        </div>
        <div className="font-arimo mt-8 mb-2 ml-1">
          <span className="font-arimo text-white font-bold text-base block mb-1">
            Need help?
          </span>
          <span className="font-arimo text-white text-sm">
            Please check our docs
          </span>
        </div>
        <button className="font-arimo w-full mt-4 bg-white text-[#2d3748] font-bold py-2 rounded-lg shadow text-center transition hover:bg-gray-100">
          DOCUMENTATION
        </button>
      </div>
    </div>
  );
}
