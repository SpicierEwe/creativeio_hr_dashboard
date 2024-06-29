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
  {
    name: "MON",
  },
  {
    name: "TUE",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "WED",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "THU",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "FRI",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "SAT",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function Section2() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
