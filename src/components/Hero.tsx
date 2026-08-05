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
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Runner mid-stride on wet city asphalt at dawn wearing volt running shoes"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-fade)" }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <p className="eyebrow animate-rise">Spring 2026 · Air-Flux Series</p>
        <h1 className="mt-4 max-w-4xl text-hero animate-rise">
          Every second
          <br />
          <span className="text-volt">counts</span> forward
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Engineered for runners who measure progress in split seconds. Nitrogen-infused
          foam, a full-length carbon plate, and a knit upper tuned in the wind tunnel.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#collection"
            className="rounded-full volt-fill px-7 py-3 text-sm font-semibold transition-transform hover:scale-105"
            style={{ boxShadow: "var(--shadow-volt)" }}
          >
            Shop the drop
          </a>
          <a
            href="#tech"
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
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
