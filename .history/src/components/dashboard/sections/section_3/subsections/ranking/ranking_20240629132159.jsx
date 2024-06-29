export default function Ranking() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      value: 400,
    },
  ];
  return (
    <div className="">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-5 py-1 justify-evenly"
          >
            <div className="flex items-center gap-5">
              <p>{index + 1}</p>
              {/*  */}
              <div className=" aspect-square rounded-full overflow-hidden">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={item.image}
                  alt="profile"
                />
              </div>
              <p className="text-black text-sm font-semibold">{item.name}</p>
            </div>
            <div>
              <p className="">{item.value} Score</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
