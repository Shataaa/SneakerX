import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md"; 
import { BiMessageError, BiError, BiErrorAlt, BiBarChart } from "react-icons/bi"; 
import { MdRateReview } from "react-icons/md"; 
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa"; 
import "../assets/sidebar.css";

const iconColor = "#5eead4";

export default function SidebarMenu() {
    const menus = [
        { to: "/", icon: <FaHome />, label: "Dashboard" },
        { to: "/Karyawan", icon: <BiBarChart />, label: "List Karyawan" },
        { to: "/Customer", icon: <MdRateReview />, label: "Customer Review" },
        { to: "/Booking", icon: <MdRateReview />, label: "Booking List" },
        { to: "/CompanyProfileList", icon: <MdRateReview />, label: "Company Profile" },
        { to: "/LowonganKerja", icon: <MdRateReview />, label: "Lowongan Kerja" },
        { to: "/ManajemenProduk", icon: <MdRateReview />, label: "Manajemen Produk" },
        { to: "/ArtikelNews", icon: <MdRateReview />, label: "Artikel Berita" },
        { to: "/FAQ", icon: <MdRateReview />, label: "FAQ" },
        { to: "/Galeri", icon: <MdRateReview />, label: "Galeri" },
        { to: "/UserRole", icon: <MdRateReview />, label: "User Role" },
        { to: "/Kontak", icon: <MdRateReview />, label: "Kontak" },
        { to: "*", icon: <BiErrorAlt />, label: "Error 404" },
        { to: "/400", icon: <BiError />, label: "Error 400" },
        { to: "/401", icon: <MdOutlineErrorOutline />, label: "Error 401" },
        { to: "/403", icon: <BiMessageError />, label: "Error 403" },
    ];

    const accountMenus = [
        { to: "/profile", icon: <FaUser />, label: "Profile" },
        { to: "/signin", icon: <FaSignInAlt />, label: "Sign In" },
        { to: "/signup", icon: <FaUserPlus />, label: "Sign Up" },
    ];

    return (
        <div id="sidebar-menu" className="mt-10">
            {/* Menu */}
            <div className="sidebar-menu">
                {menus.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item.to}
                        className={({ isActive }) =>
                            "sidebar-item" + (isActive ? " active" : "")
                        }
                        end={item.to === "/"}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
                <div className="sidebar-section">ACCOUNT PAGES</div>
                {accountMenus.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item.to}
                        className={({ isActive }) =>
                            "sidebar-item" + (isActive ? " active" : "")
                        }
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}