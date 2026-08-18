import { Link, useParams } from "react-router-dom";

import { Badge, PixelWindow } from "@/components/portfolio/PixelWindow";
import { getNextProject, getProject } from "@/data/projects";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const next = slug ? getNextProject(slug) : undefined;

  if (!slug || !project || !next) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link
            to="/#work"
            className="min-w-0 truncate font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            [ ← Back to Portfolio ]
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 border border-primary bg-primary/10 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-primary"
          >
            [ LIVE SITE ↗ ]
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{project.summary}</p>

        <dl className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-4">
          {[
            ["Client", project.client],
            ["Role", project.role],
            ["Stack", project.badges.join(" · ")],
            ["Timeline", project.timeline],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {k}
              </dt>
              <dd className="mt-1 text-sm">{v}</dd>
            </div>
          ))}
        </dl>

        <PixelWindow
          title={project.liveUrl.replace("https://", "")}
          className="mt-10"
          bodyClassName="p-0"
          accent
        >
          <img
            src={project.image}
            alt={`${project.title} browser mockup`}
            width={1024}
            height={768}
            className="pixelated w-full object-cover contrast-125"
          />
        </PixelWindow>

        <section className="mt-14">
          <h2 className="pixel-swap font-mono text-sm uppercase tracking-[0.2em] text-primary">
            // overview_&amp;_challenge
          </h2>
          <ul className="mt-5 space-y-3">
            {project.challenge.map((c) => (
              <li key={c} className="text-sm text-muted-foreground">
                <span className="text-primary">▸</span> {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="pixel-swap font-mono text-sm uppercase tracking-[0.2em] text-primary">
            // technical_execution
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {project.execution.map((e) => (
              <PixelWindow key={e.title} title="module">
                <h3 className="text-base font-bold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.body}</p>
              </PixelWindow>
            ))}
          </div>

          <PixelWindow title={project.code.label} className="mt-6" bodyClassName="p-0">
            <pre className="scanlines overflow-x-auto bg-background/60 p-4 font-mono text-xs leading-relaxed text-primary">
              <code>{project.code.body}</code>
            </pre>
          </PixelWindow>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.lighthouse.map((l) => (
              <div key={l.label} className="pixel-border bg-card p-4 text-center">
                <p className="pixel-swap text-2xl font-bold text-primary">{l.score}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {l.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="pixel-swap font-mono text-sm uppercase tracking-[0.2em] text-primary">
            // visual_gallery
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.gallery.map((g) => (
              <PixelWindow key={g.caption} title={g.caption} bodyClassName="p-0">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="pixelated w-full object-cover contrast-125 saturate-75"
                />
              </PixelWindow>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="pixel-swap font-mono text-sm uppercase tracking-[0.2em] text-primary">
            // key_results
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((r) => (
              <div key={r.label} className="pixel-border-brand bg-card p-5">
                <p className="pixel-swap text-2xl font-bold text-primary">{r.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Link
          to={`/work/${next.slug}`}
          className="mt-16 block border border-border bg-card p-6 transition-colors hover:border-primary"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Next project
          </p>
          <p className="mt-2 text-xl font-bold">{next.title} →</p>
        </Link>
      </main>
    </div>
  );
}
