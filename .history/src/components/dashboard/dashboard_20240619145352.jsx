import Reminder from "./sections/side_nav/reminder/reminder";
import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";

function DashBoard() {
  return (
    <div className="flex w-screen">
      {/* side nav */}

      <div className="w-[30%]">
        <SideNav />
      </div>

      <div className="p-5">
        {/* top nav bar */}
        <TopNavBar />

        <Reminder />
      </div>
    </div>
  );
}

export default DashBoard;
