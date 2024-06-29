import { IoPeople } from "react-icons/io5";

function Section1() {
  const data = [
    {
      icon: <IoPeople />,
      title: "Total Employees",
      count: 15000,
      percentage: "24%",
      color: "#6835f9",
    },
    {
      icon: <IoPeople />,
      title: "New Employees",
      count: 15000,
      percentage: "24%",
      color: "#fe8c4c",
    },
    {
      icon: <IoPeople />,
      title: "Job Applicants",
      count: 15000,
      percentage: "24%",
      color: "#4cbefe",
    },
    {
      icon: <IoPeople />,
      title: "Resigned Employees",
      count: 15000,
      percentage: "24%",
      color: "#fe4c4c",
    },
  ];
  return (
    <div className="flex gap-5">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="text-start rounded-xl p-5"
            style={{
              border: `2px ${item.color} solid`,
            }}
          >
            <div>{item.icon}</div>
            <div>{item.title}</div>

            <div className="flex flex-col">
              <div>{item.count}</div>
              <div>{item.percentage}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section1;
