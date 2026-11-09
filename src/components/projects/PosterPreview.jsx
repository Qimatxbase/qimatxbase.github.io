import { ExternalLink } from '../ui/ExternalLink.jsx';

export function PosterPreview() {
  return (
    <figure className="project-poster-figure">
      <img
        src="./assets/tesla-insights-poster.png"
        alt="Original Tesla Market Research and Customer Insights poster, presenting the research context, review analysis and proposed owner survey."
        width="1600"
        height="2266"
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <ExternalLink href="./assets/tesla-insights-poster.pdf">Canva poster · Open PDF ↗</ExternalLink>
      </figcaption>
    </figure>
  );
}
