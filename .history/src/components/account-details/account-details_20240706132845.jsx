function AccountDetails() {
  return (
    <div className="lg:pr-12 pb-9 pt-10 ml-20 xl:ml-56 ">
      {/* header */}
      <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-5 w-full ">
        <div className="text-start flex flex-col gap-2">
          <h1 className="text-xl text-accent">
            <span className="font-semibold">Hello,</span> Welcome back Gerald!
          </h1>
        </div>
        <h2 className="text-[#6c747d]">
          Home - <span className="text-accent">Dashboard</span>
        </h2>
      </div>
    </div>
  );
}

export default AccountDetails;
