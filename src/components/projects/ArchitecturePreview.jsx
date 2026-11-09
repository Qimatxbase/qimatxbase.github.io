import { architectures } from '../../data/architectures.js';

export function ArchitecturePreview({ id, detail = false }) {
  const architecture = architectures[id];
  if (!architecture) return null;
  const asset = `./assets/architecture/${id}.svg`;

  return (
    <figure className={`architecture-card-figure${detail ? ' architecture-detail-figure' : ''}`}>
      <img
        src={asset}
        alt={architecture.flow}
        width="1200"
        height={id === 'video' ? 1040 : 760}
        loading="lazy"
        decoding="async"
      />
      <figcaption>Architecture</figcaption>
    </figure>
  );
}
