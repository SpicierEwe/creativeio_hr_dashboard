import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function CustomBarChart({ isEnrolmentStats = false }) {
  const data = [
    { name: "MON", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "TUE", UIUX: 30, BA: 5, Finance: 30, PM: 10 },
    { name: "WED", UIUX: 10, BA: 15, Finance: 10, PM: 5 },
    { name: "THU", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "FRI", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "SAT", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
  ];

  const formatPercent = (tick) => `${tick}%`;
  return (
    <div className="">
      <div className="lg:hidden">
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          barCategoryGap={20}
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
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="BA"
            stackId="a"
            fill="#fe8c4c"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="Finance"
            stackId="a"
            fill="#FFC107"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="PM"
            stackId="a"
            radius={isEnrolmentStats ? [8, 8, 0, 0] : [10, 10, 10, 10]}
            fill="#2998FF"
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
        </BarChart>
      </div>
      {/* for lg  */}
      <div className="hidden lg:block xl:hidden">
        <BarChart
          width={950}
          height={300}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          barCategoryGap={20}
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
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="BA"
            stackId="a"
            fill="#fe8c4c"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="Finance"
            stackId="a"
            fill="#FFC107"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="PM"
            stackId="a"
            radius={isEnrolmentStats ? [8, 8, 0, 0] : [10, 10, 10, 10]}
            fill="#2998FF"
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
        </BarChart>
      </div>
      {/* for xl  */}
      <div className="hidden xl:block 2xl:hidden">
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          barCategoryGap={20}
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
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="BA"
            stackId="a"
            fill="#fe8c4c"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="Finance"
            stackId="a"
            fill="#FFC107"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="PM"
            stackId="a"
            radius={isEnrolmentStats ? [8, 8, 0, 0] : [10, 10, 10, 10]}
            fill="#2998FF"
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
        </BarChart>
      </div>
      {/* for 2xl  */}
      <div className="hidden 2xl:block">
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          barCategoryGap={20}
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
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="BA"
            stackId="a"
            fill="#fe8c4c"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="Finance"
            stackId="a"
            fill="#FFC107"
            radius={isEnrolmentStats ? [0, 0, 0, 0] : [10, 10, 10, 10]}
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
          <Bar
            dataKey="PM"
            stackId="a"
            radius={isEnrolmentStats ? [8, 8, 0, 0] : [10, 10, 10, 10]}
            fill="#2998FF"
            barSize={isEnrolmentStats ? 25 : 13} // Adjust bar size to create spacing effect
          />
        </BarChart>
      </div>
    </div>
  );
}

export default CustomBarChart;
