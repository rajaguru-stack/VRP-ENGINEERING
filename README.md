# VRP Engineering Services — Marketing Website

> **Production-ready, animated, responsive marketing website for VRP Engineering Services (Madurai, Tamil Nadu, India).**  
> *"Build Better... Together..."*

---

## 🏛️ Brand & Visual Identity

- **Palette:** Deep Navy Blue (`#061033` to `#0A1A4A`) with Metallic Gold accents (`#D4A62A`, `#F2CB5B`, `#B8871A`) and Off-White body text (`#EAEFFB`).
- **Typography:**
  - Headings: `Cinzel` & `Playfair Display`
  - Body: `Inter` & `Poppins`
  - Accent: `Great Vibes`
- **Logo Component:** Stylized gold building with 4 vertical pillars and a curved swoosh foundation (`<Logo />`).
- **Cultural Identity:** Meenakshi Amman Temple Gopuram silhouette SVG (`<GopuramSilhouette />`) used tastefully across the footer, about section, and scene dividers.

---

## ⚡ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Routing:** React Router v6 (`HashRouter` + SPA `404.html` redirect)
- **Styling:** Tailwind CSS v3 with PostCSS and custom navy & gold design tokens
- **Animations:**
  - **GSAP + ScrollTrigger:** Pinned scenes, horizontal scrub timeline, frame scrubbing
  - **Framer Motion:** Word-by-word headline reveals, page transitions, 3D card tilt, mobile drawer
  - **Lenis:** Smooth scrolling (automatically disabled on `prefers-reduced-motion`)
- **Icons:** `lucide-react` + inline SVGs
- **Deployment:** 100% static build output (`npm run build` → `/dist`)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ⚙️ Editing Business Data (`src/data/siteConfig.ts`)

All client business data is consolidated in **one single file**: `src/data/siteConfig.ts`.
To update client details, open `src/data/siteConfig.ts` and modify:

- **Business Info:** Name, tagline, sign-off line, city, state.
- **Contact:** Phone number, WhatsApp number, email address, physical address, Google Maps embed URL, working hours.
- **Services:** Titles, descriptions, "What you get" deliverables, documents required, timelines.
- **Stats:** Numbers of approved plans, years of experience, estimates delivered, support rate.
- **Festive Banner:** Toggle `enabled: true/false` and update the message ribbon (e.g. Deepavali / Pongal / New Year).
- **Testimonials:** Client names, roles, quotes, star ratings.
- **FAQ:** Common queries, DTCP vs CMDA differences, bank estimate rules.
- **Form Submission Endpoint:** Set `VITE_FORM_ENDPOINT` in `.env` (Formspree or Web3Forms).

---

## 🎥 How to Add Google Flow Videos

The site ships with **intelligent CSS & SVG animated blueprint fallbacks** so it looks stunning out of the box even before videos are generated.

When you generate your clips in **Google Flow**, follow these steps:

### Expected File Names (6 Clips)
Place your raw `.mp4` video files into `public/media/raw/`:
1. `public/media/raw/hero.mp4` — Cinematic drone shot of a building under construction at golden hour.
2. `public/media/raw/blueprint-to-building.mp4` — Blueprint vectors rising floor-by-floor into a 3D building.
3. `public/media/raw/dtcp-journey.mp4` — Documents, surveying, layout stamp animation.
4. `public/media/raw/steel-boq.mp4` — Close-up rebar/steel grid and digital BOQ cost sheet.
5. `public/media/raw/site-survey.mp4` — Engineer with electronic Total Station surveying land.
6. `public/media/raw/about.mp4` — Team, engineering office, or architectural work in Madurai.

### Run the Media Processing Pipeline
```bash
npm run media
```
*(On Windows or Mac/Linux, this runs `scripts/process-media.mjs`)*

- **Direct MP4 Mode (No ffmpeg needed)**:
  If `ffmpeg` is not installed on your system, the script automatically copies your raw `.mp4` videos into `public/media/video/` and configures the site to stream them natively with `<video autoplay muted loop playsInline>` and scrubs the Blueprint scene via GSAP `video.currentTime`.
- **Full Canvas Frame-Sequence Mode (Requires ffmpeg)**:
  If `ffmpeg` is installed in your system PATH, the script automatically:
  1. Compresses MP4 loops (H.264, no audio, faststart web streaming).
  2. Encodes modern VP9 WebM loops.
  3. Extracts high-resolution WebP posters for instant first-frame loading.
  4. Extracts 24fps scroll-scrubbed WebP frame sequences scaled to 1280px (desktop) and 720px (mobile).
  5. Updates `src/data/mediaManifest.json` with exact frame counts.

---

## 🌐 Deployment Instructions

The project produces a 100% static client-side bundle in `/dist`.

### 1. Vercel
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

### 2. Netlify
1. Import repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy site. A `public/_redirects` or `public/404.html` handles SPA fallback.

### 3. GitHub Pages
1. In `vite.config.ts`, `base: './'` is already configured for sub-path hosting.
2. `HashRouter` is used, guaranteeing that deep routes (e.g. `/#/services`, `/#/contact`) reload flawlessly without 404 server errors on GitHub Pages.
3. `public/404.html` is included as a redundant fallback.
4. Push to `gh-pages` branch or configure GitHub Actions:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
   ```

---

## 🎨 Customizing Theme & Fonts

- **Colors:** Defined in `src/styles/globals.css` under `@theme`:
  - `--color-navy-950`: Background `#061033`
  - `--color-navy-900`: Secondary background `#0A1A4A`
  - `--color-gold-500`: Primary metallic gold `#D4A62A`
  - `--color-gold-400`: Light gold highlight `#F2CB5B`
  - `--color-gold-600`: Dark gold border `#B8871A`
- **Fonts:** Loaded in `index.html` via Google Fonts (`Cinzel`, `Playfair Display`, `Inter`, `Poppins`, `Great Vibes`).
