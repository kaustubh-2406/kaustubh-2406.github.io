import React, { useEffect, useState } from "react";
import Pill from "../Pill/index";
import ProjectCard from "./ProjectCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import projects from "../../../data/projects.json";

// create a set of projects and the techs into set and then convert back to array
const t = [
  ...projects.reduce((acc, proj) => {
    proj.techs.forEach((tech) => acc.add(tech));
    return acc;
  }, new Set()),
];

const featuredProjects = projects.filter((proj) => proj.featured);

export default function ProjectAndSkill() {
  const [autoanimate] = useAutoAnimate({ easing: "ease-in", duration: 250 });
  const [interactive, setInteractive] = useState(false);

  const [techs, setTechs] = useState(
    t.map((name) => ({ name, selected: false }))
  );

  const isInteractive = () => {
    const w = window.innerWidth;
    if (w > 624) setInteractive(true);
    else setInteractive(false);
  };

  useEffect(() => {
    window.addEventListener("resize", isInteractive);
    return () => window.removeEventListener("resize", isInteractive);
  }, []);

  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
      <div className="hidden sm:block">
        <div className="sticky top-32 rounded-md">
          <h3 className="text-xl mb-8 font-semibold text-gray-900">
            Technologies
          </h3>
          <div
            ref={autoanimate}
            className="flex gap-3 flex-wrap h-[20rem] overflow-hidden"
          >
            {techs.map((tech) => (
              <Pill
                key={tech.name}
                content={tech.name}
                color={tech.selected ? "#e9d5ff" : "white"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <h3 className="hidden sm:block text-xl mb-8 font-semibold text-gray-900">
          Featured Projects
        </h3>
        <div className="flex flex-col gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard
              interactive={interactive}
              techs={project.techs}
              key={project.title}
              setTechs={setTechs}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
