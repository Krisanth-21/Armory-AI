# Armory – SaaS Landing Platform

A sleek, modern landing page for a SaaS product, built with Vite, React, and Tailwind‑free vanilla CSS. The site is fully **SSR‑ready** and configured for **Vercel** deployments.

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Production Build](#production-build)
- [Deploy to Vercel](#deploy-to-vercel)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Demo
You can see a live preview of the site after you push it to Vercel (see *[Production Link](https://armoryweb.vercel.app/)* below).

---

## Features
- **Responsive design** – works on mobile, tablet, and desktop.
- **Premium UI** – glass‑morphism cards, smooth micro‑animations, and a curated color palette.
- **SSR support** – avoids hydration mismatches, thanks to server‑side rendering.
- **Zero‑config Vercel deployment** – `vercel.json` automatically picks up the build output.
- **Type‑safe** – full TypeScript support throughout the codebase.

---

## Tech Stack
| Layer | Technology |
|-------|------------|
| Build | Vite (with `vite-config`) |
| UI | React + vanilla CSS |
| Language | TypeScript |
| Deployment | Vercel (Nitro preset) |
| Linting/Formatting | ESLint + Prettier |

---

## Getting Started
```bash
# Clone the repo (or push your own copy)
git clone <your-repo-url>
cd saas-web

# Install dependencies (using npm, yarn or bun)
npm install   # or bun install
```

---

## Development
```bash
npm run dev
```
The development server starts at `http://localhost:5173`. Changes are hot‑reloaded.

---

## Production Build
```bash
npm run build
```
The build outputs to `.vercel/output`, ready for Vercel.

---

## Deploy to Vercel
1. Push the repository to GitHub/GitLab/Bitbucket.
2. In the Vercel dashboard click **New Project** → **Import** your repo.
3. Vercel detects `vercel.json`; the default build command (`npm run build`) and output directory (`.vercel/output`) are used.
4. Click **Deploy**. Your site will be live at `<your‑project>.vercel.app`.

*Optional*: Add a custom domain in the Vercel dashboard.

---

## Folder Structure
```
saas-web/
├─ src/                     # React source files
│  ├─ components/          # UI components
│  ├─ routes/              # Page routes
│  └─ index.css            # Global styles
├─ vite.config.ts          # Vite configuration (Nitro preset for Vercel)
├─ vercel.json             # Vercel deployment config
├─ package.json            # Dependencies & scripts
└─ README.md               # ← You are here!
```

---

## Contributing
Feel free to open issues or submit pull requests. Follow the existing code style and run `npm run lint` before committing.

---

## License
MIT © 2026 Armory Team
