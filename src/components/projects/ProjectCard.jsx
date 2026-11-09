import { ProjectRepositoryLink } from "./ProjectRepositoryLink.jsx";
import { ProjectAward } from "./ProjectAward.jsx";
import { ProjectVisual } from "./ProjectVisual.jsx";
import { projectPageHref } from "../../utils/links.js";

export function ProjectCard({ project }) {
  const { id, repository, title, description, kicker, facts, cardTools, award } = project;

  return (
    <article
      className={`project-card project-item${id === "tesla" ? " poster-project" : ""}`}
      data-category={project.categories.join(" ")}
      data-project={repository}
      aria-labelledby={`${id}-title`}
    >
      <ProjectVisual id={id} />
      <div className="project-content">
        <div className="project-meta"><span>{kicker}</span></div>
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{description}</p>
        <ProjectAward award={award} />
        <div className="fact-line">
          {facts.map((fact) => <span key={fact}>{fact}</span>)}
        </div>
        <div className="tech-tags" role="group" aria-label="Technologies">
          {cardTools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <div className="project-actions">
          <a className="case-link" data-case={id} href={projectPageHref(id)}>
            Read case study <span aria-hidden="true">→</span>
          </a>
          <ProjectRepositoryLink project={project} className="source-link" />
        </div>
      </div>
    </article>
  );
}
