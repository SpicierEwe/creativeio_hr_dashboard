import { FaBell, FaFire } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function TopNavBar() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between gap-5 items-start">
      <div className=" flex flex-col gap-2 text-start">
        <h1 className="text-3xl">Good Morning, Eureka</h1>
        <p className="text-xs">Today Aug 22, 2020 | 7:23 PM</p>
      </div>
      <div className="flex gap-3 text-secondary items-center">
        <IoMdSearch size={20} />
        <FaBell size={20} />

        <div>
          <div className="flex gap-3 items-center bg-white p-2 rounded-xl ">
            <div className="w-7 rounded-full overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="hiii"
              />
            </div>
            <p className="font-medium flex items-center gap-1">
              Eureka |
              <div className="flex items-center gap-1">
                <FaFire color="#ffab2a" />
                <p className="text-sm">230</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
