// src/components/Courses.js
import React from "react";
import { FaClock, FaStar, FaUser } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdPerson } from "react-icons/md";

const coursesData = [
  {
    id: 1,
    title: "Master Digital Product Design: UX Research & UI Design",
    description:
      "A complete design education for product designers: Research the user experience, the",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Elijah Snyder",
    progress: 75,
  },
  {
    id: 2,
    title: "Complete Product Design From Home Course",
    description: "Learn Product Design From the Ground Up",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Callie Carson",
    progress: 35,
  },
  {
    id: 3,
    title: "UX-Strategy: How to Reach The Next Level",
    description:
      "A complete design education for product designers: Research the user experience, the...",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Linnie Curtis",
    progress: 0,
  },
];

const nav = ["Regular (4)", "One o one (2)"];

const RecommendedCourses = () => {
  return (
    <div className="p-5 mt-7 flex flex-col items-start bg-white rounded-xl">
      {/* top container */}
      <div className="flex justify-between items-start text-start">
        <h2 className="w-[70%]">Recommended Courses</h2>
        <p>See all {">"}</p>
      </div>

      {/* cards */}

      <div className="mt-10 w-full flex flex-col gap-10">
        {coursesData.map((course) => (
          <div className=" rounded-2xl w-fit flex flex-col   mx-auto items-center gap-4 text-start justify-between  ">
            {/* container 1 === */}
            <div className=" flex flex-col w-60  border ">
              {/* image */}
              <div className="w-full aspect-video ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="aspect-video object-cover shrink-0"
                />
              </div>
              <div className="flex flex-col gap-2 w-full mt-5 ">
                <h2 className="text-sm">{course.title}</h2>
                <p className="text-xs">{course.description}</p>

                {/* bottom content */}
                <div className="mt-3  whitespace-nowrap flex items-center gap-x-5 gap-y-2 text-xs text-primary flex-wrap">
                  <div className="flex gap-2 items-center ">
                    <FaClock className="text-secondary" />
                    {course.hours} • {course.lectures}
                  </div>
                  {/* level */}

                  <div className="flex gap-2 items-center">
                    <IoIosStar className="text-secondary" />

                    <h2> {course.level}</h2>
                  </div>
                  {/* person */}
                  <div className="flex items-center   justify-start  self-start  gap-2 ">
                    <MdPerson />
                    <h2>by Rose Poole</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
