import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import CustomPieChart from "./charts/pie_chart";
import CustomBarChart from "./charts/bar_chart";
import CustomLinedChart from "./charts/line_chart";
import { FaLongArrowAltUp } from "react-icons/fa";
import DoubleBarChart from "./charts/double_bar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Section2() {
  return (
    <div className="flex flex-col 2xl:flex-row w-full  gap-4 mt-7 items-start ">
      {/* col 1 */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col 2xl:flex-row gap-4  ">
          {/* =================== 
      Pie Chart
        =========================*/}
          <div className="bg-primary lg:w-fit rounded-xl w-full pl-5  ">
            <div className="flex flex-col lg:flex-row  gap-3 p-5 text-start lg:items-center justify-between ">
              <h2 className="font-semibold text-lg">Earnings</h2>
              <button className=" flex justify-between items-center gap-2 bg-accent_light p-1 px-2 text-xs text-[#57679d] rounded-lg w-fit">
                This Week
                <RiArrowDropDownLine size={25} />
              </button>
            </div>

            {/* pie */}
            <div className="relative flex flex-col w-full xl:flex-row items-start xl:items-center">
              <CustomPieChart />
              <div className="flex flex-col text-start text-sm gap-9 p-5 px-5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0bb885]"></div>
                  <div className="">
                    <div>
                      <p>Total Sales</p>
                      <p className="font-normal mt-1">251k</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ff814a]"></div>
                  <div className="">
                    <div>
                      <p>Total Sales</p>
                      <p className="font-normal mt-1">251k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bar stats */}
          <div className="bg-primary p-2 rounded-2xl w-fit ">
            <div className="flex flex-col lg:flex-row gap-3 p-5 w-full  items-start justify-between">
              <div className="text-xl text-start flex flex-col gap-5  ">
                <h2 className="">Orders</h2>
                <h2 className="text-[#ff814a] text-3xl">189k</h2>
              </div>
            </div>

            <div className="overflow-auto hide-scrollbar">
              <CustomBarChart />
            </div>
          </div>

          {/* lined  */}
          <div className="bg-primary  rounded-2xl w-fit p-2">
            <div className="flex flex-col lg:flex-row w-fit gap-3 p-5 items-start justify-between">
              <div className="text-xl text-start flex flex-col gap-5  ">
                <h2 className="">Profit</h2>
                <h2 className="text-[#0bb885] text-3xl">8,24k</h2>
              </div>
            </div>

            <div className="overflow-auto hide-scrollbar  pl-9 ">
              <CustomLinedChart />
            </div>
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-4  ">
          {/* col 2 */}

          {/* double chart */}
          <div className="flex flex-col xl:flex-row w-fit w-full bg-primary rounded-xl">
            <div className=" p-7">
              <DoubleBarChart />
            </div>

            {/* c-2  */}
            <div className=" w-full flex flex-col justify-around items-center  py-5">
              <button className="flex  items-center gap-3 w-fit border border-[#0bb885] p-1 px-3 rounded-lg">
                <p>2020</p>
                <MdOutlineKeyboardArrowDown />
              </button>
              <div>
                <h2 className="font-bold text-3xl text-white">$842.98</h2>
                <p className="text-sm mt-2 text-[#828282]">
                  Latest Month Balance $426.20k
                </p>

                <img className="pl-7 pt-5" src="/images/path.svg" alt="" />
              </div>
              <div>
                <button className="flex items-center gap-3 w-fit py-3 px-5 bg-[#0bb885] p-1 font-bold rounded-lg">
                  View Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* col right */}
      <div className="w-full bg-primary p-5 text-start rounded-xl">
        <h2 className="pt-2 text-xl font-semibold ">Activity Overview</h2>
        <div className="flex items-center gap-2 mt-3">
          <FaLongArrowAltUp color="#0bb885" size={22} />
          <h2 className="text-md text-[#5c6da6]">16% this month</h2>
        </div>
        <div className="mt-5">
          <ActivityOverview />
        </div>
      </div>
    </div>
  );
}

const ActivityOverview = () => {
  const activities = [
    {
      user: "Nick Mark",
      action: "Mentioned",
      target: "Sara Smith In New Post",
      time: "11 JUL 8:10 PM",
    },
    {
      user: "Nick Mark",
      action: "removed",
      target: "The Post Name",
      time: "11 JUL 9:10 PM",
    },
    {
      user: "Patrick Sulivan",
      action: "Published a New Post",
      target: "",
      time: "12 JUL 10:10 PM",
    },
    {
      user: "240+ users",
      action: "have subscribed to",
      target: "Newsletter #1",
      time: "18 JUL 19:10 PM",
    },
    {
      user: "Nick Mark",
      action: "suspended",
      target: "The Post Name",
      time: "11 JUL 9:10 PM",
    },
  ];
  return (
    <div className="p-6 rounded-lg">
      <div className="timeline">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-2 relative pl-5 border-l-[#4c5a8b] pb-20 flex items-start "
          >
            <div className="w-5 h-5 absolute -left-[.7rem] border-[3px] -top-1.5  bg-[#1c243f] border-[#ff814a]  rounded-full mt-1.5 mr-3"></div>
            <div className="">
              <p className="text-md">
                <span className="font-semibold">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="font-semibold">{activity.target}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
