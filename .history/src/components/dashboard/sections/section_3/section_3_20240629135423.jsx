import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomBarChart from "../sections_2/charts/bar_chart";
import CustomPieChart from "../sections_2/charts/pie_chart";
import Ranking from "./subsections/ranking/ranking";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Section3() {
  return (
    <div className="flex flex-col xl:flex-row  gap-10 mt-7 justify-between ">
      {/* bar stats */}
      <div className="bg-primary p-2 rounded-2xl w-full ">
        <div className="flex flex-col lg:flex-row w-fit lg:w-full gap-3 lg:justify-between p-5">
          <h2 className="font-bold">Enrollement Statistics</h2>
          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar">
          <CustomBarChart isEnrolmentStats={true} />
        </div>
      </div>

      {/* =================== 
     ranking
        =========================*/}
      <div className="bg-primary  rounded-xl w-full">
        <div className="flex flex-col lg:flex-row  gap-3 lg:justify-between p-5 pr-0 text-start lg:items-center ">
          <h2 className="font-bold">Employee Rank</h2>
          <button className=" flex justify-between items-center gap-1  p-1 px-2 rounded-lg w-fit text-sm text-blue-500">
            See all
            <MdKeyboardArrowRight size={25} />
          </button>
        </div>

        {/* ranking */}
        <div className="">
          <Ranking />
        </div>
      </div>
    </div>
  );
}
