import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import CustomPieChart from "./charts/pie_chart";

const data = [
  { name: "MON", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
  { name: "TUE", UIUX: 30, BA: 5, Finance: 30, PM: 10 },
  { name: "WED", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
  { name: "THU", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
  { name: "FRI", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
  { name: "SAT", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
];

const formatPercent = (tick) => `${tick}%`;

export default function Section2() {
  return (
    <div className="flex flex-col lg:flex-row  gap-10 mt-7 justify-between">
      {/* bar stats */}
      <div className="bg-primary p-2 rounded-2xl ">
        <div className="flex flex-col lg:flex-row w-fit lg:w-full gap-3 lg:justify-between p-5">
          <h2 className="font-bold">Employee Performance</h2>
          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar"></div>
      </div>

      {/* =================== 
      Pie Chart
        =========================*/}
      <div className="bg-primary w-fit rounded-xl">
        <div className="flex flex-col lg:flex-row  gap-3 lg:justify-between p-5 text-start ">
          <h2 className="font-bold">Working Format</h2>
          <button className=" flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Today
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="relative">
          <CustomPieChart />
        </div>
      </div>
    </div>
  );
}
