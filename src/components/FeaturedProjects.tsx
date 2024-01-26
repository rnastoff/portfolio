import SectionHeader from "./SectionHeader";
import SectionBodyWrapper from "./SectionBodyWrapper";
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
      <SectionHeader title="FEATURED PROJECTS" />
      <SectionBodyWrapper>{projectsHTML}</SectionBodyWrapper>
    </section>
  );
}
