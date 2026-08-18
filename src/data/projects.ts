import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export type Category = "Webflow" | "Shopify" | "Frontend";

export type Project = {
  slug: string;
  title: string;
  client: string;
  role: string;
  timeline: string;
  categories: Category[];
  badges: string[];
  metric: string;
  summary: string;
  image: string;
  liveUrl: string;
  challenge: string[];
  execution: { title: string; body: string }[];
  code: { label: string; lang: string; body: string };
  lighthouse: { label: string; score: number }[];
  results: { value: string; label: string }[];
  gallery: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "feron-apparel",
    title: "Feron Apparel — Shopify Storefront",
    client: "Feron Apparel",
    role: "Lead Shopify Liquid Developer",
    timeline: "8 weeks · Q1 2026",
    categories: ["Shopify", "Frontend"],
    badges: ["Shopify Liquid", "GSAP", "Tailwind"],
    metric: "+140% conversion rate after relaunch",
    summary:
      "A fully custom Shopify theme built from Figma, with a bundle builder, animated PDP and sub-second load times.",
    image: p1,
    liveUrl: "https://example.com",
    challenge: [
      "The legacy Dawn-based theme was buried under six apps, pushing LCP past 4.2s on mobile.",
      "Merchandising wanted editable sections for every campaign without touching code.",
      "The bundle builder had to work with native Shopify cart transform, not a third-party app.",
    ],
    execution: [
      {
        title: "Theme architecture",
        body: "Rebuilt the theme from scratch on Liquid + Tailwind with a section-per-block system. Every module is schema-driven so marketing composes pages in the theme editor.",
      },
      {
        title: "Cart & bundles",
        body: "Replaced three apps with a single Cart Transform function and an AJAX cart drawer, dropping 340KB of blocking JS.",
      },
      {
        title: "Motion layer",
        body: "GSAP ScrollTrigger drives the PDP gallery pinning and the reveal timeline, lazily imported so it never blocks first paint.",
      },
    ],
    code: {
      label: "sections/bundle-builder.liquid",
      lang: "liquid",
      body: `{% liquid
  assign bundle = section.settings.bundle_products
  assign discount = section.settings.discount | default: 15
%}
<div class="bundle" data-discount="{{ discount }}">
  {% for product in bundle %}
    <button
      class="bundle__item"
      data-variant="{{ product.selected_or_first_available_variant.id }}">
      {{ product.title }} — {{ product.price | money }}
    </button>
  {% endfor %}
</div>`,
    },
    lighthouse: [
      { label: "Performance", score: 97 },
      { label: "Accessibility", score: 100 },
      { label: "Best Practices", score: 100 },
      { label: "SEO", score: 100 },
    ],
    results: [
      { value: "+140%", label: "Conversion rate" },
      { value: "0.8s", label: "Largest contentful paint" },
      { value: "-62%", label: "Bounce on mobile" },
      { value: "3x", label: "Faster campaign launches" },
    ],
    gallery: [
      { src: p1, caption: "Animated PDP with pinned gallery" },
      { src: p3, caption: "Campaign landing template" },
    ],
  },
  {
    slug: "orbit-saas",
    title: "Orbit — Webflow SaaS Marketing Site",
    client: "Orbit Analytics",
    role: "Webflow Developer & Motion Lead",
    timeline: "5 weeks · Q4 2025",
    categories: ["Webflow", "Frontend"],
    badges: ["Webflow CMS", "Client-First", "Finsweet"],
    metric: "12 templated pages shipped in 5 weeks",
    summary:
      "Figma-to-Webflow build on Client-First with a CMS-driven changelog, docs and pricing matrix.",
    image: p2,
    liveUrl: "https://example.com",
    challenge: [
      "Marketing needed to publish docs and changelog entries without a developer in the loop.",
      "The pricing matrix had to stay readable at 360px while comparing four plans.",
      "Interactions had to feel engineered, not template-y.",
    ],
    execution: [
      {
        title: "Client-First system",
        body: "Every utility, component and page structure follows Client-First 2.0 so the in-house team can extend the site safely.",
      },
      {
        title: "CMS + Finsweet",
        body: "Four collections wired with CMS Filter, Load and Nest for docs search and changelog pagination — no custom backend.",
      },
      {
        title: "Custom code",
        body: "GSAP timelines injected via a single page-level embed, guarded by prefers-reduced-motion.",
      },
    ],
    code: {
      label: "page-embed.js",
      lang: "javascript",
      body: `const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reduce.matches) {
  gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.05,
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
}`,
    },
    lighthouse: [
      { label: "Performance", score: 95 },
      { label: "Accessibility", score: 100 },
      { label: "Best Practices", score: 96 },
      { label: "SEO", score: 100 },
    ],
    results: [
      { value: "+68%", label: "Demo requests" },
      { value: "1.1s", label: "Time to interactive" },
      { value: "0", label: "Dev tickets to publish" },
      { value: "12", label: "CMS-driven pages" },
    ],
    gallery: [
      { src: p2, caption: "Pricing matrix with sticky compare row" },
      { src: p3, caption: "CMS-driven changelog" },
    ],
  },
  {
    slug: "angena-studio",
    title: "Angena Studio — Frontend Portfolio Engine",
    client: "Angena Creative Studio",
    role: "Frontend Engineer",
    timeline: "6 weeks · Q3 2025",
    categories: ["Frontend"],
    badges: ["React", "GSAP", "Three.js"],
    metric: "60fps WebGL hero on mid-tier mobile",
    summary:
      "A React front end with a WebGL particle hero, scroll-driven case study transitions and a headless CMS.",
    image: p3,
    liveUrl: "https://example.com",
    challenge: [
      "The studio wanted a signature WebGL moment that still passed Core Web Vitals.",
      "Case study transitions needed to feel continuous between routes.",
      "Editors publish from a headless CMS with zero rebuild wait.",
    ],
    execution: [
      {
        title: "WebGL budget",
        body: "Particle count and DPR scale with device capability; the canvas is dynamically imported after hydration and skipped entirely under reduced motion.",
      },
      {
        title: "Shared element routing",
        body: "GSAP Flip carries the project thumbnail into the case study hero so the route change reads as one continuous move.",
      },
      {
        title: "Data layer",
        body: "Typed content client with incremental revalidation, so publishing is instant and the bundle stays static.",
      },
    ],
    code: {
      label: "hero-particles.ts",
      lang: "typescript",
      body: `const dpr = Math.min(window.devicePixelRatio, 2);
const count = navigator.hardwareConcurrency > 4 ? 12_000 : 4_000;

renderer.setPixelRatio(dpr);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(seedPositions(count), 3),
);`,
    },
    lighthouse: [
      { label: "Performance", score: 93 },
      { label: "Accessibility", score: 100 },
      { label: "Best Practices", score: 100 },
      { label: "SEO", score: 98 },
    ],
    results: [
      { value: "60fps", label: "WebGL hero, mid-tier mobile" },
      { value: "+2.4x", label: "Avg. session duration" },
      { value: "1.4s", label: "Largest contentful paint" },
      { value: "9", label: "Case studies migrated" },
    ],
    gallery: [
      { src: p3, caption: "WebGL particle hero" },
      { src: p1, caption: "Case study scroll transitions" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};