import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import CustomPieChart from "./charts/pie_chart";
import CustomBarChart from "./charts/bar_chart";
import CustomLinedChart from "./charts/line_chart";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Section2() {
  return (
    <div className="flex flex-col 2xl:flex-row w-full  gap-4 mt-7 items-start ">
      <div className="flex flex-col 2xl:flex-row   gap-4  ">
        {/* =================== 
      Pie Chart
        =========================*/}
        <div className="bg-primary lg:w-fit rounded-xl w-full pl-5 ">
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
            <div className="flex flex-col text-start text-sm gap-9 p-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0bb885]"></div>
                <div className="">
                  <div></div>
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

      {/* col right */}
      <div className="w-full bg-primary p-5 text-start">
        <h2 className="pt-2 text-xl font-semibold ">Activity Overview</h2>
        <div className="flex items-center gap-2 mt-3">
          <FaLongArrowAltUp color="#0bb885" size={22} />
          <h2 className="text-md text-[#5c6da6]">16% this month</h2>
        </div>

        <ActivityOverview />
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
    <div className="text-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Activity overview</h3>
      <div className="text-green-400 mb-6">16% this month</div>
      <div className="timeline">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-2 border-l-red-500 mb-4 flex items-start"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 mr-3"></div>
            <div>
              <p className="text-sm">
                <span className="font-semibold">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="font-semibold">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
