import { useState } from "react";
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
      drop: false,
    },
    {
      icon: <IoPeople />,
      title: "New Employees",
      count: 15000,
      percentage: "24%",
      color: "#fe8c4c",
      drop: false,
    },
    {
      icon: <IoPeople />,
      title: "Job Applicants",
      count: 15000,
      percentage: "24%",
      color: "#4cbefe",
      drop: false,
    },
    {
      icon: <IoPeople />,
      title: "Resigned Employees",
      count: 15000,
      percentage: "24%",
      color: "#fe4c4c",
      drop: true,
    },
  ];

  function hexToRGBA(hex, opacity) {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r},${g},${b},${opacity})`;
  }

  const item = {
    color: "#ff5733", // Example color
  };

  const boxShadowColor = hexToRGBA(item.color, 0.3);
  const boxShadow = `0 4px 10px -3px ${boxShadowColor}`;
  console.log(boxShadow);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="hide-scrollbar flex gap-5 lg:gap-10 overflow-x-auto hide-scroll w-full p-5 pl-0   xl:grid grid-cols-4  ml-[5rem] lg:ml-[15rem]">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`text-start rounded-3xl p-5 bg-primary flex flex-col items-start cursor-pointer ${
              selectedIndex === index ? `shadow-md` : ""
            } transition-all duration-200 ease-in-out`}
            style={{
              border: `2px ${
                selectedIndex === index ? item.color : "transparent"
              } solid`,
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
              <div
                className="flex gap-1 items-center w-fit rounded-xl py-1 px-2"
                style={{
                  color: item.drop ? "red" : "green",
                  backgroundColor: item.drop
                    ? "rgba(254, 76, 76, 0.1)"
                    : "rgba(49, 198, 86, 0.1)",
                }}
              >
                {!item.drop ? (
                  <RiArrowUpSFill className="text-[#31c656] text-lg" />
                ) : (
                  <RiArrowUpSFill className="text-red-500 text-lg rotate-180" />
                )}
                <p className="text-sm">{item.percentage}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section1;
