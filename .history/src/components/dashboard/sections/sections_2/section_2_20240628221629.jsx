import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
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
    <div className="flex">
      {/* bar stats */}
      <div className="bg-primary p-2 rounded-2xl  lg:mx-0  mt-7 w-ful ">
        <div className="flex flex-col lg:flex-row w-fit lg:w-full gap-3 lg:justify-between p-3  lg:p-5">
          <h2>Employee Performance</h2>
          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar">
          <BarChart
            width={600} // Adjusted width for better visualization
            height={300}
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            barCategoryGap={20}
          >
            <Legend />
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} tickFormatter={formatPercent} />

            <Tooltip />
            <Bar
              dataKey="UIUX"
              stackId="a"
              fill="#6835f9"
              radius={[10, 10, 10, 10]}
              barSize={13} // Adjust bar size to create spacing effect
            />
            <Bar
              dataKey="BA"
              stackId="a"
              fill="#fe8c4c"
              radius={[10, 10, 10, 10]}
              barSize={13} // Adjust bar size to create spacing effect
            />
            <Bar
              dataKey="Finance"
              stackId="a"
              fill="#FFC107"
              radius={[10, 10, 10, 10]}
              barSize={13} // Adjust bar size to create spacing effect
            />
            <Bar
              dataKey="PM"
              stackId="a"
              radius={[10, 10, 10, 10]}
              fill="#2998FF"
              barSize={13} // Adjust bar size to create spacing effect
            />
          </BarChart>
        </div>
      </div>

      {/* Pie Chart */}
      <CustomPieChart />
    </div>
  );
}
