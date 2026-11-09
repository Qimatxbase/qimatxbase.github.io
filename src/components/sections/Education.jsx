import { education } from '../../data/education.js';

export function Education() {
  return (
    <aside className="education-card" id="education" aria-labelledby="education-title">
      <div className="education-card-top">
        <p className="eyebrow">EDUCATION</p>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v6c3.5 2.7 8.5 2.7 12 0v-6M22 9v7" />
        </svg>
      </div>
      <p className="education-institution">{education.institution}</p>
      <h2 id="education-title">{education.degree}</h2>
      <p className="education-period">
        <time dateTime={education.startDate}>{education.startLabel}</time>
        <span aria-hidden="true"> — </span>
        <span className="sr-only"> to </span>
        <time dateTime={education.endDate}>{education.endLabel}</time>
      </p>
    </aside>
  );
}
