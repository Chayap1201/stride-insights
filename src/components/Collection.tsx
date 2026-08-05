import { useState } from "react";
import { Star } from "lucide-react";
import volt from "@/assets/shoe-volt.jpg";
import race from "@/assets/shoe-race.jpg";
import trail from "@/assets/shoe-trail.jpg";

type Shoe = {
  id: string;
  name: string;
  subtitle: string;
  tag: "Road" | "Race" | "Trail";
  badge?: string;
  price: number;
  compare?: number;
  colours: string[];
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
    subtitle: "Men's Road Running Shoes",
    tag: "Road",
    badge: "Just In",
    price: 149,
    compare: 179,
    colours: ["oklch(0.9 0.23 122)", "oklch(0.18 0 0)", "oklch(0.95 0 0)"],
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
    subtitle: "Unisex Racing Shoes",
    tag: "Race",
    badge: "Best Seller",
    price: 249,
    colours: ["oklch(0.97 0 0)", "oklch(0.68 0.2 45)", "oklch(0.5 0.16 250)"],
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
    subtitle: "Women's Trail Running Shoes",
    tag: "Trail",
    price: 169,
    colours: ["oklch(0.2 0 0)", "oklch(0.55 0.1 150)", "oklch(0.72 0.14 60)"],
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

export function Collection({ onAdd }: { onAdd: (name: string) => void }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = shoes.filter((s) => filter === "All" || s.tag === filter);

  return (
    <section id="collection" className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            New This Week
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {visible.length} styles · live inventory
          </p>
        </div>
        <div className="col-span-2 flex flex-wrap gap-2 sm:col-auto">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                filter === f
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-input text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <article key={s.id} className="group">
            <div className="relative overflow-hidden bg-surface">
              <img
                src={s.image}
                alt={s.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {s.badge && (
                <span className="absolute left-4 top-4 bg-background px-2.5 py-1 text-[11px] font-medium">
                  {s.badge}
                </span>
              )}
              <button
                type="button"
                onClick={() => onAdd(s.name)}
                className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                Add to Bag
              </button>
            </div>

            <div className="mt-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-medium">{s.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{s.subtitle}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-base font-medium">${s.price}.00</p>
                  {s.compare && (
                    <p className="text-sm text-muted-foreground line-through">
                      ${s.compare}.00
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                {s.colours.map((c) => (
                  <span
                    key={c}
                    aria-hidden
                    className="h-4 w-4 rounded-full border border-border"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <span className="ml-1 text-xs text-muted-foreground">
                  {s.colours.length} Colours
                </span>
              </div>

              <p className="mt-3 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-volt text-volt" />
                <span className="font-medium text-foreground">{s.rating}</span>
                {s.reviews.toLocaleString()} reviews · {s.weight} · {s.drop}
              </p>

              <p
                className={`mt-2 text-xs font-medium ${
                  s.stock <= 10 ? "text-ember" : "text-muted-foreground"
                }`}
              >
                {s.stock <= 10 ? `Almost gone — ${s.stock} left` : "In stock"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
