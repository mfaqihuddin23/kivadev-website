import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "#work", label: "work" },
  { href: "#stack", label: "stack" },
  { href: "#services", label: "services" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [pixel, setPixel] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("font-pixel-mode", pixel);
  }, [pixel]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 md:px-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center border border-primary bg-primary/15 font-mono text-xs text-primary animate-blink">
            ▮▮
          </span>
          <span className="pixel-swap truncate font-mono text-sm font-bold uppercase tracking-widest">
            faqih.dev
          </span>
        </Link>

        <nav className="hidden items-center gap-5 justify-self-center lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              #{l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-end">
          <span className="hidden items-center gap-2 border border-primary/50 bg-primary/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-primary sm:inline-flex">
            <span className="h-2 w-2 bg-primary animate-blink" />
            Open for Projects
          </span>
          <button
            onClick={() => setPixel((p) => !p)}
            className="border border-border px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            [{pixel ? "8-BIT" : "CLEAN"}]
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="border border-border px-2 py-1.5 font-mono text-[10px] text-muted-foreground lg:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-border px-4 py-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              #{l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}