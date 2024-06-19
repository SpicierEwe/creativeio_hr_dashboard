import { FaBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function TopNavBar() {
  return (
    <div className="p-5 flex gap-5 items-center">
      <div className=" flex flex-col gap-2 text-start">
        <h1 className="text-3xl">Good Morning, Eureka</h1>
        <p className="text-xs">Today Aug 22, 2020 | 7:23 PM</p>
      </div>
      <div className="flex gap-3 text-tertiary">
        <IoMdSearch />
        <FaBell />
      </div>
    </div>
  );
}

export default TopNavBar;
