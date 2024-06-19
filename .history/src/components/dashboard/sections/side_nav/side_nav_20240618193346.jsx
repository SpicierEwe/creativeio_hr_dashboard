import React from "react";
import { FaHome, FaInfoCircle, FaChartBar } from "react-icons/fa";

const menuItems = [
  { id: 1, icon: <FaHome />, label: "Overview" },
  { id: 2, icon: <FaInfoCircle />, label: "Courses" },
  { id: 3, icon: <FaChartBar />, label: "Schedule" },
  { id: 3, icon: <FaChartBar />, label: "Discussion" },
  { id: 3, icon: <FaChartBar />, label: "Leaderboard" },
  { id: 3, icon: <FaChartBar />, label: "Settings" },
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
