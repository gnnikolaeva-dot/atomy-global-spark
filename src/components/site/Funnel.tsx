import { ArrowRight, Map, Rocket, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    icon: Video,
    step: "Step 1",
    title: "30-minute video call",
    copy: "A focused conversation with Galina: your goals, your time, your market. No pressure, no group webinar.",
  },
  {
    icon: Map,
    step: "Step 2",
    title: "Personalized roadmap",
    copy: "You leave with a written plan: your PV routine, your first-partner list and a weekly rhythm.",
  },
  {
    icon: Rocket,
    step: "Step 3",
    title: "System activation · 10K PV start",
    copy: "Free registration, a 10 000 PV starting order, and you're inside the duplication engine.",
  },
];

export function Funnel({ onBook }: { onBook: () => void }) {
  return (
    <section id="strategy-call" className="relative border-y py-22 lg:py-28">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-emerald text-xs font-bold tracking-[0.2em] uppercase">
          Consultation funnel
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold lg:text-4xl">
          From curious to <span className="text-gradient">activated</span> in three steps
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.step} className="glass relative rounded-3xl p-7">
              <span className="text-muted-foreground/25 absolute top-5 right-6 text-5xl font-extrabold">
                0{i + 1}
              </span>
              <span className="bg-[image:var(--gradient-violet)] text-primary-foreground grid size-11 place-items-center rounded-xl">
                <s.icon className="size-5" />
              </span>
              <div className="text-primary mt-5 text-xs font-bold tracking-wider uppercase">
                {s.step}
              </div>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-6 flex flex-col items-center gap-5 rounded-3xl p-9 text-center">
          <h3 className="max-w-xl text-2xl font-extrabold">
            Your next 6 months start with one 30-minute call
          </h3>
          <p className="text-muted-foreground max-w-lg text-sm">
            Limited slots each week — Galina personally runs every strategy call.
          </p>
          <Button variant="cta" size="xl" onClick={onBook}>
            Book 30-Min Strategy Call <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
