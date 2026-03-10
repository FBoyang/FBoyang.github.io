# Boyang's Personal Academic Website

This personal academic website has been newly redesigned using **Astro**, replacing the legacy Jekyll architecture. It features a modern, blazing-fast, and zero-JS static HTML architecture with a custom Vanilla CSS design system.

## Setup & Running Locally

To view the website on your own computer, follow these steps:

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed (v22 or higher). If you use Node Version Manager (`nvm`), you can automatically switch to the correct version by running:
   ```bash
   nvm use
   ```
2. **Install Dependencies**: Open a terminal in the root directory and run:
   ```bash
   npm install
   ```
3. **Start the Development Server**: Run the following command to start the Astro server locally:
   ```bash
   npm run dev
   ```
   The site will now be running on `http://localhost:4321`. Any changes you make to the source files will automatically refresh in the browser.

## Adding Content

Your personal data is managed using **Astro Content Collections**. You can easily add new publications, talks, and research projects by adding Markdown (`.md`) files to the corresponding folder in `./src/content/`:

- **Publications**: Add Markdown files to `src/content/publications/`
- **Talks**: Add Markdown files to `src/content/talks/`
- **Research**: Add Markdown files to `src/content/research/`

Inside each folder, you will find an `_example.md` file that demonstrates exactly what YAML frontmatter fields you need to include (such as `title`, `date`, `venue`, etc.).

### Legacy Jekyll Files

All the files from the old Jekyll architecture (e.g., `_config.yml`, old `_posts`) have been preserved in the `_legacy_jekyll/` backup directory for your reference.

## Deployment

The website is configured to automatically deploy to GitHub Pages whenever you push changes to the `main` or `master` branch. The deployment workflow is controlled by `.github/workflows/deploy.yml`. 

Simply run:
```bash
git add .
git commit -m "Add new updates"
git push origin main
```
And GitHub Actions will compile the Astro site and update your public URL!
