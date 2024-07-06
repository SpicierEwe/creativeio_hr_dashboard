import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiMessageError, BiSolidMessage } from "react-icons/bi";

import { CiLock } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";

import { IoLogOut, IoPerson, IoSearchOutline } from "react-icons/io5";
import { MdOutlineCardMembership } from "react-icons/md";
import { RiArrowDropDownLine, RiBillLine } from "react-icons/ri";
import { RxDashboard, RxPerson } from "react-icons/rx";

import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    icon: <RxDashboard />,

    label: "Dashboard",
    notifications: 0,
    redirect: "/",

    notification: {
      count: 14,
      color: "#43e794",
    },
  },
  {
    id: 2,
    icon: <RxPerson />,
    label: "Account Details",
    notifications: 0,
    redirect: "/account-details",
  },
  {
    id: 3,
    icon: <CiLock />,
    label: "Change Password",
    notifications: 2,
    redirect: "/Apps",
  },
  {
    id: 4,
    icon: <AiOutlineUserAdd />,
    label: "Add User Access",
    notifications: 0,
    redirect: "/Payments",

    notification: {
      count: 2,
      color: "#00a2ff",
    },
  },
  {
    id: 5,
    icon: <RiBillLine />,
    label: "Billing History",
    notifications: 0,
    redirect: "/Communicate",
    notification: {
      count: 6,
      color: "#ea62b2",
    },
  },
  {
    id: 6,
    icon: <MdOutlineCardMembership />,
    label: "Current Membership",
    notifications: 0,
    redirect: "/Reports",
  },
  {
    id: 7,
    icon: <GiUpgrade />,
    label: "Upgrade",
    notifications: 0,
    redirect: "/Notifications",
  },
  {
    id: 8,
    icon: <BiMessageError />,
    label: "Help",
    notifications: 0,
    redirect: "/Settings",
  },
  {
    id: 9,
    icon: <IoLogOut />,
    label: "Logout",
    notifications: 0,
    redirect: "/Logout",
  },
];

const messages = [
  {
    name: "Henry Nalson",
    message: "Henry sent you a message.",
    time: "02",
  },
  {
    name: "Henry Nalson",
    message: "Henry sent you a message.",
    time: "02",
  },
];

