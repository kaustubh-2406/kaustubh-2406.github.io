import { useInView } from "react-intersection-observer";
import Pill from "../Pill";

// i was trying to make ts work with this setup.. but it gave some weird errors
// please ignore the jsdocs :)

/**
 * @param {{
 *   project: {
 *    title: string,
 *    desc: string,
 *    techs: string[],
 *    links: { type: "primary" | "secondary"  link: string  info: string }[]
 *  }}}
 */
export default function ProjectCard({ project, techs, setTechs }) {
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
    "p-4 h-96 bg-purple-400 rounded-md transition-all duration-150 bg-opacity-30 flex flex-col justify-center";

  const cls = inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";

  return (
    <div ref={ref} className={`${basicCNs} ${cls}`}>
      <h5 className="text-xl mb-2 font-semibold">{project.title}</h5>
      <p className="text-md">{project.desc}</p>

      <div className="my-2 h-32 overflow-hidden">
        <div className="flex sm:hidden flex-wrap gap-1">
          {techs.map((tech) => (
            <Pill content={tech} color={"#20fe"} key={tech} />
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        {project.links.map((p) => (
          <a
            key={p.link + ":" + p.info}
            className="text-red-800 hover:underline"
            href={p.link}
          >
            {p.info}
          </a>
        ))}
      </div>
    </div>
  );
}
