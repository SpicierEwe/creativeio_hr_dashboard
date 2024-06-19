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

const Courses = () => {
  return (
    <div className="p-6 bg-green-100 items-start text-start">
      <h2 className="text-lg mb-4">My Courses</h2>
      <div className="flex mb-4">
        <div className="mr-4">Regular (4)</div>
        <div>One o one (2)</div>
      </div>
      <div className="border-b mb-4"></div>
      <div className="space-y-4">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="flex flex-col md:flex-row items-start gap-5 justify-between  bg-white rounded-lg shadow-md"
          >
            {/* container 2 */}
            <div className="flex flex-col md:flex-row items-start gap-3 ">
              <div className="w-16 h-16 bg-red-400 rounded-lg"></div>
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <div className="flex items-center text-gray-500 text-sm space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <FaClock />
                    <span>{course.hours}</span>
                  </div>
                  <div>{course.lectures}</div>
                  <div className="flex items-center space-x-1">
                    <FaStar />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUser />
                    <span>by {course.author}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* container 2 */}
            <div className="text-right bg-red-100">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {course.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
