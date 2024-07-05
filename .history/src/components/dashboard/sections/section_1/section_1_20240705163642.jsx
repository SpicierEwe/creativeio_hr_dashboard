import { useState } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaCalendar, FaPlus, FaWallet } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiCircleNotchDuotone } from "react-icons/pi";
import { RiArrowUpSFill } from "react-icons/ri";

function Section1() {
  const data = [
    {
      title: "2000+",
      count: "client success",

      drop: false,
    },
    {
      title: "26 Yrs",
      count: "consultant experience",

      drop: false,
    },
    {
      title: "120+",
      count: "countries served",

      drop: false,
    },
    {
      title: "$230k",
      count: "saving membership",

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

  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <div className=" pl-[5rem] lg:pl-[15rem]">
      {/* header */}
      <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-5 w-full ">
        <div className="text-start flex flex-col gap-2">
          <h1 className="text-xl text-white">
            <span className="font-semibold">Hello,</span> Welcome back Gerald!
          </h1>
        </div>
        <h2 className="text-[#6c747d]">
          Home - <span className="text-accent">Dashboard</span>
        </h2>
      </div>

      <div className="hide-scrollbar flex gap-5 overflow-x-auto hide-scroll w-full p-5 px-0 mt-7  xl:grid grid-cols-4 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`  p-5 bg-primary py-10 flex flex-row items-center gap-3 text-white cursor-pointer ${
                selectedIndex === index ? `shadow-md scale-[1.2]` : ""
              } transition-all duration-200 ease-in-out bg-cover bg-center `}
              style={{
                backgroundImage: `url("/images/section-1/bgs/${
                  index + 1
                }.svg")`,
              }}
            >
              <div className="">
                <img
                  src={`/images/section-1/icons/${index + 1}.svg`}
                  className="shrink-0 w-16 h-16"
                />
              </div>

              {/* c2 */}
              <div className="text-center whitespace-nowrap">
                <div className=" mt-2 text-3xl font-semibold  whitespace-nowrap">
                  {item.title}
                </div>
                <div className="w-full flex gap-3 mt-1   items-center justify-between">
                  <p className="text-xs uppercase">{item.count}</p>
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
