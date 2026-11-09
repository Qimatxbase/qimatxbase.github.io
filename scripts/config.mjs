import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRoot = fileURLToPath(new URL('../', import.meta.url));

export async function buildOptions({ development = false } = {}) {
  const outputDirectory = resolve(projectRoot, development ? '.dev' : 'dist');
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });

  const assetUrl = (path) => `./${relative(outputDirectory, resolve(projectRoot, path)).split(sep).join('/')}`;

  return {
    absWorkingDir: projectRoot,
    entryPoints: { app: 'src/main.jsx' },
    outdir: resolve(outputDirectory, 'assets'),
    entryNames: development ? '[name]' : '[name]-[hash]',
    chunkNames: 'chunks/[name]-[hash]',
    bundle: true,
    format: 'esm',
    splitting: true,
    platform: 'browser',
    target: ['es2020'],
    jsx: 'automatic',
    jsxDev: development,
    define: { 'process.env.NODE_ENV': JSON.stringify(development ? 'development' : 'production') },
    minify: !development,
    sourcemap: development,
    metafile: true,
    legalComments: 'eof',
    plugins: [{
      name: 'portfolio-html-and-assets',
      setup(build) {
        build.onEnd(async (result) => {
          if (result.errors.length) return;
          const [entryPath, entry] = Object.entries(result.metafile.outputs).find(
            ([path, output]) => path.endsWith('.js') && output.entryPoint === 'src/main.jsx',
          );
          let html = await readFile(resolve(projectRoot, 'index.html'), 'utf8');
          html = html
            .replace('./assets/app.js', assetUrl(entryPath))
            .replace('./assets/app.css', assetUrl(entry.cssBundle));
          if (development) {
            html = html.replace('</body>', `<script>new EventSource('/esbuild').addEventListener('change', () => location.reload());</script>\n  </body>`);
          }
          await cp(resolve(projectRoot, 'public'), outputDirectory, { recursive: true });
          const baseTitle = html.match(/<title>([^<]*)<\/title>/)[1];
          const pages = [
            { file: 'index.html' },
            { file: 'projects.html', title: `All projects — ${baseTitle}`, description: 'Explore all projects in analytics, data engineering, machine learning and applied research.' },
            { file: 'project.html', title: `Project case study — ${baseTitle}`, description: 'Project scope, implementation, methods and supporting evidence.' },
          ];
          await Promise.all(pages.map(async (page) => {
            let output = html;
            if (page.title) {
              output = output
                .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
                .replace(/(property="og:title"\s+content=")[^"]*"/, `$1${page.title}"`)
                .replace(/(name="description"\s+content=")[^"]*"/, `$1${page.description}"`)
                .replace(/(property="og:description"\s+content=")[^"]*"/, `$1${page.description}"`);
            }
            await writeFile(resolve(outputDirectory, page.file), output);
          }));
        });
      },
    }],
  };
}

export function handleShutdown(context, cleanup = () => {}) {
  const stop = async () => {
    cleanup();
    await context.dispose();
    process.exit(0);
  };
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
}
