import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuList({ menus, menuClass }) {
    return (
        <ul id="menu-list" className="space-y-3">
            {menus.map((menu, index) => (
                <li key={index}>
                    <NavLink
                        id={`menu-${index + 1}`}
                        to={menu.to}
                        className={menuClass}
                    >
                        {menu.icon}
                        {menu.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}