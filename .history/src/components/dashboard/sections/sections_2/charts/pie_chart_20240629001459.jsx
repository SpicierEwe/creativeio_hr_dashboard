import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#fecc4c", "#fe8c4c", "#6835f9"];

const renderCustomizedLabel = ({ cx, cy }) => {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} dy="-1em" fontSize="15px" fill="#afb7cf">
        Total 1{" "}
      </tspan>
      <tspan x={cx} dy="1.2em" fontSize="24px" fill="#000">
        2157
      </tspan>
    </text>
  );
};

export default function CustomPieChart() {
  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={150}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
