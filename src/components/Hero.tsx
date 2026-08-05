import { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import heroImg from "@/assets/hero-runner.jpg";

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function LiveStat() {
  const now = useNow();
  const [runners, setRunners] = useState(18420);

  useEffect(() => {
    const id = setInterval(
      () => setRunners((r) => r + Math.floor(Math.random() * 24) - 8),
      2000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
        </span>
        <span className="font-semibold text-foreground">
          {runners.toLocaleString()}
        </span>
        runners logging kilometres right now
      </span>
      <span className="flex items-center gap-2">
        <Activity className="h-3.5 w-3.5 text-volt" />
        {now ? now.toLocaleTimeString() : "--:--:--"} local
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="pt-[52px] md:pt-[88px]">
      <div className="relative h-[78svh] min-h-[520px] overflow-hidden">
        <img
          src={heroImg}
          alt="Runner mid-stride on wet city asphalt at dawn wearing performance running shoes"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-fade)" }}
        />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-12 md:px-8 md:pb-16">
          <p className="on-media text-xs font-semibold uppercase tracking-[0.22em] animate-rise">
            Spring 2026 · Air-Flux Series
          </p>
          <h1 className="on-media mt-4 max-w-4xl text-display-xl animate-rise">
            Every second
            <br />
            counts
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow">Air-Flux 3 · Just In</p>
            <h2 className="mt-3 text-section">Nitrogen foam. Carbon plate.</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Engineered for runners who measure progress in split seconds — a
            supercritical foam midsole, a full-length carbon plate and a knit upper
            tuned across 240 wind-tunnel sessions.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#collection"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Shop the drop
          </a>
          <a
            href="#tech"
            className="rounded-full border border-input px-7 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            See the tech
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-5">
          <LiveStat />
        </div>
      </div>
    </section>
  );
}
