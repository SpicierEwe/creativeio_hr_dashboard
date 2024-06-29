export default function Ranking() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      value: 400,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Robert Fox",
      value: 90,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex ",
      value: 80,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      value: 70,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alice Xavier",
      value: 70,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ron Lee",
      value: 70,
    },
  ];
  return (
    <div className="flex flex-col gap-5 pb-7 text-left">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-5 py-1 justify-between p-5"
          >
            <div className="flex items-center gap-5">
              {/* index */}
              {index < 3 ? (
                <img src={`/images/${index + 1}`} />
              ) : (
                <p>{index + 1}</p>
              )}

              {/*  */}
              <div className=" aspect-square rounded-full overflow-hidden">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src={item.image}
                  alt="profile"
                />
              </div>
              <p className="text-black  font-semibold line-clamp-1">
                {item.name}
              </p>
            </div>
            <div>
              <p className="text-black text-sm whitespace-nowrap">
                {item.value} Score
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
