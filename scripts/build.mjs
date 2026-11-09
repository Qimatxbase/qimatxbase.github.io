import { build } from 'esbuild';
import { buildOptions } from './config.mjs';

await build(await buildOptions());
console.log('Production build ready in dist/');
