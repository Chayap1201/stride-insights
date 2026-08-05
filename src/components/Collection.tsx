import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import volt from "@/assets/shoe-volt.jpg";
import race from "@/assets/shoe-race.jpg";
import trail from "@/assets/shoe-trail.jpg";

type Shoe = {
  id: string;
  name: string;
  tag: "Road" | "Race" | "Trail";
  price: number;
  compare?: number;
  drop: string;
  weight: string;
  rating: number;
  reviews: number;
  stock: number;
  image: string;
  alt: string;
};

const shoes: Shoe[] = [
  {
    id: "flux-3",
    name: "Air-Flux 3",
    tag: "Road",
    price: 149,
    compare: 179,
    drop: "8 mm drop",
    weight: "241 g (M9)",
    rating: 4.7,
    reviews: 2841,
    stock: 12,
    image: volt,
    alt: "Volt and black Air-Flux 3 road running shoe, side profile",
  },
  {
    id: "vapor-elite",
    name: "Vapor Elite Carbon",
    tag: "Race",
    price: 249,
    drop: "6 mm drop",
    weight: "196 g (M9)",
    rating: 4.9,
    reviews: 1163,
    stock: 4,
    image: race,
    alt: "White and orange Vapor Elite carbon-plate racing shoe, side profile",
  },
  {
    id: "terra-gtx",
    name: "Terra Grip GTX",
    tag: "Trail",
    price: 169,
    drop: "4 mm drop",
    weight: "289 g (M9)",
    rating: 4.6,
    reviews: 934,
    stock: 27,
    image: trail,
    alt: "Matte black Terra Grip trail running shoe with lugged outsole, side profile",
  },
];

const filters = ["All", "Road", "Race", "Trail"] as const;

function StockBar({ stock }: { stock: number }) {
  const pct = Math.min(100, (stock / 40) * 100);
  const low = stock <= 10;
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-widest">
        <span className={low ? "text-ember" : "text-muted-foreground"}>
          {low ? `Only ${stock} left` : "In stock"}
        </span>
        <span className="text-muted-foreground">live inventory</span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: low ? "var(--ember)" : "var(--volt)",
          }}
        />
      </div>
    </div>
  );
}

export function Collection({ onAdd }: { onAdd: (name: string) => void }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = shoes.filter((s) => filter === "All" || s.tag === filter);

  return (
    <section id="collection" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow">The Line-up</p>
          <h2 className="mt-3 text-section">Built for your surface</h2>
        </div>
        <div className="col-span-2 flex flex-wrap gap-2 sm:col-auto">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                filter === f
                  ? "border-transparent volt-fill"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <article
            key={s.id}
            className="group surface-card overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
            style={{ boxShadow: "var(--shadow-lift)" }}
          >
            <div className="relative overflow-hidden bg-muted">
              <img
                src={s.image}
                alt={s.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                {s.tag}
              </span>
              {s.compare && (
                <span className="absolute right-4 top-4 rounded-full volt-fill px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                  Save ${s.compare - s.price}
                </span>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 truncate font-display text-2xl font-extrabold">
                  {s.name}
                </h3>
                <div className="shrink-0 text-right">
                  <p className="font-display text-xl font-extrabold">${s.price}</p>
                  {s.compare && (
                    <p className="text-xs text-muted-foreground line-through">
                      ${s.compare}
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-volt text-volt" />
                <span className="font-semibold text-foreground">{s.rating}</span>
                {s.reviews.toLocaleString()} reviews · {s.weight} · {s.drop}
              </p>

              <StockBar stock={s.stock} />

              <button
                type="button"
                onClick={() => onAdd(s.name)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-volt hover:text-volt-foreground"
              >
                Add to bag
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
