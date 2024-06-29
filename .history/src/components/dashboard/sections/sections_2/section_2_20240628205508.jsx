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
  { name: "MON", uv: 40, pv: 24, amt: 24 },
  { name: "TUE", uv: 30, pv: 14, amt: 22 },
  { name: "WED", uv: 20, pv: 98, amt: 22.9 },
  { name: "THU", uv: 27.8, pv: 39.08, amt: 20 },
  { name: "FRI", uv: 18.9, pv: 48, amt: 21.81 },
  { name: "SAT", uv: 23.9, pv: 38, amt: 25 },
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
      <Bar dataKey="amt" stackId="a" fill="#6835f9" />
      <Bar dataKey="pv" stackId="a" fill="#fe8c4c" />
    </BarChart>
  );
}
