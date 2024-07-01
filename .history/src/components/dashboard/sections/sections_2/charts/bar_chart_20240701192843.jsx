import { BarChart, Bar } from "recharts";

function CustomBarChart({ isEnrolmentStats = false }) {
  const data = [
    { name: "MON", UIUX: 20, BA: 40 },
    { name: "TUE", UIUX: 40, BA: 20 },
    { name: "WED", UIUX: 20, BA: 40 },
    { name: "THU", UIUX: 40, BA: 20 },
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
      <Bar
        dataKey="UIUX"
        stackId="a"
        fill="#fe8c4c"
        className=""
        radius={[0, 0, 10, 10]}
        barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
      />
      <Bar
        dataKey="BA"
        stackId="a"
        fill="#2f4d88"
        radius={[10, 10, 0, 0]}
        barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
      />
    </BarChart>
  );
}

export default CustomBarChart;
