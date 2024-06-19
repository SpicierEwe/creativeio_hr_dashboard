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
        <div>
          <li key={item.id} className="">
            <a href="#" className="flex gap-2">
              <div className="text-3xl">{item.icon}</div>
              <div className="hidden md:visible">{item.label}</div>
            </a>
          </li>
        </div>
      ))}
    </ul>
  );
}

export default SideNav;
