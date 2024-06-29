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
    uv: 4000,
    pv: 2400,
    amt: 2400,
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

const formatYAxis = (tick) => {
  // Example: Add a " units" suffix to the tick values
  return `${tick} units`;
};

export default function Section2() {
  return (

  );
}
