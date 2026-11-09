import { education } from '../../data/education.js';

export function Education() {
  return (
    <aside className="education-card" id="education" aria-labelledby="education-title">
      <div className="education-card-top">
        <h2 className="eyebrow" id="education-title">EDUCATION</h2>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v6c3.5 2.7 8.5 2.7 12 0v-6M22 9v7" />
        </svg>
      </div>
      <ol className="education-list" role="list">
        {education.map((entry) => (
          <li className="education-entry" key={entry.id}>
            <p className="education-institution">{entry.institution}</p>
            <h3>{entry.degree}</h3>
            <p className="education-period">
              <time dateTime={entry.startDate}>{entry.startLabel}</time>
              <span aria-hidden="true"> — </span>
              <span className="sr-only"> to </span>
              <time dateTime={entry.endDate}>{entry.endLabel}</time>
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
}
