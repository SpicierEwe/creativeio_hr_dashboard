import React, { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCalendarAlt, FaBell } from "react-icons/fa";
import { IoIosPeople, IoIosSettings, IoMdSearch } from "react-icons/io";
import { IoHeadset, IoPeople, IoPersonCircleSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    label: "Overview",
    notifications: 0,
    redirect: "/",
  },
  {
    id: 2,
    icon: <IoPersonCircleSharp />,
    label: "Enrollment",
    notifications: 0,
    redirect: "/courses",
  },
  {
    id: 3,
    icon: <IoIosPeople size={25} />,
    label: "Employees",
    notifications: 2,
    redirect: "/schedule",
  },
  {
    id: 4,
    icon: <FaCalendarAlt size={21} />,
    label: "Calendar and Todos",
    notifications: 0,
    redirect: "/discussion",
  },
  {
    id: 5,
    icon: <IoIosSettings />,
    label: "Job",
    notifications: 0,
    redirect: "/leaderboard",
  },
  {
    id: 6,
    icon: <IoPeople />,
    label: "Candidate",
    notifications: 0,
    redirect: "/settings",
  },
];

const menu2 = [
  {
    id: 7,
    icon: <IoHeadset />,
    label: "Help & Center",
    notifications: 0,
    redirect: "/help-and-support",
  },
  {
    id: 8,
    icon: <IoIosSettings />,
    label: "Settings",
    notifications: 0,
    redirect: "/settings",
  },
];

function SideNav() {
  const [selectedNavIndex, setSelectedNavIndex] = useState(1);

  return (
    <div className="fixed z-[99999]">
      {/* top nav */}
      <TopNavBar />

      {/* side nav */}
      <ul className="flex flex-col fixed gap-3 h-screen justify-between z-[999] bg-primary">
        <div className="flex flex-col gap-3">
          {/* LOGO images */}
          <div className="pt-1 flex items-center gap-5">
            {/* mobile */}
            <img src="/logo/logo.svg" alt="" className="" />
            <h1 className="hidden font-semibold text-2x xl:block">human.X</h1>
          </div>

          {/*  */}
          <div className="h-[.3px] bg-gray-200 w-full "></div>
          <h2 className="text-start hidden pl-3 text-sm lg:block mt-5 text-[#b8c3e1]">
            MAIN MENU
          </h2>
          <div className="mt-2">
            {menuItems.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-r-2 ${
                      isSelected
                        ? "border-accent bg-accent_light"
                        : "border-primary"
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-10 ">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div
                          className={`text-2xl lg:text-xl ${
                            isSelected ? "text-accent" : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm ${
                            isSelected
                              ? "text-accent font-bold"
                              : "text-[#b8c3e1]"
                          }`}
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
          <div className="h-[.3px] bg-gray-200 w-full"></div>
          <h2 className="text-start hidden pl-3 text-sm lg:block mt-5 text-[#b8c3e1]">
            HELP & SUPPORT
          </h2>
          <div className="mt-2">
            {menu2.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-r-2 ${
                      isSelected
                        ? "border-accent bg-accent_light"
                        : "border-primary"
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-10 ">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div
                          className={`text-2xl lg:text-xl ${
                            isSelected ? "text-accent" : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm ${
                            isSelected
                              ? "text-accent font-bold"
                              : "text-[#b8c3e1]"
                          }`}
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
        </div>
      </ul>
    </div>
  );
}

export default SideNav;

const TopNavBar = () => {
  const icons = [<IoMdSearch />, <TbMessageDots />, <FaBell />];
  return (
    <div className="bg-primary w-screen fixed max-w-screen-2xl p-2">
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
