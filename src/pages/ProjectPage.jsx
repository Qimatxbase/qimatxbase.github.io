import { useEffect } from 'react';
import { caseStudies } from '../data/caseStudies.js';
import { architectures } from '../data/architectures.js';
import { profile } from '../data/profile.js';
import { projectContactHref } from '../utils/links.js';
import { ExternalLink } from '../components/ui/ExternalLink.jsx';
import { ArchitecturePreview } from '../components/projects/ArchitecturePreview.jsx';
import { PosterPreview } from '../components/projects/PosterPreview.jsx';
import { ProjectRepositoryLink } from '../components/projects/ProjectRepositoryLink.jsx';

function CaseSection({ title, children, className = '' }) {
  return (
    <section className={`case-section ${className}`.trim()}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectPage({ id }) {
  const project = Object.prototype.hasOwnProperty.call(caseStudies, id) ? caseStudies[id] : null;
  const architecture = project ? architectures[id] : null;

  useEffect(() => {
    document.title = `${project ? project.title : 'Project not found'} — ${profile.name}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = project ? project.summary : 'Explore the complete project catalogue.';
    }
  }, [project]);

  if (!project) {
    return (
      <section className="project-page wrap project-not-found" aria-labelledby="case-title">
        <p className="eyebrow">PROJECTS</p>
        <h1 id="case-title">Project not found.</h1>
        <p>This project link is unavailable. Browse the catalogue to find a case study.</p>
        <a className="button button-primary" href="./projects.html">View all projects</a>
      </section>
    );
  }

  const contactHref = projectContactHref(profile.email, project.title);

  return (
    <article className="project-page wrap" aria-labelledby="case-title">
      <nav className="case-navigation" aria-label="Project navigation">
        <a className="text-link" href="./projects.html"><span aria-hidden="true">←</span> All projects</a>
        <a className="text-link" href="./index.html#work">Back to featured work</a>
      </nav>
      <header className="case-page-header">
        <p className="eyebrow" id="case-kicker">{project.kicker}</p>
        <h1 id="case-title">{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-context">{project.context.map((context) => <span key={context}>{context}</span>)}</div>
        <ProjectRepositoryLink project={project} className="case-repository-link" />
      </header>
      <div id="case-body">
        {project.award && (
          <CaseSection title="Recognition" className="case-award">
            <p className="award-title">{project.award.title}</p>
            <p>{project.award.detail}</p>
            <ExternalLink className="case-code-link" href={project.award.certificate}>View certificate PDF ↗</ExternalLink>
          </CaseSection>
        )}
        {project.poster && <CaseSection title="Project poster" className="case-poster"><PosterPreview /></CaseSection>}
        {id === 'nsw' && (
          <CaseSection title="Dashboard view" className="application-preview">
            <img src="./assets/nsw-dashboard.png" alt="NSW Road Safety Dashboard with coordinated filters and crash reporting charts." loading="lazy" />
          </CaseSection>
        )}
        {architecture && (
          <CaseSection title="Architecture" className="case-architecture">
            <p className="architecture-flow">{architecture.flow}</p>
            <ArchitecturePreview id={id} detail />
            <p className="architecture-focus">{architecture.focus}</p>
            {architecture.note && <p className="architecture-note">{architecture.note}</p>}
          </CaseSection>
        )}
        <CaseSection title="Project scope"><p>{project.scope}</p></CaseSection>
        <CaseSection title={project.contributionTitle || 'My contribution'}><p>{project.contribution}</p></CaseSection>
        {project.tools && <CaseSection title="Tools"><p>{project.tools.join(' · ')}</p></CaseSection>}
        <CaseSection title="Approach"><ul>{project.methods.map((method) => <li key={method}>{method}</li>)}</ul></CaseSection>
        <section className="case-limits">
          <h2>{project.noteTitle || 'What the evidence supports'}</h2>
          <p>{project.limits}</p>
        </section>
        <CaseSection title="Context & credits"><p>{project.credits}</p></CaseSection>
      </div>
      <footer className="case-page-footer">
        <a className="text-link" href="./projects.html"><span aria-hidden="true">←</span> All projects</a>
        <a id="case-contact" href={contactHref} className="text-link">Let’s discuss this project <span aria-hidden="true">↗</span></a>
      </footer>
    </article>
  );
}
