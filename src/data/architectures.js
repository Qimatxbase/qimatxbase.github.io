// Architecture summaries describe the retained implementation, not benchmark results.
export const architectures = {
  nsw: {
    title: "Crash-data reporting architecture",
    flow: "NSW crash CSV → pandas preparation and filters → Plotly charts and coordinate maps → Streamlit decision views.",
    focus: "Lead development: application structure, interactive controls and analytical views.",
  },
  airbnb: {
    title: "Airbnb & Census ELT architecture",
    flow: "GCS source files → manually triggered Airflow ingestion → PostgreSQL raw tables → dbt Bronze/Silver/Gold models → reporting marts and SQL analysis.",
    focus: "Source-month validation and monthly observation histories connect the reporting layers.",
  },
  video: {
    title: "Multimodal video search & evaluation",
    flow: "Video upload → FFmpeg chunks → Gemini embeddings → ChromaDB retrieval → Gemini video reasoning → structured answers and timestamped clips.",
    focus: "The team system is shown alongside my annotation-grounded evaluation workflow.",
    note: "Runtime query rewriting uses Google-hosted Gemma 4. Ollama is used separately for evaluation questions and judging; the judge receives the answer summary.",
  },
  tesla: {
    title: "Market research & customer-insight workflow",
    flow: "Secondary market research and review data → pandas quality checks → VADER sentiment, ratings and themes → insight reporting → survey proposal and Canva poster.",
    focus: "Research context, analytical methods and communication form one connected study.",
  },
};
