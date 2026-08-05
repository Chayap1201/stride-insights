import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";

const nav = [
  {
    label: "New & Featured",
    href: "#collection",
    columns: [
      { title: "Featured", items: ["New Releases", "Best Sellers", "Air-Flux Series", "Member Exclusives"] },
      { title: "Shop Icons", items: ["Vapor Elite", "Air-Flux", "Terra Grip"] },
    ],
  },
  {
    label: "Men",
    href: "#collection",
    columns: [
      { title: "Shoes", items: ["Road Running", "Race Day", "Trail", "Recovery"] },
      { title: "Apparel", items: ["Tops", "Shorts", "Tights", "Jackets"] },
    ],
  },
  {
    label: "Women",
    href: "#collection",
    columns: [
      { title: "Shoes", items: ["Road Running", "Race Day", "Trail", "Recovery"] },
      { title: "Apparel", items: ["Sports Bras", "Tops", "Shorts", "Tights"] },
    ],
  },
  {
    label: "Technology",
    href: "#tech",
    columns: [
      { title: "Innovation", items: ["Nitro-cell Foam", "Carbon Plate", "Wind-tunnel Knit", "Recycled Content"] },
    ],
  },
  {
    label: "Insights",
    href: "#market",
    columns: [
      { title: "Brand", items: ["Market Analysis", "Athlete Field Reports", "Sustainability"] },
    ],
  },
];

const utility = ["Find a Store", "Help", "Join Us", "Sign In"];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = nav.find((n) => n.label === hover);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-surface md:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-end gap-5 px-8 py-1.5">
          {utility.map((u) => (
            <a
              key={u}
              href="#collection"
              className="text-[11px] font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {u}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`bg-background transition-shadow duration-300 ${shadow ? "shadow-sm" : ""}`}
        onMouseLeave={() => setHover(null)}
      >
        <nav className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:grid-cols-[auto_1fr_auto] md:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-primary font-display text-lg font-extrabold text-primary-foreground">
              V
            </span>
            <span className="truncate font-display text-xl font-extrabold tracking-tight">
              Veloce
            </span>
          </a>

          <div className="hidden items-center justify-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onMouseEnter={() => setHover(n.label)}
                className="relative py-3 text-sm font-medium transition-colors hover:text-foreground/60"
              >
                {n.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-primary transition-transform duration-300 ${
                    hover === n.label ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="hidden items-center gap-2 rounded-full bg-surface px-4 py-2 lg:flex">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                aria-label="Search shoes"
                placeholder="Search"
                className="w-28 bg-transparent text-sm outline-none placeholder:text-muted-foreground focus:w-40 transition-all"
              />
            </div>
            <button
              type="button"
              aria-label="Favourites"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Bag"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {active && (
          <div className="hidden border-t border-border bg-background md:block">
            <div className="mx-auto flex max-w-[1600px] gap-16 px-8 pb-10 pt-6">
              {active.columns.map((c) => (
                <div key={c.title}>
                  <p className="text-sm font-semibold">{c.title}</p>
                  <ul className="mt-3 space-y-2">
                    {c.items.map((i) => (
                      <li key={i}>
                        <a
                          href={active.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {i}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="max-h-[calc(100svh-64px)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-2 md:hidden">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-2xl font-extrabold"
            >
              {n.label}
            </a>
          ))}
          <div className="mt-6 flex flex-wrap gap-4">
            {utility.map((u) => (
              <a key={u} href="#collection" className="text-xs text-muted-foreground">
                {u}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
