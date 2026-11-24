# Syed Minhal Nadeem — Portfolio

Personal portfolio site for a Senior Flutter Developer, built with React (Create React App).

**Live:** https://minhal-dev.netlify.app

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in /build
```

## Editing content

Almost all content lives in [`src/portfolio.js`](src/portfolio.js): headline, about, skills, experience, education, featured projects, live apps, hero stats, contact and social links.

| Path | What it holds |
|---|---|
| `src/components/` | One component per section (Hero, About, Skills, Experience, Work, LiveApps, Contact) |
| `src/styles/main.css` | Theme tokens, layout and responsive styles |
| `src/assets/images/` | Company logos and app icons |
| `public/index.html` | Page title and SEO / social meta tags |

## Optional: GitHub and Medium data

`npm start` and `npm run build` first run `fetch.js`, which can pull GitHub profile and Medium posts data. To set it up, copy `env.example` to `.env` and fill in your values. The current site doesn't display this data.

## Credits

Originally based on [developerFolio](https://github.com/saadpasta/developerFolio) by Saad Pasta. Licensed under [GPL-3.0](LICENSE).
