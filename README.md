# Pixel Perfect Portfolios

Build a modern, high-converting, single-page developer portfolio with a dynamic Case Study detail page using a "Neo-Brutalist & Pixel Hybrid" aesthetic.

---

### 🎨 DESIGN & AESTHETIC SYSTEM

- **Style:** Dark mode UI with crisp, modern typography paired with 8-bit/pixelated UI accents (retro window headers, pixelated badge tags, high-contrast borders).

- **Color Palette:**

  - Background: Deep Charcoal / Off-Black (`#0F0F12`)

  - Accent / Brand: Vibrant Neon Green (`#00FF66`) or Retro Electric Cyan (`#00E5FF`)

  - Surface Cards: Dark Slate (`#1A1A22`) with subtle 1px pixel borders

  - Text: Crisp White (`#FFFFFF`) for headers, Muted Gray (`#A0A0B0`) for body text

- **Typography:**

  - Headers/Body: Modern Sans-Serif (e.g., Space Grotesk, Inter)

  - Code/Accents: Monospace (e.g., JetBrains Mono) with optional Pixel Display font (e.g., Press Start 2P / Pixelify Sans) for subtle retro badges.

---

### 📄 PAGE ARCHITECTURE & ROUTES

1. **Main Single-Page Layout (`/`):**

   - **Navbar:**

     - Left: Animated/pixelated logo/avatar icon + Developer Name.

     - Center: Anchor navigation (`#work`, `#stack`, `#services`, `#about`, `#contact`).

     - Right: Blinking green pixel status pill `🟢 Open for Projects` + Theme toggle button (`[8-BIT / CLEAN]`).

   - **Hero Section (`#hero`):**

     - Headline: "Crafting Pixel-Perfect Webflow & Shopify Experiences."

     - Subheadline: "Frontend, Webflow, and Shopify Liquid Developer specializing in high-converting, custom web experiences."

     - Interactive Widget: A retro OS terminal window frame with `[—] [口] [X]` buttons displaying auto-typing code snippets highlighting core skills (`Webflow`, `Shopify Liquid`, `GSAP`, `React`).

     - CTAs: Primary button `[ View Selected Work ↓ ]` + Secondary `[ Book a Call ]`.

   - **Selected Work Section (`#work`):**

     - Section Title: `// 01. SELECTED_PROJECTS`

     - Filter Bar: Interactive tabs for `All`, `Webflow`, `Shopify`, `Frontend`.

     - Bento Grid Cards: Each card features a retro window frame, image thumbnail with crisp pixelated hover/transition effect, platform badges (`[Shopify Liquid]`, `[Webflow CMS]`, `[GSAP]`), brief metric/outcome, and a link button `[ Read Case Study → ]` navigating to `/work/:slug`.

   - **Tech Stack Matrix (`#stack`):**

     - Section Title: `// 02. SYSTEM_CAPABILITIES`

     - 3-Column Arcade Matrix:

       1. **Webflow Mastery:** Custom Code Integration, Client-First CMS, Finsweet Attributes.

       2. **Shopify E-Commerce:** Custom Theme Dev (Liquid), Storefront CRO, Custom Sections.

       3. **Frontend Engineering:** HTML/CSS/Tailwind, ES6+ JS/React, GSAP/Three.js, APIs.

     - Interactive Touch: Hovering a card shows a retro stat bar (`EXP: 99/99`).

   - **Services & Process (`#services`):**

     - Section Title: `// 03. SERVICES_&_WORKFLOW`

     - Services offered: Figma-to-Webflow, Custom Shopify Themes, Retainer Dev Partner.

     - 4-Step Process Timeline: `01_DISCOVERY` ➔ `02_BUILD` ➔ `03_ANIMATE` ➔ `04_LAUNCH`.

   - **Developer Playground / Interactive Mini-Shop (`#playground`):**

     - A simulated retro arcade e-commerce drawer showing 2-3 downloadable developer assets (e.g., "Webflow UI Kit (Free)", "Shopify Section Template") with a working "Add to Cart / Checkout" UI simulation.

   - **About & Experience (`#about`):**

     - Two-column grid with pixel art photo/avatar and a retro terminal changelog timeline of work history.

     - Quick Stats Counter (e.g., `50+ Webflow Sites Delivered`, `30+ Shopify Stores Launched`).

   - **Contact & Footer (`#contact`):**

     - Section Title: `// 04. START_A_PROJECT`

     - Retro dialog-box styled contact form: Name, Email, Project Type dropdown (`Webflow`, `Shopify`, `Both`), Budget Range, Message.

     - Footer: GitHub, Webflow, LinkedIn links + Live local time widget + retro pixel heart animation.

---

2. **Dynamic Case Study Detail Page (`/work/:slug`):**

   - Header: Sticky header with `[ ← Back to Portfolio ]` and `[ LIVE SITE ↗ ]` button.

   - Case Study Hero: Title, Metadata block (Client, Role, Stack, Timeline), and high-res browser frame mockup.

   - Overview & Challenge: Client goals and technical obstacles.

   - Technical Execution: Cards detailing Webflow/Shopify architecture, custom code snippets in terminal code boxes, and Lighthouse performance scores.

   - Visual Gallery: Image grid/previews of interactive animations.

   - Key Results: Stat callouts with pixel borders (`+140% Conversion Rate`, `0.8s Load Speed`).

   - Next Project Navigation at bottom.

---

### 🛠️ TECHNICAL REQUIREMENTS

- Include smooth scrolling for anchor links (`#work`, `#contact`, etc.).

- Add CSS rule `image-rendering: pixelated;` to pixel assets/badges.

- Ensure 100% responsive design across desktop, tablet, and mobile devices.

- Mock dynamic routing so clicking any portfolio card opens a fully styled sample case study page.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kivaisme.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d965be9f-b675-47c4-a9fd-e8ddb2f5fd98).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
