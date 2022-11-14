const skills = [
  { score: 4, title: "Frontend Developement" },
  { score: 4, title: "Content Managment Systems" },
  { score: 3, title: "User Interface Design" },
  { score: 2, title: "User Experience Design" },
  { score: 4, title: "Backend Development" },
  { score: 3.5, title: "Databases" },
  { score: 3.5, title: "REST API" },
  { score: 2.5, title: "GraphQL" },
  { score: 3.5, title: "Command Line" },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center items-center w-full gap-4">
      {skills.map((s) => (
        <div
          key={s.title}
          className="group flex flex-col justify-center items-center w-40 h-40 bg-purple-200 rounded-md bg-gradient-to-br from-purple-200 via-purple-300  to-purple-400"
        >
          <div className="h-auto w-40 p-2 scale-100 flex flex-col justify-center items-center group-hover:scale-80">
            <p className="text-center font-semibold">{s.title}</p>
            <p className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-75 ease-in">
              {s.score} / 5
            </p>
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
