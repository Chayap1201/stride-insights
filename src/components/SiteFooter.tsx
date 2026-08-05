const groups = [
  { title: "Shop", items: ["Road", "Race", "Trail", "Gift cards"] },
  { title: "Support", items: ["Shipping", "Returns", "Size guide", "Contact"] },
  { title: "Company", items: ["About", "Sustainability", "Careers", "Press"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm volt-fill font-display text-lg font-extrabold">
                V
              </span>
              <span className="font-display text-xl font-extrabold">Veloce Run</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Performance running footwear engineered around real athlete data. Concept
              brand built as a front-end case study.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {g.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#top"
                      className="text-sm text-foreground/80 transition-colors hover:text-volt"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Veloce Run. Concept project.</p>
          <p>Not affiliated with Nike, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
