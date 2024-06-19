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
  { id: 1, icon: <FaHome />, label: "Overview", notifications: 0 },
  { id: 2, icon: <FaInfoCircle />, label: "Courses", notifications: 0 },
  { id: 3, icon: <FaChartBar />, label: "Schedule", notifications: 2 },
  { id: 4, icon: <FaComments />, label: "Discussion", notifications: 0 },
  { id: 5, icon: <FaTrophy />, label: "Leaderboard", notifications: 0 },
  { id: 6, icon: <FaCog />, label: "Settings", notifications: 0 },
];

function SideNav() {
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);
  return (
    <ul className="flex flex-col gap-3 h-screen  w-fit p-1 pl-3 pr-0 fixed bg-secondary">
      <div className="py-10 hidden lg:block">
        <img src="/logo/logo.svg" alt="logo" className="w-full" />
      </div>

      {menuItems.map((item, index) => {
        const isSelected = selectedNavIndex === index;
        return (
          <li
            key={item.id}
            className={`p-2 text-md cursor-pointer rounded-xl w-full ${
              selectedNavIndex === index ? "bg-accent_light" : ""
            } transition-all duration-200 ease-in-out`}
            onClick={() => setSelectedNavIndex(index)}
          >
            <div className="flex justify-between gap-10">
              <div className="flex gap-4">
                {/* item icon */}
                <div
                  className={`text-secondary text-2xl ${
                    selectedNavIndex === index ? "text-accent" : ""
                  }  `}
                >
                  {item.icon}
                </div>

                {/* lable */}
                <div className="hidden lg:block">{item.label}</div>
              </div>

              {/* notifications */}
              {item.notifications > 0 && (
                <div className="hidden lg:flex bg-[#f75151] rounded-full w-6 h-6 text-xs  items-center justify-center">
                  <div className="text-white">2</div>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default SideNav;
