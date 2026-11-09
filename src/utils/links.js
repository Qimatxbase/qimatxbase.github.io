export function projectContactHref(email, title) {
  return `mailto:${email}?subject=${encodeURIComponent(`Portfolio: ${title}`)}`;
}

export function projectPageHref(id) {
  return `./project.html?id=${encodeURIComponent(id)}`;
}
