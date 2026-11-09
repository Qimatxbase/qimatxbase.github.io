# Qimatx Portfolio

React portfolio for Khanh Hoang (Qimatx) Nguyen, featuring 13 data science projects. Uses esbuild for bundling and local development.

## Run

Requires Node.js 20.19+, 22.12+, or a newer supported release.

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`. The home page shows four selected projects; `projects.html` lists all projects and `project.html?id=nsw` opens a case study. Component and CSS edits reload the page automatically. Refresh the page after editing HTML or public assets.

## Edit

- `src/components/`: layout, sections, project cards and shared UI.
- `src/pages/`: complete project catalogue and individual case-study pages.
- `src/data/`: profile, experience timeline, project summaries, case studies and architecture descriptions.
- `src/utils/`: project filtering and contact links.
- `src/styles/`: styles grouped by section, plus responsive rules.
- `public/assets/`: images, diagrams, CV, posters and certificates.
- `scripts/`: build, development server and production preview.

## Check and deploy

```bash
npm test
npm run build
npm run preview
```

Production preview runs at `http://localhost:4173`. Development output lives in `.dev/`; production output lives in `dist/`.

Run `npm run test:e2e` for browser checks (requires Google Chrome).

GitHub Pages publishes [qimatxbase.github.io](https://qimatxbase.github.io/) after each push to `main`. The deployment workflow installs dependencies, checks project data, builds `dist/` and publishes it. Set the repository's Pages source to **GitHub Actions**.

Relative paths also support other static hosts and subdirectories. Keep project attribution and evidence notes when editing descriptions.
