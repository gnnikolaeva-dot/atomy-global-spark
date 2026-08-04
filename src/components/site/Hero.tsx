import { useEffect, useState } from "react";
import { ArrowRight, Globe2, PlayCircle, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroNetwork from "@/assets/hero-network.jpg";
import { formatRub } from "./data";

const TARGET = 91000;

export function Hero({ onBook }: { onBook: () => void }) {
  const [earnings, setEarnings] = useState(0);
  const [partners, setPartners] = useState(4217);

  useEffect(() => {
    let frame = 0;
    const total = 60;
    const id = window.setInterval(() => {
      frame += 1;
      const p = 1 - Math.pow(1 - frame / total, 3);
      setEarnings(TARGET * p);
      if (frame >= total) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(
      () => setPartners((p) => p + Math.floor(Math.random() * 3)),
      4200,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-34 pb-20 lg:pt-42 lg:pb-28">
      <img
        src={heroNetwork}
        alt="Global partner network visualisation"
        width={1600}
        height={1008}
        className="pointer-events-none absolute top-0 right-0 h-full w-full object-cover opacity-35 lg:w-[62%]"
      />
      <div className="from-background via-background/85 to-background/20 absolute inset-0 bg-gradient-to-r" />
      <div className="grid-backdrop absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_20%_20%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
          <span className="bg-emerald animate-pulse-dot size-2 rounded-full" />
          Global Business System
          <span className="text-muted-foreground">· 170+ countries</span>
        </div>

        <h1 className="mt-7 max-w-3xl text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
          <span className="text-gradient">Build residual income</span> on the
          infrastructure of a top-10 global company
        </h1>

        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed lg:text-lg">
          A duplication engine for people done with the 9-to-5 trade-off. Two
          measurable monthly actions, one mentor, and a system that compounds
          across borders — not another hustle.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="cta" size="xl" onClick={onBook}>
            Book 30-Min Strategy Call <ArrowRight />
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#system">
              <PlayCircle /> See how the system works
            </a>
          </Button>
        </div>

        <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="glass rounded-2xl p-5">
            <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <TrendingUp className="size-3.5" /> Month 6 target
            </div>
            <div className="mt-2 text-2xl font-extrabold tabular-nums">
              {formatRub(earnings)} <span className="text-primary text-base">RUB</span>
            </div>
            <div className="text-muted-foreground mt-1 text-xs">
              ≈ $1,000+ monthly residual
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <Users className="size-3.5" /> Live social proof
            </div>
            <div className="mt-2 text-2xl font-extrabold tabular-nums">
              {partners.toLocaleString("en-US")}
            </div>
            <div className="text-emerald mt-1 text-xs">
              partners onboarded through this framework
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <Globe2 className="size-3.5" /> Entry cost
            </div>
            <div className="mt-2 text-2xl font-extrabold">$0</div>
            <div className="text-muted-foreground mt-1 text-xs">
              free registration · no franchise fee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
