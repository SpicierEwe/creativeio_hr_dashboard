import { useState } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaCalendar, FaWallet } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { PiCircleNotchDuotone } from "react-icons/pi";
import { RiArrowUpSFill } from "react-icons/ri";

function Section1() {
  const data = [
    {
      icon: <PiCircleNotchDuotone size={45} />,
      title: "Total Cost",
      count: "$15000",
      percentage: "24%",

      drop: false,
    },
    {
      icon: <BsFillTrophyFill />,
      title: "Total Sales",
      count: "$15000",
      percentage: "24%",

      drop: false,
    },
    {
      icon: <FaCalendar />,
      title: "This Week",
      count: "$15000",
      percentage: "24%",

      drop: false,
    },
    {
      icon: <AiFillPieChart />,
      title: "Revenue",
      count: "$15000",
      percentage: "24%",

      drop: true,
    },
    {
      icon: <FaWallet />,
      title: "$1250",
      count: "Last Payment",
      percentage: "24%",

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
    <div className=" pl-[5rem] lg:pl-[15rem]">
      <div className="flex">
        <div className="text-start">
          <h1 className="text-3xl">Marketing Dashboard</h1>
          <h2>
            Home / <span className="text-secondary">Dashboard</span>
          </h2>
        </div>
      </div>

      <div className="hide-scrollbar flex gap-5 overflow-x-auto hide-scroll w-full p-5 px-0   xl:grid grid-cols-5 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`text-start rounded-3xl p-5 bg-primary flex flex-row items-center gap-5 text-white cursor-pointer ${
                selectedIndex === index ? `shadow-md` : ""
              } transition-all duration-200 ease-in-out `}
              style={{
                backgroundColor: `${
                  selectedIndex === index ? "#0bb885" : "#1c243f"
                }`,
              }}
            >
              <div
                className="text-3xl"
                style={{
                  color: "#48caa3",
                }}
              >
                {item.icon}
              </div>

              {/* c2 */}
              <div>
                <div className=" mt-2 text-md font-semibold  whitespace-nowrap">
                  {item.title}
                </div>
                <div className="w-full flex gap-3 mt-1  items-center justify-between">
                  <p
                    className="text-md"
                    style={{
                      color: selectedIndex === index ? "white" : "#646c77",
                    }}
                  >
                    {item.count}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section1;
