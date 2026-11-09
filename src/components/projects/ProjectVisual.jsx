import { ArchitecturePreview } from "./ArchitecturePreview.jsx";
import { PosterPreview } from "./PosterPreview.jsx";

export function ProjectVisual({ id }) {
  if (id === "nsw") {
    return (
      <div className="project-visual visual-dashboard">
        <div className="visual-topline">
          <span><span className="small-dot" aria-hidden="true" /> NSW ROAD SAFETY</span>
          <span>APPLICATION VIEW</span>
        </div>
        <div className="dashboard-frame">
          <div className="window-controls" aria-hidden="true">
            <i /><i /><i /><span>Streamlit / road safety</span>
          </div>
          <img
            src="./assets/nsw-dashboard.png"
            width="3024"
            height="1674"
            alt="Screenshot of the NSW Road Safety Dashboard, showing the application and its interactive analysis controls."
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  if (id === "tesla") {
    return <div className="project-visual poster-visual"><PosterPreview /></div>;
  }

  return (
    <div className={`project-visual architecture-visual ${id === "video" ? "visual-evaluation" : "visual-pipeline"}`}>
      <ArchitecturePreview id={id} />
    </div>
  );
}
