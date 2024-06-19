import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";

function DashBoard() {
  return (
    <div className="flex">
      {/* side nav */}
      <SideNav />
      <div>
        {/* top nav bar */}
        <TopNavBar />
        {/* main content */}
        <div className="p-5 flex flex-col gap-3 text-start">
          <h1 className="text-3xl">Good Morning, Eureka</h1>
          <p className="text-xs">Today Aug 22, 2020 | 7:23 PM</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
