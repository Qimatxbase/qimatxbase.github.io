import { useState } from 'react';
import { projectCards } from '../data/projectCards.js';
import { filterProjects } from '../utils/projects.js';
import { ProjectCard } from '../components/projects/ProjectCard.jsx';
import { ProjectListItem } from '../components/projects/ProjectListItem.jsx';
import { ProjectFilters } from '../components/projects/ProjectFilters.jsx';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProjects = filterProjects(projectCards, activeFilter);
  const featuredProjects = visibleProjects.filter((project) => project.featured);
  const otherProjects = visibleProjects.filter((project) => !project.featured);

  return (
    <section className="catalogue-page wrap" id="top" aria-labelledby="projects-title">
      <a className="text-link page-back-link" href="./index.html#work">← Back to portfolio</a>
      <div className="catalogue-heading">
        <p className="eyebrow section-kicker">PROJECT CATALOGUE</p>
        <h1 id="projects-title">All projects.</h1>
        <p>Explore {projectCards.length} projects in analytics, data engineering, machine learning and applied research.</p>
      </div>
      <ProjectFilters projects={projectCards} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      {featuredProjects.length > 0 && (
        <div className="project-grid">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      )}
      {otherProjects.length > 0 && (
        <div className="more-work">
          {otherProjects.map((project) => <ProjectListItem key={project.id} project={project} />)}
        </div>
      )}
      <p className="work-note">Diagrams describe project workflows. Private project code can be discussed on request.</p>
    </section>
  );
}
