import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";

function DashBoard() {
  return (
    <div className="flex">
      {/* side nav */}
      <SideNav />
      <div className="p-5">
        {/* top nav bar */}
        <TopNavBar />

        <Reminer />
      </div>
    </div>
  );
}

export default DashBoard;
