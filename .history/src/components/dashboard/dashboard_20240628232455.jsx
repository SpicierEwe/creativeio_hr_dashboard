import Section1 from "./sections/section_1/section_1";
import Section2 from "./sections/sections_2/section_2";

function DashBoard() {
  return (
    <div>
      <div className=" ml-[5rem] lg:ml-[15rem] ">
        {" "}
        <Section1 />
      </div>

      <div className="">{/* <Section2 /> */}</div>
    </div>
  );
}

export default DashBoard;
