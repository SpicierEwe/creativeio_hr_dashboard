import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomBarChart({ isEnrolmentStats = false }) {
  const data = [
    { name: "MON", UIUX: 20, BA: 40 },
    { name: "TUE", UIUX: 30, BA: 5 },
    { name: "WED", UIUX: 10, BA: 15 },
    { name: "THU", UIUX: 20, BA: 40 },
    { name: "FRI", UIUX: 20, BA: 40 },
  ];

  return (
    <BarChart
      width={200}
      height={150}
      data={data}
      margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
      barCategoryGap={20}
    >
      {/* <Legend /> */}
      {/* <CartesianGrid strokeDasharray="1 1" /> */}
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis domain={[0, 100]} tickFormatter={formatPercent} /> */}

      {/* <Tooltip /> */}
      <Bar
        dataKey="UIUX"
        stackId="a"
        fill="#fe8c4c"
        className=""
        radius={[10, 10, 0, 10]}
        barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
      />
      <Bar
        dataKey="BA"
        stackId="a"
        fill="#fe8c4c"
        radius={[10, 10, 0, 10]}
        barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
      />
    </BarChart>
  );
}

export default CustomBarChart;
