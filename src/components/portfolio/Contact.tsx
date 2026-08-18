import { useEffect, useState } from "react";
import { PixelWindow, SectionTitle } from "./PixelWindow";

function LocalTime() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Jakarta",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-xs text-primary">{time} WIB</span>;
}

const field =
  "w-full border border-border bg-background px-3 py-2 font-mono text-xs text-foreground outline-none focus:border-primary";
const label =
  "mb-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="grid-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionTitle>// 06. START_A_PROJECT</SectionTitle>

        <PixelWindow title="new_project_request.dlg" accent className="max-w-2xl">
          {sent ? (
            <div className="py-10 text-center">
              <p className="pixel-swap text-primary">✔ MESSAGE_SENT</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                I reply within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div>
                <label className={label} htmlFor="name">Name</label>
                <input id="name" required className={field} />
              </div>
              <div>
                <label className={label} htmlFor="email">Email</label>
                <input id="email" type="email" required className={field} />
              </div>
              <div>
                <label className={label} htmlFor="type">Project Type</label>
                <select id="type" className={field}>
                  <option>Webflow</option>
                  <option>Shopify</option>
                  <option>Both</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="budget">Budget Range</label>
                <select id="budget" className={field}>
                  <option>$3k – $6k</option>
                  <option>$6k – $12k</option>
                  <option>$12k +</option>
                  <option>Retainer</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="message">Message</label>
                <textarea id="message" rows={5} required className={field} />
              </div>
              <button
                type="submit"
                className="bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground sm:col-span-2"
              >
                [ Transmit Request → ]
              </button>
            </form>
          )}
        </PixelWindow>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-3 md:items-center md:px-6">
          <div className="flex gap-4">
            {["GitHub", "Webflow", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="https://example.com"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                {s} ↗
              </a>
            ))}
          </div>
          <div className="justify-self-start font-mono text-xs text-muted-foreground md:justify-self-center">
            LOCAL_TIME: <LocalTime />
          </div>
          <p className="justify-self-start font-mono text-xs text-muted-foreground md:justify-self-end">
            built with <span className="inline-block animate-heart text-primary">♥</span> &amp; pixels
          </p>
        </div>
      </footer>
    </section>
  );
}