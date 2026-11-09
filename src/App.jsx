import { lazy, Suspense } from 'react';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Experience } from './components/sections/Experience.jsx';
import { About } from './components/sections/About.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Projects } from './components/projects/Projects.jsx';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));
const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));

export default function App() {
  const filename = window.location.pathname.split('/').pop();
  const page = filename === 'projects.html' ? 'projects' : filename === 'project.html' ? 'project' : 'home';
  const projectId = new URLSearchParams(window.location.search).get('id');

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header page={page} />
      <main id="main">
        <Suspense fallback={<p className="page-loading wrap" role="status">Loading page…</p>}>
          {page === 'projects' ? <ProjectsPage /> : page === 'project' ? <ProjectPage id={projectId} /> : (
            <>
              <Hero />
              <Experience />
              <Projects />
              <About />
              <Contact />
            </>
          )}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
