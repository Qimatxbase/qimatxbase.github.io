import { experience } from '../../data/experience.js';

export function Experience() {
  return (
    <section className="experience-section wrap" id="experience" aria-labelledby="experience-title">
      <div className="experience-section-heading">
        <p className="eyebrow section-kicker">01 / PROFESSIONAL EXPERIENCE</p>
        <h2 id="experience-title">Experience.</h2>
      </div>
      <ol className="experience-timeline">
        {experience.map((item) => (
          <li className="timeline-item" key={item.id}>
            <div className="timeline-role">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-location">{item.location}</p>
              {item.context && <p className="timeline-context">{item.context}</p>}
            </div>
            <div className="timeline-detail">
              <p className="timeline-dates">
                <time dateTime={item.startDate}>{item.startLabel}</time>
                <span aria-hidden="true"> — </span>
                <span className="sr-only"> to </span>
                <time dateTime={item.endDate}>{item.endLabel}</time>
              </p>
              <ul className="timeline-duties">
                {item.duties.map((duty) => <li key={duty}>{duty}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
