import { PieChart, Pie, Cell, Tooltip, Legend, Label } from "recharts";

export default function CustomPieChart() {
  const data = [
    { name: "Group A", value: 300 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#fecc4c", "#fe8c4c", "#6835f9"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value="Total"
          position="center"
          style={{
            fontSize: "24px",
            fill: "#000",
          }}
        />
        <Label
          value="2157"
          position="centerBottom"
          style={{
            fontSize: "24px",
            fill: "#000",
          }}
        />
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

// <PieChart width={300} height={200}>
//       <Pie
//         data={data}
//         cx={150}
//         cy={100}
//         innerRadius={60}
//         outerRadius={80}
//         fill="#8884d8"
//         paddingAngle={0}
//         dataKey="value"
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
