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
  { name: "MON", a: 20, b: 55, Finance: 70, PM: 85 },
  //   { name: "TUE", UIUX: 25, BA: 35, Finance: 60, PM: 70 },
  //   { name: "WED", UIUX: 5, BA: 25, Finance: 40, PM: 80 },
  //   { name: "THU", UIUX: 15, BA: 35, Finance: 60, PM: 95 },
  //   { name: "FRI", UIUX: 15, BA: 25, Finance: 40, PM: 75 },
  //   { name: "SAT", UIUX: 35, BA: 60, Finance: 70, PM: 90 },
];

const formatPercent = (tick) => `${tick}%`;

export default function Section2() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <Legend />
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} tickFormatter={formatPercent} />
      <Tooltip />
      <Bar dataKey="UIUX" stackId="a" fill="#6835f9" />
      <Bar dataKey="BA" stackId="a" fill="#fe8c4c" />
      <Bar dataKey="Finance" stackId="a" fill="#FFC107" />
      <Bar dataKey="PM" stackId="a" fill="#2998FF" />
    </BarChart>
  );
}
