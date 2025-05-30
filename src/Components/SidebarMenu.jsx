import { MdOutlineErrorOutline } from "react-icons/md"; 
import { BiMessageError } from "react-icons/bi"; 
import { BiError } from "react-icons/bi"; 
import { BiErrorAlt } from "react-icons/bi"; 
import { MdRateReview } from "react-icons/md"; 
import { BiBarChart } from "react-icons/bi"; 
import { FaHome } from "react-icons/fa"; 
import React from "react";
import MenuList from "./MenuList";

const iconColor = "#4CD7CE";

export default function SidebarMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 font-bold
        ${isActive ? 
            "text-teal bg-white" : 
            "text-gray-400 hover:text-teal hover:bg-teal-200"
        }`;

    const menus = [
        { to: "/", icon: <FaHome color={iconColor} />, label: "Dashboard" },
        { to: "/karyawan", icon: <BiBarChart color={iconColor} />, label: "List Karyawan" },
        { to: "/Customer", icon: <MdRateReview color={iconColor} />, label: "Customer Review" },
        { to: "/Booking", icon: <MdRateReview color={iconColor} />, label: "Booking List" },
        { to: "/CompanyProfileList", icon: <MdRateReview color={iconColor} />, label: "Company Profile" },
        { to: "/LowonganKerja", icon: <MdRateReview color={iconColor} />, label: "Lowongan Kerja" },
        { to: "/ManajemenProduk", icon: <MdRateReview color={iconColor} />, label: "Manajemen Produk" },
        { to: "/ArtikelNews", icon: <MdRateReview color={iconColor} />, label: "Artikel Berita" },
        { to: "*", icon: <BiErrorAlt color={iconColor} />, label: "Error 404" },
        { to: "/400", icon: <BiError color={iconColor} />, label: "Error 400" },
        { to: "/401", icon: <MdOutlineErrorOutline color={iconColor} />, label: "Error 401" },
        { to: "/403", icon: <BiMessageError color={iconColor} />, label: "Error 403" },
    ];

    return (
        <div id="sidebar-menu" className="mt-10">
            <MenuList menus={menus} menuClass={menuClass} />
        </div>
    );
}