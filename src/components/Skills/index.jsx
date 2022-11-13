const skills = [
  { title: "Frontend Developement" },
  { title: "Content Managment Systems" },
  { title: "User Interface Design" },
  { title: "User Experience" },
  { title: "Basics Of Backend Development" },
  { title: "Databases" },
  { title: "REST API" },
  { title: "GraphQL" },
  { title: "Command Line" },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center items-center w-full gap-4">
      {skills.map((s) => (
        <div
          key={s.title}
          className="group flex flex-col justify-center items-center w-40 h-40 bg-purple-200 rounded-md"
        >
          <div className="h-auto w-40 p-2 scale-100 flex justify-center items-center group-hover:scale-80">
            <p className="text-center font-semibold">{s.title}</p>
          </div>

          {/* description part to figure out...
          <div className="h-full bg-white w-40 px-2 hidden group-hover:flex justify-center items-center">
            <p className="text-center">Description</p>
          </div> */}
        </div>
      ))}
    </div>
  );
}
