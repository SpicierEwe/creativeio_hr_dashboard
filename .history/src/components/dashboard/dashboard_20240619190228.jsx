import RecommendedCourses from "./sections/recommended_courses/recommended_courses";
import Courses from "./sections/side_nav/courses/courses";
import Reminder from "./sections/side_nav/reminder/reminder";
import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";
function DashBoard() {
  return (
    <div className="flex max-w-screen-2xl w-screen overflow-x-hidden">
      {/* side nav */}

      <div className="w-fit">
        <SideNav />
      </div>

      <div className="p-5 pl-3 md:p-10   w-full">
        {/* top nav bar */}
        <TopNavBar />

        <Reminder />

        {/* Coureses */}
        <Courses />
        <RecommendedCourses />
      </div>
    </div>
  );
}

export default DashBoard;
