import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile.js";
import { ExternalLink } from "../ui/ExternalLink.jsx";
import { ContactIcon } from "../ui/ContactIcon.jsx";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const copyReset = useRef(null);

  useEffect(() => () => window.clearTimeout(copyReset.current), []);

  async function copyEmail() {
    window.clearTimeout(copyReset.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("Copy is unavailable in this browser. Use the email link above.");
    }
    copyReset.current = window.setTimeout(() => setCopyStatus(""), 6000);
  }

  return (
    <section className="contact-section wrap" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow section-kicker">04 / LET'S CONNECT</p>
        <h2 id="contact-title">Good questions<br />start a conversation.</h2>
        <p>
          Have an analyst opportunity or a data problem in mind?<br />I'd be glad to hear about it.
        </p>
      </div>
      <div className="contact-details">
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email} <ContactIcon type="email" />
        </a>
        <div className="contact-links">
          <button type="button" id="copy-email" className="copy-button" onClick={copyEmail}>
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
              <rect x="7" y="7" width="10" height="10" rx="2" />
              <path d="M12 7V3H3v9h4" />
            </svg>
            Copy email
          </button>
          <ExternalLink href={profile.linkedin}>
            LinkedIn <ContactIcon type="linkedin" />
          </ExternalLink>
          <ExternalLink href={profile.github}>
            GitHub <ContactIcon type="github" />
          </ExternalLink>
        </div>
        <p className="copy-status" id="copy-status" role="status" aria-live="polite">{copyStatus}</p>
        <p className="contact-location">
          <span className="small-dot" aria-hidden="true" /> Based in {profile.location}
        </p>
      </div>
    </section>
  );
}
