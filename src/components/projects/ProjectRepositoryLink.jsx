import { ContactIcon } from '../ui/ContactIcon.jsx';
import { ExternalLink } from '../ui/ExternalLink.jsx';

export function ProjectRepositoryLink({ project, className = '' }) {
  return (
    <ExternalLink
      className={`repository-link ${className}`.trim()}
      href={project.code}
      data-repository-link={project.repository}
    >
      <ContactIcon type="github" />
      GitHub
      <span className="sr-only"> · {project.repository}</span>
    </ExternalLink>
  );
}
