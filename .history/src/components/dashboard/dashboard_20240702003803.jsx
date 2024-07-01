import Section1 from "./sections/section_1/section_1";
import Section2 from "./sections/sections_2/section_2";

function DashBoard() {
  return (
    <div className="lg:pr-12 pb-9 pt-10 ">
      <div className=" ">
        <Section1 />
      </div>

      <div className="pl-[5rem] lg:pl-[15rem] overflow-hidden">
        {<Section2 />}
      </div>
    </div>
  );
}

export default DashBoard;
