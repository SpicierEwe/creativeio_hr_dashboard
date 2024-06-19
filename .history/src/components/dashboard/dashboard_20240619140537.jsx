import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";

function DashBoard() {
  return (
    <div>
      {/* side nav */}
      <SideNav />
      <div>
        {/* top nav bar */}
        <TopNavBar />
        {/* main content */}
        <div className="p-5">
          <h1 className="text-3xl">Dashboard</h1>
          <p className="text-base">Welcome to your dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
