import RecommendedCourses from "./sections/recommended_courses/recommended_courses";
import Courses from "./sections/side_nav/courses/courses";
import Reminder from "./sections/side_nav/reminder/reminder";

import TopNavBar from "./sections/top_nav_bar/top_nav_bar";
function DashBoard() {
  return (
    <div>
      {/* top nav bar */}
      <TopNavBar />

      <Reminder />

      {/* Coureses */}
      <Courses />
      <RecommendedCourses />
    </div>
  );
}

export default DashBoard;
