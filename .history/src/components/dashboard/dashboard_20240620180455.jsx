import RecommendedCourses from "./sections/recommended_courses/recommended_courses";
import Courses from "./sections/side_nav/courses/courses";
import Reminder from "./sections/side_nav/reminder/reminder";
import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";
function DashBoard() {
  return (
    <div className="">
      {/* side nav */}

      <div className="p-5 w-full pt-10 lg:pt-20 ml-14  lg:pr-10 lg:ml-[9%] xl:ml-14">
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
