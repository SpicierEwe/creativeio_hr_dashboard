import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: -4000,
    pv: 2400,
  },
  {
    name: "Feb",
    uv: -6000,
    pv: 3598,
  },
  {
    name: "Mar",
    uv: -2000,
    pv: -9800,
  },
  {
    name: "Apr",
    uv: -2780,
    pv: 3008,
  },
  {
    name: "May",
    uv: -6000,
    pv: 3598,
  },
  {
    name: "Jun",
    uv: -9390,
    pv: 3800,
  },
  {
    name: "Jul",
    uv: -3490,
    pv: 4300,
  },
  {
    name: "Jul",
    uv: -3490,
    pv: 4300,
  },
  {
    name: "Jul",
    uv: -3490,
    pv: 4300,
  },
];

export default function DoubleBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      stackOffset="sign"
      barSize={10}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      {/* <ReferenceLine y={0} stroke="#000" /> */}
      <Bar dataKey="pv" fill="#0bb885" stackId="stack" />
      <Bar dataKey="uv" fill="#ff9f43" stackId="stack" />
    </BarChart>
  );
}
