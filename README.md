# Gyanesh Saikhedkar — Portfolio

Personal portfolio site: Node.js, AWS, and backend engineering experience.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/portfolio/`).

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Create the repository `portfolio` under [gyanesh0708](https://github.com/gyanesh0708) on GitHub (empty repo is fine).
2. Push this project to `main`:

   ```bash
   git remote add origin https://github.com/gyanesh0708/portfolio.git
   git push -u origin main
   ```

3. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
4. After the workflow runs, the site is available at:

   **https://gyanesh0708.github.io/portfolio/**

## Customize

- Edit copy and timeline in `src/data/profile.ts`.
- Adjust colors and fonts in `src/index.css` and `index.html`.
- For a custom domain, set `base: '/'` in `vite.config.ts` and configure Pages accordingly.
