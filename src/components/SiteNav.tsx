import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Shop", href: "#collection" },
  { label: "Technology", href: "#tech" },
  { label: "Market", href: "#market" },
  { label: "Athletes", href: "#reviews" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm volt-fill font-display text-lg font-extrabold">
            V
          </span>
          <span className="truncate font-display text-xl font-extrabold tracking-tight">
            Veloce Run
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-volt"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#collection"
            className="rounded-full volt-fill px-5 py-2 text-sm font-semibold transition-transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-2xl font-extrabold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#collection"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full volt-fill py-3 text-center font-semibold"
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
}
