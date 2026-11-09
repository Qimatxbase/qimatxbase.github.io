import { ExternalLink } from "../ui/ExternalLink.jsx";

export function ProjectAward({ award }) {
  if (!award) return null;

  return (
    <div className="project-award">
      <strong>{award.title}</strong>
      <span>{award.detail}</span>
      <ExternalLink href={award.certificate}>View certificate PDF ↗</ExternalLink>
    </div>
  );
}
