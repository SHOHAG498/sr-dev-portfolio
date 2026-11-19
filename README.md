# SR.DEV Cyberpunk Portfolio — Updated

## What's changed
- Added Contact page and navigation link. Replace `YOUR-EMAIL@example.com` in `contact.html` before publishing.
- Fixed Back button: uses browser history when arriving from another page, preserving the previous page/scroll; falls back to the configured page on direct entry.
- Fixed mobile navigation: five items fit in a responsive grid instead of running off-screen.
- Removed the non-functional HOME card from the Home page.
- Removed fabricated project/commit statistics. Project count, portfolio age, and last-updated date are calculated from `projects-data.js`.
- Added `project.html?id=project-id` detail pages, generated from project data.
- Added `admin.html` local Project Manager. Add/delete projects and export a new `projects-data.js`.

## Add a project
1. Open this folder using VS Code and run it with Live Server.
2. Open `admin.html` locally.
3. Fill the form and click **Add Project**.
4. Click **Export projects-data.js**.
5. Replace the site's existing `projects-data.js` with the downloaded file.
6. Commit and push the updated site to GitHub Pages. The project count, last updated date, project card and its detail URL update automatically.

## Important security / hosting limitation
GitHub Pages is static hosting. This `admin.html` is a local editing tool, NOT a secure private login. Do not publish `admin.html` or treat a front-end password as security. The public website reads the exported `projects-data.js`. For a genuinely private online admin panel with authentication and server-side saving, a backend or authenticated service is required.

## Project URLs
Each project uses one reusable detail template, e.g. `project.html?id=good-pet-by-sr`. It behaves as a separate project detail page without needing to create a new physical HTML file for every project.

## Portfolio start date
`projects-data.js` currently starts the portfolio clock on 2026-11-18. Change `startedAt` there if you want a different start date.

## Before publishing
- Replace the placeholder email in `contact.html`.
- Replace any placeholder social URLs in `index.html` / other pages.
- Review About and Story text for accuracy.
- Add only real project data and real screenshots.
- Do not upload `admin.html`, `admin.css`, or `admin.js` to the public GitHub Pages deployment if you want the local manager kept off the public site.
