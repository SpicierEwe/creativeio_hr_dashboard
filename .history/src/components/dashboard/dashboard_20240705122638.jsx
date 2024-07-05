import Section1 from "./sections/section_1/section_1";

function DashBoard() {
  return (
    <div className="lg:pr-12 pb-9 pt-10 ">
      <div className=" ">
        <Section1 />
      </div>

      <div className="pl-[5rem] lg:pl-[15rem] overflow-hidden"></div>
    </div>
  );
}

export default DashBoard;
