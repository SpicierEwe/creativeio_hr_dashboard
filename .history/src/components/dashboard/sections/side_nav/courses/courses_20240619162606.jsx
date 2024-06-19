// src/components/Courses.js
import React from "react";
import { FaClock, FaStar, FaUser } from "react-icons/fa";

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
      <div className="text-sm mt-5 flex gap-3">
        {nav.map((item, index) => (
          <button key={index} className="">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Courses;
