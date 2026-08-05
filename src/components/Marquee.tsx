const words = [
  "Just Keep Moving",
  "Carbon Plated",
  "Nitro Foam",
  "Race Day Ready",
  "Marathon Tested",
];

export function Marquee() {
  const line = [...words, ...words];
  return (
    <div className="border-y border-border bg-surface py-4 overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-10">
            {line.map((w, i) => (
              <span
                key={`${dup}-${i}`}
                className="font-display text-xl font-extrabold text-muted-foreground md:text-2xl"
              >
                {w}
                <span className="ml-10 text-volt">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
