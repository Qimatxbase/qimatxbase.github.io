import { profile } from "../../data/profile.js";
import { ExternalLink } from "../ui/ExternalLink.jsx";
import { ContactIcon } from "../ui/ContactIcon.jsx";
import { Education } from "./Education.jsx";

export function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="small-dot" aria-hidden="true" /> {profile.location.toUpperCase()}
          {" · DATA SCIENCE & ANALYTICS"}
        </p>
        <h1 id="hero-title">
          From complex data<br />to <em>clearer decisions.</em>
        </h1>
        <p className="hero-description">
          I’m looking for a Data Analyst role where I can turn business questions
          into reliable reporting and practical recommendations using Python,
          SQL and interactive dashboards.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href={profile.resume} download>
            Download CV <span aria-hidden="true">↓</span>
            <span className="sr-only"> (PDF)</span>
          </a>
        </div>
        <nav className="hero-contact" aria-label="Contact and profiles">
          <a className="text-link" href={`mailto:${profile.email}`}>
            {profile.email} <ContactIcon type="email" />
          </a>
          <div className="hero-contact-profiles">
            <ExternalLink className="text-link" href={profile.linkedin}>
              LinkedIn <ContactIcon type="linkedin" />
            </ExternalLink>
            <ExternalLink className="text-link" href={profile.github}>
              GitHub <ContactIcon type="github" />
            </ExternalLink>
          </div>
        </nav>
        <div className="hero-footnote">
          <span className="line-mark" aria-hidden="true" />
          <p>Python & SQL at the core.<br />Context, clarity and useful reporting throughout.</p>
        </div>
      </div>
      <Education />
    </section>
  );
}
