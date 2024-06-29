import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
    <div className="bg-primary p-2 rounded-2xl w-fit  lg:mx-0 overflow-auto  ">
      <div>
        <h2>Employee Performance</h2>
        <button className="btn">
          Button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

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
  );
}
