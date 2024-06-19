import React from "react";

import {
  FaHome,
  FaInfoCircle,
  FaChartBar,
  FaComments,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { id: 1, icon: <FaHome />, label: "Overview" },
  { id: 2, icon: <FaInfoCircle />, label: "Courses" },
  { id: 3, icon: <FaChartBar />, label: "Schedule" },
  { id: 4, icon: <FaComments />, label: "Discussion" },
  { id: 5, icon: <FaTrophy />, label: "Leaderboard" },
  { id: 6, icon: <FaCog />, label: "Settings" },
];

function SideNav() {
  return (
    <ul className="flex flex-col gap-5 h-screen bg-red-500 w-fit p-5">
      {menuItems.map((item) => (
        <li key={item.id} className="">
          <a href="#" className="flex gap-2">
            <div className="text-2xl">{item.icon}</div>
            <div className="hidden md:block">{item.label}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;
