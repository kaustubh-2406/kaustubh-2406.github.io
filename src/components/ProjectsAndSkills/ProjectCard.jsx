import { useInView } from "react-intersection-observer";
import Pill from "../Pill";

// i was trying to make ts work with this setup.. but it gave some weird errors
// please ignore the jsdocs :)

/**
 * @param {{
 *   project: {
 *    interactive: boolean,
 *    title: string,
 *    desc: string,
 *    techs: string[],
 *    links: { type: "primary" | "secondary"  link: string  info: string }[]
 *  }}}
 */
export default function ProjectCard({ interactive, project, techs, setTechs }) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    onChange: (inView) => {
      if (!inView) return;
      setTechs((techs) => {
        return [
          ...techs
            .filter((x) => project.techs.includes(x.name))
            .map((proj) => ({ name: proj.name, selected: true })),
          ...techs
            .filter((x) => !project.techs.includes(x.name))
            .map((proj) => ({ name: proj.name, selected: false })),
        ];
      });
    },
  });

  const basicCNs =
    "p-4 md:h-96 bg-purple-400 rounded-md transition-all duration-150 bg-opacity-30 flex flex-col justify-center";

  let cls = "";

  if (interactive) {
    cls = inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
  }

  return (
    <div ref={ref} className={`${basicCNs} ${cls} bg-purple-500`}>
      <h5 className="text-xl mb-2 font-semibold">{project.title}</h5>
      <p className="text-md">{project.desc}</p>

      <div className="my-2 overflow-hidden">
        <p className="flex sm:hidden my-2 font-semibold">Techs Used:</p>
        <div className="flex sm:hidden flex-wrap gap-1">
          {techs.map((tech) => (
            <Pill content={tech} color={"white"} key={tech} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {project.links.map((p) => (
          <a
            target="_blank"
            key={p.link + ":" + p.info}
            className={
              p.type == "primary"
                ? "hover:scale-105 bg-[#4B4453] text-white px-4 py-2 rounded-md"
                : "hover:scale-105 bg-purple-200 text-black px-4 py-2 rounded-md"
            }
            href={p.link}
          >
            {p.info}
          </a>
        ))}
      </div>
    </div>
  );
}