const notifications = [
  {
    name: "Henry Nalson",
    message: "Accpeted your proposal.",
    time: "20 May 2019, 15:30",
    isAccepted: true,
  },
  {
    name: "Charles",
    message: "Rejected our proposal.",
    time: "20 May 2019, 15:30",
    isAccepted: false,
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
        <div className="flex flex-col gap-3  xl:py-5">
          {/* LOGO images */}
          <div className="pt-4 pl-3  xl:px-3 xl:pt-0 flex items-center gap-2">
            {/* mobile */}
            <img src="/logo/logo.svg" alt="" className="" />
            <h2 className="hidden font-bold text-2xl xl:block">logoipsum</h2>
          </div>

          {/*  */}

          <div className="mt-9 xl:mt-14 flex flex-col xl:gap-y-3 ">
            {menuItems.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-l-[5px]  text-[##707070] ${
                      isSelected ? "bg-[#f3f1fa] border-accent " : ""
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-1">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div className={`text-2xl lg:text-xl text-[#707070]`}>
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm text-[#6c747d]`}
                        >
                          {item.label}
                        </div>
                      </div>

                      {/* notifications */}

                      {item.notification !== undefined && (
                        <div
                          className="hidden xl:flex rounded-lg font-semibold px-1  text-xs  items-center ml-3.5"
                          style={{
                            backgroundColor: item.notification.color,
                          }}
                        >
                          <p className="text-white">
                            {item.notification.count
                              .toString()
                              .padStart(2, "0")}
                          </p>
                        </div>
                      )}
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
  return (
    <div className="flex justify-end xl:justify-between w-full  bg-primary fixed max-w-screen-2xl p-2 xl:py-[.7rem] py-[1.13rem] border-b-[.5px]  xl:px-10 ">
      <div className="flex justify-between w-full items-center ml-14 xl:ml-48  ">
        {/* empty div for layout support */}
        <div className="flex items-center gap-3 "></div>

        {/* search #*/}
        <label className="hidden xl:flex input input-bordered bg-[#f3f6f9] w-[40rem] h-9  items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-[#abafb3]"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        {/* */}
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
            {/* search icon */}
            <IoSearchOutline size={20} className="text-[#a6adbb]" />

            {/* message icons */}

            {/*  */}

            <details className="dropdown bg-white">
              <summary className="btn bg-white border-none w-fit hover:bg-accent_light p-0 m-0">
                <div className="avatar online  placeholder h-7 w-7">
                  <div className="bg-neutral text-neutral-content w-16 bg-transparent rounded-full">
                    <span className="text-xl">
                      <BiSolidMessage />
                    </span>
                  </div>
                </div>
              </summary>
              <ul className="menu dropdown-content bg-white  z-[1] w-[20rem] shadow mt-4 right-0">
                <li className="">
                  <div className="flex justify-between bg-accent text-white hover:bg-accent">
                    <div>View messages</div>
                    <div>View All</div>
                  </div>
                  {messages.map((data, index) => {
                    return (
                      <div>
                        <div className="flex gap-5 items-center">
                          <div className="bg-[#f3f1fa] p-2 rounded-full">
                            <IoPerson size={22} className="  text-[#abafb3] " />
                          </div>

                          <div className="flex flex-col gap-1">
                            <h2 className="text-md font-medium">{data.name}</h2>
                            <p className="text-sm text-[#abafb3]">
                              {data.message}
                            </p>
                            <p className="text-xs text-[#abafb3]">
                              {data.time} hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </li>
              </ul>
            </details>

            {/* bell icon */}

            <details className="dropdown bg-white">
              <summary className="btn bg-white border-none w-fit hover:bg-accent_light p-0 m-0">
                <div className="avatar online  placeholder h-7 w-7">
                  <div className="bg-neutral text-neutral-content w-16 bg-transparent rounded-full">
                    <span className="text-xl">
                      <FaBell />
                    </span>
                  </div>
                </div>
              </summary>
              <ul className="menu dropdown-content bg-white  z-[1] w-[20rem] shadow mt-4 right-0">
                <li className="">
                  {notifications.map((data, index) => {
                    return (
                      <div>
                        <div className="flex gap-5 items-center">
                          <div className="bg-[#f3f1fa] p-2 rounded-full">
                            {data.isAccepted ? (
                              <FaCheck
                                size={22}
                                className="  text-[#abafb3] "
                              />
                            ) : (
                              <RxCross2
                                size={22}
                                className="  text-[#abafb3] "
                              />
                            )}
                          </div>

                          <div className="flex flex-col gap-1">
                            <h2 className="text-md font-medium">{data.name}</h2>
                            <p className="text-sm text-[#abafb3]">
                              {data.message}
                            </p>
                            <p className="text-xs text-[#abafb3]">
                              {data.time} hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </li>
              </ul>
            </details>

            {/* profile */}

            <details className="dropdown bg-white">
              <summary className="btn bg-white border-none w-fit hover:bg-accent_light p-0 m-0">
                {/* profile */}
                <div className="flex lg:py-2 lg:px-3 ml-3  items-center gap-4  bg-accent_light">
                  <div className=" w-7 h-7  aspect-square overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-square rounded-full"
                    />
                  </div>
                  <h2 className="hidden font-medium xl:block">Theresa Webb</h2>
                </div>
              </summary>
              <ul className="menu dropdown-content bg-white  z-[1] w-52 p-2 right-0 shadow mt-4">
                <li>
                  <a>My Profile</a>
                </li>
                <li>
                  <a>My Wallet</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
