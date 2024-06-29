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

      <Bar
        dataKey="UIUX"
        stackId="a"
        fill="#6835f9"
        barGap={4}
        radius={[10, 10, 10, 10]}
      />
      <Bar
        dataKey="BA"
        stackId="a"
        fill="#fe8c4c"
        barGap={4}
        radius={[10, 10, 10, 10]}
      />
      <Bar
        dataKey="Finance"
        stackId="a"
        fill="#FFC107"
        ={4}
        radius={[10, 10, 10, 10]}
      />
      <Bar
        dataKey="PM"
        stackId="a"
        fill="#2998FF"
        barGap={4}
        radius={[10, 10, 10, 10]}
      />
    </BarChart>
  );
}
