import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import CustomPieChart from "./charts/pie_chart";
import CustomBarChart from "./charts/bar_chart";
import CustomLinedChart from "./charts/line_chart";

export default function Section2() {
  return (
    <div className="flex flex-col 2xl:flex-row w-full  gap-10 mt-7 ">
      {/* =================== 
      Pie Chart
        =========================*/}
      <div className="bg-primary lg:w-fit rounded-xl w-full pl-5 ">
        <div className="flex flex-col lg:flex-row  gap-3 p-5 text-start lg:items-center justify-between ">
          <h2 className="font-bold">Working Format</h2>
          <button className=" flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Today
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
        <div className="flex flex-col lg:flex-row w-fit gap-3 p-5 items-start justify-between bg-red-50">
          <div className="text-xl text-start flex flex-col gap-5  ">
            <h2 className="">Orders</h2>
            <h2 className="text-[#ff814a] text-3xl">189k</h2>
          </div>

          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar">
          <CustomBarChart />
        </div>
      </div>

      {/* lined  */}
      <div className="bg-primary p-0 rounded-2xl w-fit">
        <div className="flex flex-col lg:flex-row w-fit gap-3 p-5 items-start justify-between">
          <div className="text-xl text-start flex flex-col gap-5  ">
            <h2 className="">Profit</h2>
            <h2 className="text-[#ff814a] text-3xl">8,24k</h2>
          </div>

          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar  pl-9 ">
          <CustomLinedChart />
        </div>
      </div>
    </div>
  );
}
