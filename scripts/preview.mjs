import { context } from 'esbuild';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { handleShutdown, projectRoot } from './config.mjs';

await access(resolve(projectRoot, 'dist/index.html'));
const previewContext = await context({});
handleShutdown(previewContext);
const { port } = await previewContext.serve({
  servedir: resolve(projectRoot, 'dist'),
  host: '127.0.0.1',
  port: 4173,
});
console.log(`Production preview: http://localhost:${port}/`);
