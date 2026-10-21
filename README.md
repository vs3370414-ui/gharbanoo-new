# GharBanoo website

Source for https://gharbanoo.com, hosted free on Netlify (`netlify.toml`).

The site's job is to bring homeowners to the GharBanoo Android app. It has no listings or sign-in.

- `/`: landing page (React + Vite, English/Hindi). Text lives in `src/i18n.tsx`; links in `src/links.ts`.
- `/privacy/`, `/terms/`, `/delete-account/`: static HTML in `public/`, styled by `public/legal.css`.
  The app and Play Console link to `/privacy` and `/delete-account`; never move them.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs dist/
```

Play Store links carry `utm_source=website&utm_medium=<section>`; see installs by source in
Play Console → Grow → Store analysis.
