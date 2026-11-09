const skills = [
  {
    title: "Analysis & reporting",
    tools: "Python · SQL · pandas · NumPy · Jupyter",
    context: "Exploration, validation, performance measures and reproducible analysis.",
  },
  {
    title: "Dashboards & communication",
    tools: "Streamlit · Plotly · pandas",
    context: "Interactive filters, geographic views and clear reporting for different questions.",
  },
  {
    title: "Data engineering",
    tools: "Airflow · dbt · PostgreSQL · Spark · Snowflake",
    context: "Ingestion, transformation, dimensional models and reporting marts.",
  },
  {
    title: "Machine learning & evaluation",
    tools: "PyTorch · scikit-learn · OpenCV · NLP",
    context: "Model comparison, evaluation design and transparent interpretation.",
  },
];

export function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="wrap about-layout">
        <div className="about-copy">
          <p className="eyebrow section-kicker">03 / ABOUT & CAPABILITIES</p>
          <h2 id="about-title">Business focus.<br /><em>Practical delivery.</em></h2>
          <p>
            I connect data analysis with business delivery by starting with
            the business question, identifying relevant measures and turning
            findings into clear recommendations and practical next steps.
          </p>
          <p>
            My UTS projects span dashboards, data engineering and model
            evaluation. Through this work, I have learned to frame analysis
            around stakeholder needs, explain trade-offs and communicate
            findings clearly.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-group" key={skill.title}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.tools}</p>
                <p className="skill-context">{skill.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
