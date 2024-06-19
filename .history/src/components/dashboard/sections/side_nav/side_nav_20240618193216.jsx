import React from "react";
import { FaHome, FaInfoCircle, FaChartBar } from "react-icons/fa";

const menuItems = [
  { id: 1, icon: <FaHome />, label: "Ob" },
  { id: 2, icon: <FaInfoCircle />, label: "About" },
  { id: 3, icon: <FaChartBar />, label: "Stats" },
];

function SideNav() {
  return (
    <ul className="menu bg-base-200 rounded-box">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a href="#">
            <span className="h-5 w-5">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;
