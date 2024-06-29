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
    <div className="grid">
      {data.map((item, index) => {
        return (
          <div key={index} className="bg-white shadow-md rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[#f7f7f7] p-3 rounded-lg">{item.icon}</div>
                <p className="text-lg font-semibold ml-3">{item.title}</p>
              </div>
              <div className="flex items-center">
                <p className="text-3xl font-semibold">{item.count}</p>
                <p className="text-sm ml-3 text-[#7f7f7f]">{item.percentage}</p>
              </div>
            </div>
            <div className="h-1 bg-[#f7f7f7] mt-3">
              <div
                className="h-full bg-[#6835f9]"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section1;
