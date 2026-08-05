const marketRows = [
  { year: "2023", value: 44.2 },
  { year: "2024", value: 46.6 },
  { year: "2025", value: 49.1 },
  { year: "2030 (proj.)", value: 63.5 },
];

const shareRows = [
  { brand: "Nike", share: 26, note: "global athletic footwear leader" },
  { brand: "Adidas", share: 12, note: "second largest by revenue" },
  { brand: "New Balance", share: 6, note: "fastest riser in running" },
  { brand: "Asics", share: 5, note: "performance-running specialist" },
  { brand: "Others", share: 51, note: "Hoka, On, Puma, Brooks, regional" },
];

const kpis = [
  {
    label: "Nike FY2025 revenue",
    value: "$46.3B",
    note: "down ~10% YoY from $51.4B in FY2024 (fiscal year ended 31 May)",
  },
  {
    label: "Nike footwear share of revenue",
    value: "~2/3",
    note: "footwear remains the majority of Nike brand revenue",
  },
  {
    label: "Running shoe market CAGR",
    value: "~5%",
    note: "mid-single-digit growth outlook through 2030",
  },
  {
    label: "Direct-to-consumer mix",
    value: "~40%+",
    note: "Nike Direct share of Nike brand revenue in recent years",
  },
];

export function MarketAnalysis() {
  const max = Math.max(...marketRows.map((r) => r.value));

  return (
    <section id="market" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Business Value Proposition</p>
          <h2 className="mt-3 text-section">
            Real-world market <span className="text-volt">analysis</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Veloce is positioned against the actual economics of the category. The
            figures below are industry and company-reported values for the global
            running / athletic footwear market, used to size the opportunity a
            challenger brand is entering.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg border border-border bg-background p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {k.label}
              </p>
              <p className="mt-3 font-display text-4xl font-extrabold text-volt">
                {k.value}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {k.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-background p-7">
            <h3 className="font-display text-xl font-extrabold">
              Global running shoe market size (US$ bn)
            </h3>
            <div className="mt-7 space-y-5">
              {marketRows.map((r) => (
                <div key={r.year}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{r.year}</span>
                    <span className="font-display text-lg font-extrabold">
                      ${r.value}B
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(r.value / max) * 100}%`,
                        backgroundImage: "var(--gradient-volt)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-xs text-muted-foreground">
              Market sizing based on published running-footwear market research
              (2023–2025 actuals, 2030 projection at ~5% CAGR). Ranges vary by
              analyst scope.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-7">
            <h3 className="font-display text-xl font-extrabold">
              Estimated brand share, athletic footwear
            </h3>
            <div className="mt-7 space-y-5">
              {shareRows.map((s) => (
                <div key={s.brand}>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                    <span className="min-w-0 truncate text-sm font-semibold">
                      {s.brand}
                    </span>
                    <span className="shrink-0 font-display text-lg font-extrabold text-volt">
                      {s.share}%
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${s.share}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              h: "Where the gap is",
              p: "Nike's FY2025 decline came alongside share gains at On, Hoka and New Balance — proof that performance runners will switch brands when the product is credibly faster.",
            },
            {
              h: "Go-to-market",
              p: "Direct-to-consumer first: own the run-club channel, Strava integrations and race-expo activations, then wholesale into specialty running retail.",
            },
            {
              h: "Unit economics",
              p: "$149 daily trainer at a target 55% gross margin, $249 race shoe as the halo product driving average order value and press coverage.",
            },
          ].map((c) => (
            <div key={c.h} className="rounded-lg border border-border bg-background p-6">
              <h4 className="font-display text-lg font-extrabold">{c.h}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Sources: Nike Inc. annual and quarterly results (FY2024–FY2025), public
          market-research reporting on the global running footwear category, and
          published brand-share estimates. Figures are rounded; share estimates are
          analyst approximations, not audited values. Veloce Run is a concept brand
          created for this project and is not affiliated with Nike.
        </p>
      </div>
    </section>
  );
}
