import { PieChart, Pie, Cell } from "recharts";

export default function CustomPieChart() {
  const data = [
    { name: "Group A", value: 300 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#fecc4c", "#fe8c4c", "#6835f9"];

  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        cx={150}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
