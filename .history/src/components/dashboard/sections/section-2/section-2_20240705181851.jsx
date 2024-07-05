function Section2() {
  const data = [
    {
      title: "Training And Talent Development",
      content: [
        {
          id: 1,
          title: "Course Catalog",
          subtitle: "Access",
        },
        {
          id: 2,
          title: "Leadership Academy",
          subtitle: "Access",
        },
        {
          id: 3,
          title: "State-Funded Training",
          subtitle: "Access",
        },
        {
          id: 4,
          title: "Harasment Prevention Training",
          subtitle: "Access",
        },
        {
          id: 5,
          title: "Individual Online Courses",
          subtitle: "Access",
        },
        {
          id: 6,
          title: "eTraining Portal",
          subtitle: "Access",
        },
        {
          id: 7,
          title: "Skills Gap Assessment",
          subtitle: "Access",
        },
        {
          id: 8,
          title: "SHRM-CP/SCP Prep Course",
          subtitle: "Access",
        },
      ],
    },
    {
      title: "Personalized HR Support",
      content: [
        {
          id: 9,
          title: "Live Helpline",
          subtitle: "Access",
        },
        {
          id: 10,
          title: "Specialist",
          subtitle: "Access",
        },
        {
          id: 11,
          title: "Reference",
          subtitle: "Access",
        },
        {
          id: 12,
          title: "Costumer Service",
          subtitle: "Access",
        },
      ],
    },
    {
      title: "Self-Serve Resources",
      content: [
        {
          id: 13,
          title: "Forms & Documents",
          subtitle: "Access",
        },
        {
          id: 14,
          title: "Links / Doc",
          subtitle: "Access",
        },
        {
          id: 15,
          title: "Professional HR Management Suite",
          subtitle: "Access",
        },
        {
          id: 16,
          title: "HR FAQS",
          subtitle: "Access",
        },
        {
          id: 17,
          title: "HR Newsletter",
          subtitle: "Access",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <div>
            <h2>{item.title}</h2>
            <ul className="grid grid-cols-4 items-center ">
              {item.content.map((subItem, index) => (
                <li key={subItem.id} className="flex items-center">
                  <img
                    src={`/images/section-2/icons/${index + 1}.svg`}
                    className="w-5 h-5"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
