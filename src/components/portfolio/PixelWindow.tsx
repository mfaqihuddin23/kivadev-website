import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PixelWindow({
  title,
  children,
  className,
  bodyClassName,
  accent = false,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-card",
        accent ? "pixel-border-brand" : "pixel-border",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 bg-muted-foreground" />
          <span className="h-2.5 w-2.5 bg-muted-foreground" />
          <span className="h-2.5 w-2.5 bg-primary" />
        </div>
        <span className="min-w-0 flex-1 truncate font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
        <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
          [—] [口] [X]
        </span>
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="pixel-swap mb-8 font-mono text-sm uppercase tracking-[0.2em] text-primary sm:text-base">
      {children}
    </h2>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="pixel-swap inline-block border border-primary/50 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
      [{children}]
    </span>
  );
}