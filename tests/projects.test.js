import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { projectCards } from '../src/data/projectCards.js';
import { caseStudies } from '../src/data/caseStudies.js';
import { architectures } from '../src/data/architectures.js';
import { profile } from '../src/data/profile.js';
import { filterProjects } from '../src/utils/projects.js';
import { projectContactHref } from '../src/utils/links.js';

test('the complete portfolio survives migration with a case study for each project', () => {
  const ids = projectCards.map((project) => project.id);
  assert.equal(ids.length, 13);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual([...ids].sort(), Object.keys(caseStudies).sort());
  assert.equal(projectCards.filter((project) => project.featured).length, 4);
  for (const project of projectCards) {
    const detail = caseStudies[project.id];
    assert.equal(project.repository, detail.repository);
    assert.equal(project.code, detail.code);
    assert.ok(detail.contribution && detail.credits && detail.limits);
    assert.equal(project.award?.certificate, detail.award?.certificate);
  }
});

test('multi-category projects appear in every relevant filter with the expected totals', () => {
  const expected = { all: 13, analytics: 5, engineering: 3, ml: 7, hackathons: 4 };
  for (const [category, count] of Object.entries(expected)) {
    assert.equal(filterProjects(projectCards, category).length, count);
  }
  assert.ok(filterProjects(projectCards, 'analytics').some((project) => project.id === 'airbnb'));
  assert.ok(filterProjects(projectCards, 'engineering').some((project) => project.id === 'airbnb'));
  assert.deepEqual(filterProjects(projectCards, 'unknown'), []);
});

test('CV, architecture, poster and certificate links resolve to bundled assets', () => {
  const paths = new Set([profile.resume, './assets/nsw-dashboard.png', './assets/tesla-insights-poster.png']);
  for (const id of Object.keys(architectures)) paths.add(`./assets/architecture/${id}.svg`);
  for (const project of Object.values(caseStudies)) {
    if (project.poster) paths.add(project.poster);
    if (project.award) paths.add(project.award.certificate);
  }
  for (const path of paths) {
    assert.ok(existsSync(new URL(`../public/${path}`, import.meta.url)), `Missing ${path}`);
  }
});

test('contact links preserve project titles containing ampersands and Unicode', () => {
  const title = 'Airbnb & Census — reporting';
  const url = new URL(projectContactHref(profile.email, title));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, profile.email);
  assert.equal(url.searchParams.get('subject'), `Portfolio: ${title}`);
  assert.equal([...url.searchParams].length, 1);
});
