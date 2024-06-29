import React, { useEffect, useState } from "react";

import {
  FaComments,
  FaCog,
  FaFire,
  FaCalendarAlt,
  FaBook,
  FaTv,
  FaBell,
} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { TbMessageDots } from "react-icons/tb";
import { Link, redirect, useLocation } from "react-router-dom";

const menuItems = [
  { id: 1, icon: <FaTv />, label: "Overview", notifications: 0, redirect: "/" },
  {
    id: 2,
    icon: <FaBook />,
    label: "Courses",
    notifications: 0,
    redirect: "/courses",
  },
  {
    id: 3,
    icon: <FaCalendarAlt />,
    label: "Schedule",
    notifications: 2,
    redirect: "/schedule",
  },
  {
    id: 4,
    icon: <FaComments />,
    label: "Discussion",
    notifications: 0,
    redirect: "/discussion",
  },
  {
    id: 5,
    icon: <FaFire />,
    label: "Leaderboard",
    notifications: 0,
    redirect: "/leaderboard",
  },
  {
    id: 6,
    icon: <FaCog />,
    label: "Settings",
    notifications: 0,
    redirect: "/settings",
  },
];

function SideNav() {
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const index = menuItems.findIndex((item) => item.redirect === path);
    setSelectedNavIndex(index);
  }, [location.pathname]);

  return (
    <div className="fixed">
      {/* top nav */}
      <TopNavBar />
      <ul className="flex flex-col fixed  gap-3 h-screen justify-between z-[999] bg-primary max-w-[17%]">
        <div className="flex flex-col  gap-3">
          {/*  LOGO images */}

          <div className="mt-1">LOGO</div>

          {/* <h2>Main Menu</h2> */}
          {menuItems.map((item, index) => {
            const isSelected = selectedNavIndex === index;
            return (
              <Link to={item.redirect}>
                <li
                  key={item.id}
                  // bg
                  className={`p-3 border-r-2 lg:pr-[17%] ${
                    isSelected ? "border-accent" : "border-primary"
                  } text-md cursor-pointer w-full ${
                    isSelected ? "bg-accent_light" : ""
                  } transition-all duration-200 ease-in-out`}
                  onClick={() => setSelectedNavIndex(index)}
                >
                  <div className="flex justify-between gap-10">
                    <div className="flex gap-4">
                      {/* item icon */}
                      <div
                        className={` text-2xl lg:text-xl ${
                          isSelected ? "text-accent" : "text-secondary"
                        }  `}
                      >
                        {item.icon}
                      </div>

                      {/* lable */}
                      <div
                        className={`hidden lg:block text-sm font-light ${
                          isSelected ? "text-accent" : ""
                        } `}
                      >
                        {item.label}
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default SideNav;
const TopNavBar = () => {
  const icons = [<IoMdSearch />, <TbMessageDots />, <FaBell />];
  return (
    <div className="bg-primary w-screen fixed  max-w-screen-2xl">
      {/* mobile */}
      <div className="flex justify-between">
        <div></div>

        {/* icons */}
        <div className="flex">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex justify-end p-2 text-2xl text-accent"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
