import { FaBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function TopNavBar() {
  return (
    <div className="">
      <div className="p-5 flex flex-col gap-2 text-start">
        <h1 className="text-3xl">Good Morning, Eureka</h1>
        <p className="text-xs">Today Aug 22, 2020 | 7:23 PM</p>
      </div>
      <div>
        <IoMdSearch />
        <FaBell />
      </div>
    </div>
  );
}

export default TopNavBar;
