import { ArrowRight, ShoppingBag, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIMELINE = [
  { month: "Month 1", team: "You + 2", income: "~7 000 ₽" },
  { month: "Month 2", team: "6 active", income: "~15 000 ₽" },
  { month: "Month 3", team: "14 active", income: "~28 000 ₽" },
  { month: "Month 4", team: "30 active", income: "~46 000 ₽" },
  { month: "Month 5", team: "62 active", income: "~68 000 ₽" },
  { month: "Month 6", team: "126 active", income: "91 000 ₽" },
];

export function DuplicationSystem({ onBook }: { onBook: () => void }) {
  return (
    <section id="system" className="relative border-y py-22 lg:py-28">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-emerald text-xs font-bold tracking-[0.2em] uppercase">
          The duplication system
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold lg:text-4xl">
          The 60K PV model: <span className="text-gradient">two actions a month</span>,
          repeated by everyone you sponsor
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="glass rounded-3xl p-7">
            <span className="bg-primary/15 text-primary grid size-11 place-items-center rounded-xl">
              <ShoppingBag className="size-5" />
            </span>
            <div className="text-muted-foreground mt-5 text-xs font-bold tracking-wider uppercase">
              KPI 01
            </div>
            <h3 className="mt-1 text-xl font-bold">60 000 PV personal volume</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Replace what you already buy — care, household, wellness — with your own
              store. No extra budget, no stock to hold, no selling required to qualify.
            </p>
          </div>
          <div className="glass rounded-3xl p-7">
            <span className="bg-emerald/15 text-emerald grid size-11 place-items-center rounded-xl">
              <UserPlus className="size-5" />
            </span>
            <div className="text-muted-foreground mt-5 text-xs font-bold tracking-wider uppercase">
              KPI 02
            </div>
            <h3 className="mt-1 text-xl font-bold">2 active partners</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Left leg, right leg. Each partner mirrors the same two steps — that is the
              binary duplication that turns linear effort into compounding structure.
            </p>
          </div>
        </div>

        <div className="glass mt-6 rounded-3xl p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-lg font-bold">Six-month duplication curve</h3>
            <p className="text-muted-foreground text-xs">
              Illustrative projection at a consistent 2-partner monthly pace
            </p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {TIMELINE.map((t, i) => (
              <div
                key={t.month}
                className="bg-surface-2/60 rounded-2xl border p-4"
                style={{ opacity: 0.6 + i * 0.07 }}
              >
                <div className="text-muted-foreground text-xs font-semibold">
                  {t.month}
                </div>
                <div className="mt-2 text-base font-extrabold">{t.income}</div>
                <div className="text-primary mt-1 text-xs">{t.team}</div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button variant="cta" onClick={onBook}>
              Get my personal 6-month plan <ArrowRight />
            </Button>
            <p className="text-muted-foreground text-xs">
              ≈ $1,000+ monthly passive income by month six
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
