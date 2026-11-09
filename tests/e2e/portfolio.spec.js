import { test, expect } from "@playwright/test";
import { caseStudies } from "../../src/data/caseStudies.js";
import { profile } from "../../src/data/profile.js";

test.beforeEach(async ({ page }) => {
  const failures = [];
  page.on("pageerror", (error) => failures.push(`Page error: ${error.message}`));
  page.on("requestfailed", (request) => {
    const reason = request.failure()?.errorText;
    // Native navigation can cancel an image request from the previous page.
    if (reason !== "net::ERR_ABORTED") failures.push(`Request failed: ${request.url()} — ${reason}`);
  });
  page.on("response", (response) => {
    if (new URL(response.url()).origin === new URL(page.url()).origin && response.status() >= 400) {
      failures.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });
  page.__portfolioFailures = failures;
});

test.afterEach(async ({ page }) => {
  expect(page.__portfolioFailures, "Browser errors and failed local requests").toEqual([]);
});

test("the homepage shows four selected projects and opens the full catalogue as a new page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".project-item")).toHaveCount(4);
  await expect(page.locator("[data-filter]")).toHaveCount(0);
  await expect(page.locator(".more-work")).toHaveCount(0);
  const viewAll = page.getByRole("link", { name: /view all(?: \d+)? projects/i }).first();
  await expect(viewAll).toHaveAttribute("href", "./projects.html");
  await page.evaluate(() => { window.__previousDocument = "home"; });
  await viewAll.click();
  await expect(page).toHaveURL(/\/projects\.html$/);
  await expect(page.locator(".project-item")).toHaveCount(13);
  expect(await page.evaluate(() => window.__previousDocument)).toBeUndefined();
});

test("the full catalogue filters projects and announces the correct counts", async ({ page }) => {
  await page.goto("/projects.html");
  await expect(page.locator(".project-item")).toHaveCount(13);
  await expect(page.locator("[data-filter='all']")).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#main-nav").getByRole("link", { name: "Projects", exact: true })).toHaveAttribute("aria-current", "page");

  for (const [category, count] of Object.entries({ analytics: 5, engineering: 3, ml: 7, hackathons: 4 })) {
    const filter = page.locator(`[data-filter='${category}']`);
    await expect(filter.locator("[data-filter-count]")).toHaveText(String(count));
    await filter.click();
    await expect(filter).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-filter][aria-pressed='true']")).toHaveCount(1);
    await expect(page.locator(".project-item")).toHaveCount(count);
    await expect(page.locator("#project-count")).toHaveText(`${count} of 13 projects shown`);
    const shownCategories = await page.locator(".project-item").evaluateAll((cards) => cards.map((card) => card.dataset.category.split(" ")));
    for (const categories of shownCategories) expect(categories).toContain(category);
  }

  await page.locator("[data-filter='all']").click();
  await expect(page.locator(".project-grid .project-item")).toHaveCount(4);
  await expect(page.locator(".more-work .project-item")).toHaveCount(9);
  await expect(page.locator("#project-count")).toHaveText("13 projects");
});

test("all thirteen case studies use native page links and return to the catalogue", async ({ page }) => {
  await page.goto("/projects.html");
  for (const [id, project] of Object.entries(caseStudies)) {
    const repositoryHref = `https://github.com/Qimatxbase/${project.repository}`;
    const cardRepository = page.locator(`.project-item[data-project='${project.repository}'] [data-repository-link]`);
    await expect(cardRepository).toHaveAttribute('href', repositoryHref);
    await expect(cardRepository).toHaveAttribute('target', '_blank');
    await expect(cardRepository.locator('.repository-visibility')).toHaveCount(project.code ? 0 : 1);
    const link = page.locator(`[data-case='${id}']`);
    await expect(link).toHaveJSProperty("tagName", "A");
    await expect(link).toHaveAttribute("href", `./project.html?id=${id}`);
    await page.evaluate(() => { window.__previousDocument = "catalogue"; });
    await link.click();
    await expect(page).toHaveURL(new RegExp(`/project\\.html\\?id=${id}$`));
    await expect(page.locator("h1#case-title")).toHaveText(project.title);
    await expect.poll(() => page.title()).toContain(project.title);
    await expect(page.locator("dialog")).toHaveCount(0);
    await expect(page.locator('.case-page-header [data-repository-link]')).toHaveAttribute('href', repositoryHref);
    expect(await page.evaluate(() => window.__previousDocument)).toBeUndefined();
    const back = page.getByRole("link", { name: /all projects/i }).first();
    await expect(back).toHaveAttribute("href", "./projects.html");
    await back.click();
    await expect(page).toHaveURL(/\/projects\.html$/);
    await expect(page.locator(".project-item")).toHaveCount(13);
  }
});

