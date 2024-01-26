import SectionHeader from "./SectionHeader";
import SectionBodyWrapper from "./SectionBodyWrapper";
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
      <SectionHeader title="OTHER PROJECTS" />
      <SectionBodyWrapper>{projectsHTML}</SectionBodyWrapper>
    </section>
  );
}
