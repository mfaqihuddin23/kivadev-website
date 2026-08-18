import { useEffect, useState } from "react";
import { PixelWindow } from "./PixelWindow";

const lines = [
  "> const stack = ['Webflow', 'Shopify Liquid', 'GSAP', 'React'];",
  "> deploy('client-first', { cms: true, finsweet: true });",
  "> lighthouse.performance // 98",
  "> status: ready_for_your_project ✔",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    const current = lines[line % lines.length] ?? "";
    let i = 0;
    const typer = setInterval(() => {
      i += 1;
      setText(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(typer);
        setTimeout(() => {
          setText("");
          setLine((l) => l + 1);
        }, 1400);
      }
    }, 32);
    return () => clearInterval(typer);
  }, [line]);

  return { text, index: line % lines.length };
}

export function Hero() {
  const { text, index } = useTypewriter();

  return (
    <section id="hero" className="grid-bg border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <p className="pixel-swap mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            // frontend · webflow · shopify
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Crafting Pixel-Perfect{" "}
            <span className="text-primary">Webflow &amp; Shopify</span>{" "}
            Experiences.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            Frontend, Webflow, and Shopify Liquid Developer specializing in
            high-converting, custom web experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="pixel-border-brand bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              [ View Selected Work ↓ ]
            </a>
            <a
              href="#contact"
              className="pixel-border bg-card px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              [ Book a Call ]
            </a>
          </div>
        </div>

        <PixelWindow title="~/dev/faqih — zsh" accent bodyClassName="p-0">
          <div className="scanlines bg-background/60 p-4 font-mono text-xs leading-relaxed sm:text-sm">
            {lines.slice(0, index).map((l) => (
              <p key={l} className="text-muted-foreground">
                {l}
              </p>
            ))}
            <p className="text-primary">
              {text}
              <span className="animate-caret">█</span>
            </p>
          </div>
        </PixelWindow>
      </div>
    </section>
  );
}