import FeaturedProject from "./FeaturedProject";
import ProjectLine from "./ProjectLine";

import { featuredProjectsData } from "../project-data/featured-projects-data";

export default function FeaturedProjects() {
  const projectsHTML = featuredProjectsData.map((project, idx: number) => (
    <>
      <FeaturedProject
        key={project.description}
        title={project.title}
        description={project.description}
        tools={project.tools}
        githubLink={project.githubLink}
        siteLink={project.siteLink}
      />
      {idx + 1 < featuredProjectsData.length && <ProjectLine />}
    </>
  ));

  return (
    <section className="mt-8">
      {/* TITLE */}
      <div className="border border-[#3a3a3a] bg-[#191919] bg-opacity-50">
        <h3 className="text-[#eeeeee] text-xl font-bold py-1 px-2">FEATURED PROJECTS</h3>
      </div>

      {/* BODY */}
      <div className="text-[#eeeeee] border-l-[1px] border-r-[1px] border-b-[1px]  border-[#3a3a3a] bg-[#191919] bg-opacity-25 ">
        {projectsHTML}
      </div>
    </section>
  );
}
