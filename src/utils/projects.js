export function matchesCategory(project, category) {
  return category === "all" || project.categories.includes(category);
}

export function filterProjects(projects, category) {
  return projects.filter((project) => matchesCategory(project, category));
}

export function countProjects(projects, category) {
  return filterProjects(projects, category).length;
}
