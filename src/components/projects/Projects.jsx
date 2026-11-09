import { projectCards } from "../../data/projectCards.js";
import { ProjectCard } from "./ProjectCard.jsx";

const featuredProjects = projectCards.filter((project) => project.featured);

export function Projects() {
  return (
    <section className="work-section wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow section-kicker">02 / PROJECTS</p>
          <h2 id="work-title">Project highlights.</h2>
        </div>
      </div>
      <div className="project-grid featured-projects">
        {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="all-projects-action">
        <a className="button button-primary" href="./projects.html">
          View all projects <span aria-hidden="true">→</span>
        </a>
        <p>{projectCards.length} projects across analytics, data engineering, machine learning and hackathons.</p>
      </div>
    </section>
  );
}
