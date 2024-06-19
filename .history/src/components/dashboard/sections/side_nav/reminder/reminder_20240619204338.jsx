import { MdPerson } from "react-icons/md";

function Reminder() {
  return (
    <div>
      {/* container 1 */}
      <div className="mt-5 p-5 rounded-2xl flex flex-col lg:flex-row   lg:items-center gap-4 text-start bg-white">
        {/* container 1 === */}
        <div className=" flex flex-col lg:flex-row lg:w-[40%]  gap-3  ">
          <div className="w-11">
            <img src="/images/Illustration.svg" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Reminder : One o one course</p>
            <h2 className="text-sm">
              UX-Strategy: How to Reach The Next Level
            </h2>
          </div>
        </div>

        {/* container 2===== */}
        <div className="flex items-center   lg:mt-10  justify-start  self-start lg:w-[20%]  gap-2.5 text-xs ">
          <MdPerson />
          <p>by Rose Poole</p>
        </div>

        {/* container 3 ===== */}
        <div className="flex items-end self-start lg:self-end   lg:w-[40%]  flex-col gap-1.5  ">
          <div className="flex items-center    flex-col gap-1.5  ">
            <button className="p-1 w-fit h-fit py-2 px-3 bg-accent rounded-xl text-sm">
              Available at 7:30 AM
            </button>
            <h2 className="text-sm">00 : 06 : 23</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reminder;
