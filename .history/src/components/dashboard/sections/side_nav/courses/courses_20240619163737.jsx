// src/components/Courses.js
import React from "react";
import { FaClock, FaStar, FaUser } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const coursesData = [
  {
    id: 1,
    title: "Master Digital Product Design: UX Research & UI Design",
    description:
      "A complete design education for product designers: Research the user experience, the...",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Elijah Snyder",
    progress: 75,
  },
  //   {
  //     id: 2,
  //     title: "Complete Product Design From Home Course",
  //     description: "Learn Product Design From the Ground Up",
  //     hours: "25.5 total hour",
  //     lectures: "54 lectures",
  //     level: "Intermediate",
  //     author: "Callie Carson",
  //     progress: 35,
  //   },
  //   {
  //     id: 3,
  //     title: "UX-Strategy: How to Reach The Next Level",
  //     description:
  //       "A complete design education for product designers: Research the user experience, the...",
  //     hours: "25.5 total hour",
  //     lectures: "54 lectures",
  //     level: "Intermediate",
  //     author: "Linnie Curtis",
  //     progress: 0,
  //   },
];

const nav = ["Regular (4)", "One o one (2)"];

const Courses = () => {
  return (
    <div className="p-5 mt-7 flex flex-col items-start bg-red-100">
      <h2>My Courses</h2>
      <div className="text-xs mt-5 flex gap-3">
        {/* top nav */}
        {nav.map((item, index) => (
          <button key={index} className="">
            {item}
          </button>
        ))}
      </div>

      {/* cards */}

      <div className="mt-10">
        {coursesData.map((course) => (
          <div className=" rounded-2xl flex flex-col md:flex-row   items-center gap-4 text-start ">
            {/* container 1 === */}
            <div className=" flex flex-col md:flex-row md:w-[40%]  gap-3  ">
              <div className="w-11">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-md">{course.title}</h2>
                <p className="text-sm">{course.description}</p>
                <div className="mt-3 flex items-center gap-5 text-sm text-primary">
                  <div className="flex gap-1">
                    <FaClock />
                    {course.hours}
                  </div>
                  <div>* {course.lectures}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
