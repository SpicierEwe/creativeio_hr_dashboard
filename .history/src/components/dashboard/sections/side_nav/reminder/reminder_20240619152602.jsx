import { MdPerson } from "react-icons/md";

function Reminder() {
  return (
    <div>
      {/* container 1 */}
      <div className="mt-5 p-5 flex flex-col items-start gap-4 text-start bg-red-300">
        <div className="w-11">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Reminder : One o one course</p>
          <h2 className="text-md">UX-Strategy: How to Reach The Next Level</h2>
        </div>

        <div className="flex items-center gap-2.5 text-xs">
          <MdPerson />
          <p>by Rose Poole</p>
        </div>

        <div className="flex items-center flex-col gap-1.5  w-full">
          <button className="p-1 py-2 px-3 bg-accent rounded-xl text-sm">
            Available at 7:30 AM
          </button>
          <h2 className="text-sm">00 : 06 : 23</h2>
        </div>
      </div>
    </div>
  );
}

export default Reminder;
