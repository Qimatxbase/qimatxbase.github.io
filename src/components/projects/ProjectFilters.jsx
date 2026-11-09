import { countProjects } from "../../utils/projects.js";

const filters = [
  { id: "all", label: "All" },
  { id: "analytics", label: "Analytics" },
  { id: "engineering", label: "Data engineering" },
  { id: "ml", label: "ML & AI" },
  { id: "hackathons", label: "Hackathons" },
];

export function ProjectFilters({ projects, activeFilter, onFilterChange }) {
  const shown = countProjects(projects, activeFilter);

  return (
    <div className="filter-row">
      <div className="filters" role="group" aria-label="Filter projects by area">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            data-filter={id}
            aria-pressed={activeFilter === id}
            onClick={() => onFilterChange(id)}
          >
            {label} <span data-filter-count>{countProjects(projects, id)}</span>
          </button>
        ))}
      </div>
      <p className="project-count" id="project-count" aria-live="polite" aria-atomic="true">
        {activeFilter === "all"
          ? `${projects.length} projects`
          : `${shown} of ${projects.length} projects shown`}
      </p>
    </div>
  );
}
