# Olive App — Frontend Landing Page

A React + Tailwind CSS recreation of the [oliveapp.com](https://oliveapp.com) landing page, built as a frontend assessment project.

Link:https://olive-mauve.vercel.app/

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Open http://localhost:5173

# 3. Build for production
npm run build
```

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI components |
| Vite | Dev server & bundler |
| Tailwind CSS v3 | Utility-first styling |
| Google Fonts | Nunito (headings) + DM Sans (body) |

No UI libraries used — every component is hand-built.

## Project Structure

```
olive-updated/
├── index.html                 ← Root HTML, loads Google Fonts
├── vite.config.js
├── tailwind.config.js         ← Custom olive colour palette + fonts
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx               ← React entry point
    ├── App.jsx                ← Root layout — composes all sections
    ├── index.css              ← Tailwind directives + keyframes
    └── components/
        ├── Button.jsx         ← Reusable button (primary / ghost)
        ├── Navbar.jsx         ← Sticky nav + mobile hamburger
        ├── Hero.jsx           ← Hero section + CTAs
        ├── PhoneMockup.jsx    ← Inline SVG phone UI
        ├── Features.jsx       ← 6-card feature grid
        ├── HowItWorks.jsx     ← 4-step process
        ├── Testimonials.jsx   ← Review cards + app store badges
        └── Footer.jsx         ← Footer with links + socials
```

## Interactivity Checklist

- [x] All buttons show `alert("Coming soon!")` on click
- [x] Navbar CTA and Sign in are clickable
- [x] App Store / Google Play badges are clickable
- [x] Nav links scroll to sections via anchor `href`
- [x] Mobile hamburger opens/closes with animation
- [x] All buttons have hover color + scale effects
- [x] Feature and testimonial cards lift on hover
- [x] Phone mockup scales up slightly on hover
- [x] "Join Community" arrow slides right on hover
- [x] Social icons invert color on hover
- [x] Hero content animates in with staggered fade-up

## Tailwind Custom Colors

```js
olive: {
  50:  '#f2f9f0',
  100: '#e1f2db',
  ...
  900: '#1a3314',  // primary brand dark green
}
```

## Component Guide

### `<Button variant="primary" onClick={fn} icon={<AppleIcon />}>`
Two variants: `primary` (filled dark green) and `ghost` (transparent text link).

### `<Navbar />`
Sticky, `backdrop-blur`, `border-b`. Desktop: all links visible. Mobile: hamburger toggles dropdown.

### `<PhoneMockup />`
Pure inline SVG — no image files needed. Shows Fig & Olive Crackers scan with 46/100 score.
