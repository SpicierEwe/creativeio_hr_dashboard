import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Onsite", value: 134 },
  { name: "Remote", value: 921 },
  { name: "Hybrid", value: 1134 },
];

const COLORS = ["#6835f9", "#fe8c4c", "#fecc4c"];

const renderCustomizedLabel = ({ cx, cy }) => {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} dy="-1em" fontSize="15px" fill="#afb7cf">
        Total
      </tspan>
      <tspan x={cx} dy="1.2em" fontSize="24px" fill="#000">
        2157
      </tspan>
    </text>
  );
};

export default function CustomPieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
