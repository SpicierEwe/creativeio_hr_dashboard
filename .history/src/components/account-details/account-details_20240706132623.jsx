import Section2 from "./sections/section-2/section-2";
import Section1 from "./sections/section_1/section_1";

function AccountDetails() {
  return (
    <div className="lg:pr-12 pb-9 pt-10 ">
      <div className=" ">
        <Section1 />
      </div>

      <div className="pl-[5rem] lg:pl-[15rem] overflow-hidden mt-20">
        <Section2 />
      </div>
    </div>
  );
}

export default DashBoard;
