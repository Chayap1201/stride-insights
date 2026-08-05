import { useEffect, useState } from "react";
import { toast } from "sonner";

function useCountdown(target: number) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function DropCta() {
  const [target] = useState(() => {
    const t = new Date();
    t.setHours(t.getHours() + 47, t.getMinutes() + 12, 0, 0);
    return t.getTime();
  });
  const left = useCountdown(target);
  const [email, setEmail] = useState("");

  const parts =
    left === null
      ? null
      : {
          h: Math.floor(left / 3_600_000),
          m: Math.floor((left % 3_600_000) / 60_000),
          s: Math.floor((left % 60_000) / 1000),
        };

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div
        className="overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-14"
        style={{ boxShadow: "var(--shadow-lift)" }}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Next drop · Vapor Elite "Dawn Volt"</p>
            <h2 className="mt-3 text-section">Doors open in</h2>
            <div className="mt-7 flex gap-3">
              {[
                { k: "HRS", v: parts ? pad(parts.h) : "--" },
                { k: "MIN", v: parts ? pad(parts.m) : "--" },
                { k: "SEC", v: parts ? pad(parts.s) : "--" },
              ].map((b) => (
                <div
                  key={b.k}
                  className="min-w-[84px] rounded-lg border border-border bg-background px-4 py-4 text-center"
                >
                  <p className="font-display text-4xl font-extrabold tabular-nums text-volt">
                    {b.v}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {b.k}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.includes("@")) {
                toast.error("Enter a valid email address");
                return;
              }
              toast.success("You're on the list — early access unlocked.");
              setEmail("");
            }}
            className="w-full"
          >
            <label
              htmlFor="drop-email"
              className="block text-sm font-semibold text-muted-foreground"
            >
              Get first access, 30 minutes before public release.
            </label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                id="drop-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-volt"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full volt-fill px-7 py-3 text-sm font-semibold transition-transform hover:scale-105"
              >
                Notify me
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              No spam. Drop alerts and race-day guides only.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
