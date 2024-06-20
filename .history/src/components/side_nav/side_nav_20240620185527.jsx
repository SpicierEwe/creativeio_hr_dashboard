import React, { useEffect, useState } from "react";

import {
  FaComments,
  FaCog,
  FaFire,
  FaCalendarAlt,
  FaBook,
  FaTv,
} from "react-icons/fa";
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
    <ul className="flex flex-col  gap-3 h-screen  w-fit p-1 pl-3 pr-0 fixed bg-secondary justify-between">
      <div className="flex flex-col  gap-3">
        {/*  LOGO images */}
        <div className="py-10 hidden lg:block">
          <img src="/logo/logo.svg" alt="logo" className="w-full" />
        </div>
        <div className="py-10 pt-5 lg:hidden">
          <img src="/logo/logo_mobile.svg" alt="logo" className="w-full" />
        </div>

        {menuItems.map((item, index) => {
          const isSelected = selectedNavIndex === index;
          return (
            <Link to={item.redirect}>
              <li
                key={item.id}
                // bg
                className={`p-2 text-md cursor-pointer rounded-xl w-full ${
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

                  {/* notifications */}
                  {item.notifications > 0 && (
                    <div className="hidden lg:flex bg-[#f75151] rounded-full w-6 h-6 text-xs  items-center justify-center">
                      <div className="text-white">2</div>
                    </div>
                  )}
                </div>
              </li>
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:flex flex-col">
        <div className=" relative pt-14 text-xs flex flex-col gap-3  bg-white p-3 rounded-xl w-full items-center ">
          <div className="absolute -top-3.5">
            <img src="/images/reading.svg" alt="" />
          </div>
          <h2 className="">
            Upgrade to Premium <br /> member
          </h2>

          <button className="bg-accent px-3 py-2 rounded-lg">
            <h2>Upgrade now</h2>
          </button>
        </div>
        <p className="text-xs mt-5 text-start">© 2021 Cuboid</p>
      </div>
    </ul>
  );
}

export default SideNav;
