import OtherProject from "./OtherProject";
import ProjectLine from "./ProjectLine";

import { otherProjectsData } from "../project-data/other-projects-data";

export default function OtherProjects() {
  const projectsHTML = otherProjectsData.map((project, idx: number) => (
    <>
      <OtherProject
        key={project.title}
        title={project.title}
        tools={project.tools}
        githubLink={project.githubLink}
        siteLink={project.siteLink}
      />
      {idx + 1 < otherProjectsData.length && <ProjectLine />}
    </>
  ));

  return (
    <section className="mt-8">
      {/* TITLE */}
      <div className="border border-[#3a3a3a] bg-[#191919] bg-opacity-50">
        <h3 className="text-[#eeeeee] text-xl font-bold py-1 px-2">OTHER PROJECTS</h3>
      </div>
      {/* BODY */}
      <div className="text-[#eeeeee] border-l-[1px] border-r-[1px] border-b-[1px]  border-[#3a3a3a] bg-[#191919] bg-opacity-25 ">
        {/* PROJECT */}
        {projectsHTML}
      </div>
    </section>
  );
}
