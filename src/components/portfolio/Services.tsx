import { PixelWindow, SectionTitle } from "./PixelWindow";

const services = [
  {
    title: "Figma-to-Webflow",
    price: "from $3.5k",
    body: "Pixel-accurate Client-First builds with CMS, interactions and a handover doc your team can actually use.",
  },
  {
    title: "Custom Shopify Themes",
    price: "from $6k",
    body: "Liquid theme development, custom sections, CRO-focused PDP/cart work and app de-bloating.",
  },
  {
    title: "Retainer Dev Partner",
    price: "from $2k/mo",
    body: "Ongoing frontend capacity: campaign pages, A/B tests, performance budgets and motion work.",
  },
];

const steps = [
  { id: "01_DISCOVERY", body: "Scope, audit, success metrics, tech decisions." },
  { id: "02_BUILD", body: "Component system, CMS modelling, responsive build." },
  { id: "03_ANIMATE", body: "GSAP motion layer, micro-interactions, QA passes." },
  { id: "04_LAUNCH", body: "Perf budget, SEO, analytics, handover + training." },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionTitle>// 03. SERVICES_&amp;_WORKFLOW</SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <PixelWindow key={s.title} title="service.exe">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="pixel-swap mt-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                {s.price}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </PixelWindow>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.id} className="pixel-border bg-card p-5">
              <p className="pixel-swap font-mono text-[11px] uppercase tracking-widest text-primary">
                {s.id}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                {i < steps.length - 1 ? "➔" : "✔"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}