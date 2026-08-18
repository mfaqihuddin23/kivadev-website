import avatar from "@/assets/avatar.jpg";
import { PixelWindow, SectionTitle } from "./PixelWindow";

const changelog = [
  { v: "v2026.1", body: "Independent developer — Webflow & Shopify partner builds." },
  { v: "v2024.3", body: "Senior Frontend Dev @ Northline Studio — ecommerce systems." },
  { v: "v2022.0", body: "Webflow Developer @ Kolektif — Figma-to-Webflow pipeline." },
  { v: "v2020.0", body: "Frontend Dev @ Sarana Digital — first Liquid theme shipped." },
];

const stats = [
  { v: "50+", l: "Webflow sites delivered" },
  { v: "30+", l: "Shopify stores launched" },
  { v: "6", l: "Years shipping frontend" },
  { v: "98", l: "Avg. Lighthouse perf" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionTitle>// 04. ABOUT_&amp;_EXPERIENCE</SectionTitle>
        <div className="grid gap-6 lg:grid-cols-2">
          <PixelWindow title="operator.png" bodyClassName="p-0">
            <img
              src={avatar}
              alt="Pixel art avatar of the developer"
              loading="lazy"
              width={768}
              height={768}
              className="pixelated aspect-square w-full object-cover contrast-125"
            />
            <div className="border-t border-border p-5">
              <p className="text-sm text-muted-foreground">
                I'm Faqih — a frontend developer who builds marketing sites and
                storefronts that load fast, convert well, and stay editable by
                the people who own them. Six years, three continents worth of
                clients, zero abandoned handovers.
              </p>
            </div>
          </PixelWindow>

          <div className="grid gap-6">
            <PixelWindow title="CHANGELOG.md">
              <ul className="space-y-4">
                {changelog.map((c) => (
                  <li key={c.v} className="font-mono text-xs">
                    <span className="pixel-swap text-primary">{c.v}</span>
                    <p className="mt-1 text-muted-foreground">{c.body}</p>
                  </li>
                ))}
              </ul>
            </PixelWindow>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="pixel-border bg-card p-4">
                  <p className="pixel-swap text-2xl font-bold text-primary">
                    {s.v}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}