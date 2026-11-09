import { ProjectRepositoryLink } from "./ProjectRepositoryLink.jsx";
import { ProjectAward } from "./ProjectAward.jsx";
import { projectPageHref } from "../../utils/links.js";

export function ProjectListItem({ project }) {
  const { id, repository, order, title, description, kicker, cardTools, award } = project;

  return (
    <article
      className="compact-project project-item"
      data-category={project.categories.join(" ")}
      data-project={repository}
      aria-labelledby={`${id}-title`}
    >
      <span className="compact-number" aria-hidden="true">{String(order).padStart(2, "0")}</span>
      <div className="compact-copy">
        <p className="eyebrow">{kicker}</p>
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{description}</p>
        <ProjectAward award={award} />
        <div className="compact-links">
          <a className="case-link" data-case={id} href={projectPageHref(id)}>
            Project details <span aria-hidden="true">→</span>
          </a>
          <ProjectRepositoryLink project={project} className="source-link" />
        </div>
      </div>
      <span className="compact-tech">{cardTools.join(" · ")}</span>
    </article>
  );
}
