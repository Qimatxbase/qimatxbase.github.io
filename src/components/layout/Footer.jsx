import { profile } from "../../data/profile.js";

export function Footer() {
  return (
    <footer className="site-footer wrap">
      <p>
        {profile.name} <span>© <span id="year">{new Date().getFullYear()}</span></span>
      </p>
      <p>Built around the work. Grounded in the evidence.</p>
      <a href="#main">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
