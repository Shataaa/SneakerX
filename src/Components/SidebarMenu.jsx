import { MdContacts } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { FaQuestionCircle } from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import { GiNewspaper } from "react-icons/gi";
import { GiFootTrip } from "react-icons/gi";
import { GiWantedReward } from "react-icons/gi";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import {
  BiMessageError,
  BiError,
  BiErrorAlt,
  BiBarChart,
} from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "../assets/sidebar.css";

const iconColor = "#5eead4";

export default function SidebarMenu() {
  const menus = [
    { to: "/", icon: <FaHome />, label: "Dashboard" },
    { to: "/Karyawan", icon: <BsPeopleFill />, label: "List Karyawan" },
    { to: "/Customer", icon: <MdRateReview />, label: "Customer Review" },
    { to: "/Booking", icon: <FaClipboardList />, label: "Booking List" },
    {
      to: "/CompanyProfileList",
      icon: <BsFillBuildingFill />,
      label: "Company Profile",
    },
    { to: "/LowonganKerja", icon: <GiWantedReward />, label: "Lowongan Kerja" },
    { to: "/ManajemenProduk", icon: <GiFootTrip />, label: "Manajemen Produk" },
    { to: "/ArtikelNews", icon: <GiNewspaper />, label: "Artikel Berita" },
    { to: "/FAQ", icon: <FaQuestionCircle />, label: "FAQ" },
    { to: "/Galeri", icon: <GrGallery />, label: "Galeri" },
    { to: "/UserRole", icon: <BiUserCircle />, label: "User Role" },
    { to: "/Kontak", icon: <MdContacts />, label: "Kontak" },
    { to: "*", icon: <BiErrorAlt />, label: "Error 404" },
    { to: "/400", icon: <BiError />, label: "Error 400" },
    { to: "/401", icon: <MdOutlineErrorOutline />, label: "Error 401" },
    { to: "/403", icon: <BiMessageError />, label: "Error 403" },
  ];

  const accountMenus = [
    { to: "/profile", icon: <FaUser />, label: "Profile" },
    { to: "/Login", icon: <FaSignInAlt />, label: "Sign In" },
    { to: "/Register", icon: <FaUserPlus />, label: "Sign Up" },
  ];

  return (
    <div id="sidebar-menu" className="font-arimo mt-10">
      {/* Menu */}
      <div className="font-arimo sidebar-menu">
        {menus.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) =>
              "font-arimo sidebar-item" + (isActive ? " active" : "")
            }
            end={item.to === "/"}
          >
            <span className="font-arimo sidebar-icon">{item.icon}</span>
            <span className="font-arimo">{item.label}</span>
          </NavLink>
        ))}
        <div className="font-arimo sidebar-section">ACCOUNT PAGES</div>
        {accountMenus.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) =>
              "font-arimo sidebar-item" + (isActive ? " active" : "")
            }
          >
            <span className="font-arimo sidebar-icon">{item.icon}</span>
            <span className="font-arimo">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
