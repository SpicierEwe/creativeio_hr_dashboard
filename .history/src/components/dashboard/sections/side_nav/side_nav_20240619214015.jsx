import React, { useEffect, useState } from "react";

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
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);
  return (
    <ul className="flex flex-col gap-7 h-screen  w-fit p-1 pl-3 pr-0">
      <img src="/logo/logo.svg" alt="logo" />
      {menuItems.map((item, index) => (
        <li
          key={item.id}
          className={`p-2 text-md cursor-pointer rounded-xl  ${
            selectedNavIndex === index ? "bg-accent_light" : ""
          } transition-all duration-200 ease-in-out`}
          onClick={() => setSelectedNavIndex(index)}
        >
          <div className="flex gap-4">
            <div
              className={`text-secondary text-2xl ${
                selectedNavIndex === index ? "text-accent" : ""
              }  `}
            >
              {item.icon}
            </div>
            <div className="hidden md:block text-primary">{item.label}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;
