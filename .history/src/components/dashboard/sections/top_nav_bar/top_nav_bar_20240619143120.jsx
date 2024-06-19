import { FaBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function TopNavBar() {
  return (
    <div className="p-5 flex flex-col gap-5 items-start">
      <div className=" flex flex-col gap-2 text-start">
        <h1 className="text-3xl">Good Morning, Eureka</h1>
        <p className="text-xs">Today Aug 22, 2020 | 7:23 PM</p>
      </div>
      <div className="flex gap-3 text-secondary items-center">
        <IoMdSearch />
        <FaBell />

        <div>
          <div className="flex gap-3 items-center bg-red-500 p-1 rounded-lg ">
            <div className="w-7 rounded-full overflow-hidden">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p>Eureka</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
