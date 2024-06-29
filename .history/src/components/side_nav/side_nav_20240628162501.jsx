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
    <div>
      <TopNavBar />
      <ul className="flex flex-col  gap-3 h-screen  w-fit p-1 pl-3 pr-0 fixed bg-secondary justify-between bg-red-50">
        <div className="flex flex-col  gap-3">
          {/*  LOGO images */}

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
    </div>
  );
}

export default SideNav;
const TopNavBar = () => {
  return (
    <div className="bg-red-50 w-screen">
      {/* mobile */}
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};
