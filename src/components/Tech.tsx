import { Feather, Recycle, Wind, Zap } from "lucide-react";

const specs = [
  {
    icon: Zap,
    title: "Nitro-cell foam",
    body: "Supercritical nitrogen-infused midsole returns up to 87% of impact energy across a 42.2 km effort.",
  },
  {
    icon: Feather,
    title: "196 g race weight",
    body: "Carbon plate laminated to a hollow heel shell — race weight comparable to today's elite super-shoes.",
  },
  {
    icon: Wind,
    title: "Wind-tunnel knit",
    body: "Engineered mesh mapped to sweat-zone data from 240 lab sessions for airflow without hot spots.",
  },
  {
    icon: Recycle,
    title: "38% recycled content",
    body: "Upper yarn, laces and sockliner spun from post-industrial waste; outsole rubber reground in-house.",
  },
];

export function Tech() {
  return (
    <section id="tech" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Innovation Lab</p>
          <h2 className="mt-3 text-section">
            Milliseconds are <span className="text-volt">engineered</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every Veloce platform is validated on a force-plate treadmill before it
            reaches a start line. These are the four systems in the Air-Flux Series.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s) => (
            <div
              key={s.title}
              className="group bg-background p-7 transition-colors hover:bg-secondary"
            >
              <s.icon className="h-7 w-7 text-volt" />
              <h3 className="mt-6 font-display text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
