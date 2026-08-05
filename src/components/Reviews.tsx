import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Meera Shah",
    role: "2:41 marathoner · Mumbai",
    body: "Took the Vapor Elite through a 32 km long run in humidity and the upper never held water. Legs felt fresher at 30 km than in my old plated shoe.",
  },
  {
    name: "Daniel Okoye",
    role: "Track club coach · Lagos",
    body: "We rotate 14 athletes through the Air-Flux 3. Midsole is still lively past 600 km, which is where most daily trainers give up.",
  },
  {
    name: "Lena Hoffmann",
    role: "Ultra runner · Innsbruck",
    body: "Terra Grip held wet limestone on a 4 hour descent. The 4 mm drop keeps me over my forefoot without calf blowouts.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <p className="eyebrow">Field Reports</p>
      <h2 className="mt-3 max-w-2xl text-section">Tested where it hurts</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="surface-card flex h-full flex-col p-7">
            <Quote className="h-6 w-6 shrink-0 text-volt" />
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {r.body}
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-display text-lg font-extrabold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
