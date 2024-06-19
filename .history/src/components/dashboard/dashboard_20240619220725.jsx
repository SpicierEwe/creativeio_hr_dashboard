import RecommendedCourses from "./sections/recommended_courses/recommended_courses";
import Courses from "./sections/side_nav/courses/courses";
import Reminder from "./sections/side_nav/reminder/reminder";
import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";
function DashBoard() {
  return (
    <div className="flex max-w-screen-2xl w-screen">
      {/* side nav */}

      <div className="w-fit lg:w-[15%]">
        <SideNav />
      </div>

      <div className="p-5 w-full pt-10 lg:pt-20 ml-14 mg:ml-0 lg:pr-10">
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
