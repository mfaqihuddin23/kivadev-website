import { useState } from "react";
import { Badge, PixelWindow, SectionTitle } from "./PixelWindow";

const assets = [
  { id: "kit", name: "Webflow UI Kit", tag: "Free", price: 0 },
  { id: "section", name: "Shopify Section Template", tag: "Liquid", price: 24 },
  { id: "gsap", name: "GSAP Scroll Recipes", tag: "JS", price: 18 },
];

export function Playground() {
  const [cart, setCart] = useState<string[]>([]);
  const [checkedOut, setCheckedOut] = useState(false);

  const total = cart.reduce(
    (sum, id) => sum + (assets.find((a) => a.id === id)?.price ?? 0),
    0,
  );

  return (
    <section id="playground" className="grid-bg border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionTitle>// 05. DEV_PLAYGROUND</SectionTitle>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="grid gap-4 sm:grid-cols-3">
            {assets.map((a) => (
              <PixelWindow key={a.id} title="asset.zip">
                <Badge>{a.tag}</Badge>
                <h3 className="mt-3 text-base font-bold">{a.name}</h3>
                <p className="mt-2 font-mono text-xs text-primary">
                  {a.price === 0 ? "FREE" : `$${a.price}.00`}
                </p>
                <button
                  onClick={() => {
                    setCheckedOut(false);
                    setCart((c) => (c.includes(a.id) ? c : [...c, a.id]));
                  }}
                  disabled={cart.includes(a.id)}
                  className="mt-4 w-full border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                >
                  {cart.includes(a.id) ? "[ In Cart ]" : "[ Add to Cart ]"}
                </button>
              </PixelWindow>
            ))}
          </div>

          <PixelWindow title="cart_drawer" accent>
            {cart.length === 0 ? (
              <p className="font-mono text-xs text-muted-foreground">
                Cart empty. Insert coin.
              </p>
            ) : (
              <ul className="space-y-2">
                {cart.map((id) => {
                  const a = assets.find((x) => x.id === id)!;
                  return (
                    <li
                      key={id}
                      className="flex items-center justify-between gap-3 font-mono text-xs"
                    >
                      <span className="min-w-0 truncate">{a.name}</span>
                      <button
                        onClick={() => setCart((c) => c.filter((x) => x !== id))}
                        className="shrink-0 text-muted-foreground hover:text-destructive"
                      >
                        [x]
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4 font-mono text-xs">
              <span className="text-muted-foreground">TOTAL</span>
              <span className="text-primary">${total}.00</span>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={() => {
                setCheckedOut(true);
                setCart([]);
              }}
              className="mt-4 w-full bg-primary px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground disabled:opacity-30"
            >
              [ Checkout ]
            </button>
            {checkedOut && (
              <p className="mt-3 font-mono text-[11px] text-primary">
                ✔ ORDER_COMPLETE — check your inbox (simulated).
              </p>
            )}
          </PixelWindow>
        </div>
      </div>
    </section>
  );
}