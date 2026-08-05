import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Collection } from "@/components/Collection";
import { Tech } from "@/components/Tech";
import { MarketAnalysis } from "@/components/MarketAnalysis";
import { Reviews } from "@/components/Reviews";
import { DropCta } from "@/components/DropCta";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veloce Run — Carbon-Plated Running Shoes for Every Surface" },
      {
        name: "description",
        content:
          "Veloce Run builds nitrogen-foam, carbon-plated running shoes for road, race and trail — plus a real-world analysis of the running footwear market.",
      },
      { property: "og:title", content: "Veloce Run — Performance Running Shoes" },
      {
        property: "og:description",
        content:
          "Nitro-cell foam, 196 g race weight, wind-tunnel knit. Shop road, race and trail running shoes built on athlete data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Marquee />
      <Collection onAdd={(name) => toast.success(`${name} added to your bag`)} />
      <Tech />
      <MarketAnalysis />
      <Reviews />
      <DropCta />
      <SiteFooter />
      <Toaster />
    </main>
  );
}
