import { PixelWindow, SectionTitle } from "./PixelWindow";

const matrix = [
  {
    title: "Webflow Mastery",
    exp: "99/99",
    items: [
      "Custom Code Integration",
      "Client-First CMS Architecture",
      "Finsweet Attributes",
      "Figma-to-Webflow pixel parity",
    ],
  },
  {
    title: "Shopify E-Commerce",
    exp: "97/99",
    items: [
      "Custom Theme Dev (Liquid)",
      "Storefront CRO",
      "Custom Sections & Blocks",
      "Cart Transform & AJAX cart",
    ],
  },
  {
    title: "Frontend Engineering",
    exp: "95/99",
    items: [
      "HTML / CSS / Tailwind",
      "ES6+ JavaScript & React",
      "GSAP & Three.js",
      "REST / GraphQL APIs",
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="grid-bg border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionTitle>// 02. SYSTEM_CAPABILITIES</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {matrix.map((m) => (
            <PixelWindow key={m.title} title={m.title.toLowerCase()} className="group">
              <h3 className="text-lg font-bold">{m.title}</h3>
              <ul className="mt-4 space-y-2">
                {m.items.map((i) => (
                  <li key={i} className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">▸</span> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                <p className="pixel-swap font-mono text-[10px] uppercase tracking-widest text-primary">
                  EXP: {m.exp}
                </p>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-3 flex-1 ${
                        i < Math.round((parseInt(m.exp) / 99) * 12)
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </PixelWindow>
          ))}
        </div>
      </div>
    </section>
  );
}