test('project images stay inline while explicit document links remain available', async ({ page, context }) => {
  for (const path of ['/', '/projects.html', '/project.html?id=nsw', '/project.html?id=tesla']) {
    await page.goto(path);
    await expect(page.locator('main h1').first()).toBeVisible();
    const images = page.locator('.project-visual img, .project-page img');
    expect(await images.count()).toBeGreaterThan(0);
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await image.click();
      await expect(page).toHaveURL(new URL(path, 'http://127.0.0.1:4173').href);
      expect(context.pages()).toHaveLength(1);
    }
  }
  await expect(page.getByRole('link', { name: /Canva poster.*Open PDF/i })).toHaveAttribute('href', './assets/tesla-insights-poster.pdf');
});

test("case-study URLs support direct visits, refresh and unknown project IDs", async ({ page }) => {
  await page.goto("/projects.html");
  await page.goto("/project.html?id=video");
  await expect(page.locator("h1#case-title")).toHaveText(caseStudies.video.title);
  await page.reload();
  await expect(page.locator("h1#case-title")).toHaveText(caseStudies.video.title);
  await page.goBack();
  await expect(page).toHaveURL(/\/projects\.html$/);
  await expect(page.locator(".project-item")).toHaveCount(13);
  await page.goForward();
  await expect(page.locator("h1#case-title")).toHaveText(caseStudies.video.title);

  await page.goto("/project.html?id=does-not-exist");
  await expect(page.getByRole("heading", { name: /project not found/i })).toBeVisible();
  await page.getByRole("link", { name: /all projects/i }).first().click();
  await expect(page).toHaveURL(/\/projects\.html$/);
  await expect(page.locator(".project-item")).toHaveCount(13);
});

test("education is visible near the introduction before experience on desktop and mobile", async ({ page }) => {
  await page.goto("/");
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    const education = page.locator(".hero #education");
    await expect(education).toBeVisible();
    await expect(education).toContainText("Master of Data Science and Innovation");
    await expect(education).toContainText("University of Technology Sydney");
    await expect(education).not.toContainText(/GPA|6\.67/i);
    expect(await education.evaluate((element) => Boolean(element.compareDocumentPosition(document.querySelector("#experience")) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
    await expect(page.locator("#about").getByText("Master of Data Science and Innovation", { exact: true })).toHaveCount(0);
  }
});

test("mobile navigation works across pages and resets after Escape and desktop resize", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator(".menu-toggle");
  const navigation = page.locator("#main-nav");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(navigation).toBeHidden();
  await menu.click();
  await expect(navigation).toBeVisible();
  await navigation.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects\.html$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(navigation).toBeHidden();

  await menu.click();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await expect(navigation).toBeHidden();
  await menu.click();
  await page.setViewportSize({ width: 901, height: 844 });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(navigation).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(navigation).toBeHidden();

  await menu.click();
  await navigation.getByRole("link", { name: /get in touch/i }).click();
  await expect(page).toHaveURL(/\/(?:index\.html)?#contact$/);
  await expect(page.locator("#contact")).toBeVisible();
});

test("copy email reports successful copying and handles denied clipboard access", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async (text) => { window.__copiedEmail = text; } },
    });
  });
  await page.goto("/");
  await page.locator("#copy-email").click();
  await expect(page.locator("#copy-status")).toHaveText("Email address copied.");
  expect(await page.evaluate(() => window.__copiedEmail)).toBe(profile.email);
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => { throw new Error("Clipboard access denied"); };
  });
  await page.locator("#copy-email").click();
  await expect(page.locator("#copy-status")).toHaveText("Copy is unavailable in this browser. Use the email link above.");
  await expect(page.locator(".email-link")).toHaveAttribute("href", `mailto:${profile.email}`);
});

test("home, catalogue and detail pages fit responsive screens and serve real local assets", async ({ page, request }) => {
  const assets = new Set();
  for (const path of ["/", "/projects.html", "/project.html?id=nsw"]) {
    await page.goto(path, { waitUntil: "networkidle" });
    await expect(page.locator("main h1, #work-title").first()).toBeVisible();
    for (const width of [320, 390, 900, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), {
        message: `${path} must not overflow horizontally at ${width}px`,
      }).toBeLessThanOrEqual(1);
    }
    const pageAssets = await page.locator("img[src], link[href], a[href], script[src]").evaluateAll((elements) => {
      return elements.map((element) => element.src || element.href).filter((url) => {
        const asset = new URL(url, location.href);
        return asset.origin === location.origin && asset.pathname.includes("/assets/");
      });
    });
    for (const asset of pageAssets) assets.add(asset);
  }
  for (const id of ["nsw", "airbnb", "video", "tesla"]) {
    assets.add(new URL(`./assets/architecture/${id}.svg`, page.url()).href);
  }
  expect(assets.size).toBeGreaterThan(5);
  for (const asset of assets) {
    const response = await request.get(asset);
    expect(response.ok(), `Asset is available: ${asset}`).toBe(true);
    expect(response.headers()["content-type"], `Asset must not fall back to HTML: ${asset}`).not.toContain("text/html");
  }
  const resume = await request.get(new URL(profile.resume, page.url()).href);
  expect(resume.ok()).toBe(true);
  expect(resume.headers()["content-type"]).toContain("application/pdf");
});
