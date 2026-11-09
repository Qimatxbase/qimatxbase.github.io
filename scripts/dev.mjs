import { context } from 'esbuild';
import { watch } from 'node:fs';
import { resolve } from 'node:path';
import { buildOptions, handleShutdown, projectRoot } from './config.mjs';

const devContext = await context(await buildOptions({ development: true }));
const watchers = [];
let refreshTimer;
handleShutdown(devContext, () => {
  clearTimeout(refreshTimer);
  watchers.forEach((watcher) => watcher.close());
});
await devContext.watch();
await devContext.rebuild();
const { port } = await devContext.serve({
  servedir: resolve(projectRoot, '.dev'),
  host: '127.0.0.1',
  port: 5173,
});
// Static files are outside the module graph; refresh their copies on edits.
const refreshStaticFiles = () => {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    devContext.rebuild().catch((error) => console.error(error.message));
  }, 75);
};
watchers.push(
  watch(projectRoot, (_, name) => {
    if (name === 'index.html') refreshStaticFiles();
  }),
  watch(resolve(projectRoot, 'public'), { recursive: true }, refreshStaticFiles),
);
console.log(`Local: http://localhost:${port}/ (automatic reload enabled)`);
