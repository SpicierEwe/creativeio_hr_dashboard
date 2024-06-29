import { IoPeople } from "react-icons/io5";
import { RiArrowUpSFill } from "react-icons/ri";

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
    <div className="hide-scrollbar flex gap-9 overflow-x-auto hide-scroll w-full p-5 pl-10  xl:grid grid-cols-4 xl:pr-5">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="text-start rounded-3xl p-5 bg-primary flex flex-col items-start w-[20rem]"
            style={{
              border: `2px ${item.color} solid`,
              // fixed height
            }}
          >
            <div
              className="text-3xl"
              style={{
                color: item.color,
              }}
            >
              {item.icon}
            </div>
            <div className=" mt-2 text-sm  whitespace-nowrap">{item.title}</div>
            <div className="w-full flex gap-3 mt-2  items-center justify-between">
              <p
                className="text-3xl font-bold"
                style={{
                  color: item.color,
                }}
              >
                {item.count}
              </p>
              <div className="flex gap-1 items-center  bg-[#ebf9ee] text-[#31c656] w-fit rounded-xl py-1 px-2">
                <RiArrowUpSFill />
                <p className="text-[#31c656] text-sm">{item.percentage}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section1;