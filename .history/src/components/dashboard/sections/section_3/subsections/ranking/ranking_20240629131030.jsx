export default function Ranking() {
  const data = [
    {
      image: "",
      name: "John Doe",
      value: 400,
    },
  ];
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-5 py-1">
            <div className="flex items-center gap-5">
              {/*  */}
              <div className="w-4 h-4 rounded-sm"></div>
              <p className="text-black text-sm">{item.name}</p>
            </div>
            <div>
              <p className="font-semibold text-black">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
