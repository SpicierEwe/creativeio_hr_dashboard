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
    <ul className="">
      {menuItems.map((item) => (
        <li key={item.id} className="flex flex-row">
          <a href="#">
            <div className="h-5 w-5">{item.icon}</div>
            <div>{item.label}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;
