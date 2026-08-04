import { Award, Building2, Globe2, ShieldCheck } from "lucide-react";

const STATS = [
  {
    icon: Building2,
    value: "2009",
    label: "Founded in South Korea",
    copy: "Manufacturing-backed, debt-free growth since day one.",
  },
  {
    icon: Award,
    value: "Top 10",
    label: "Global direct selling enterprise",
    copy: "Ranked among the largest network businesses worldwide.",
  },
  {
    icon: Globe2,
    value: "170+",
    label: "Countries & territories",
    copy: "One global ID — your structure crosses borders with you.",
  },
  {
    icon: ShieldCheck,
    value: "A+A-",
    label: "Absolute quality, absolute price",
    copy: "The philosophy that keeps repeat orders — and residuals — stable.",
  },
];

export function Ecosystem() {
  return (
    <section id="global-scale" className="relative border-y py-22 lg:py-28">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
          Global company ecosystem
        </p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-extrabold lg:text-4xl">
            You don't build on hope. You build on{" "}
            <span className="text-gradient">real infrastructure.</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Logistics, manufacturing, compliance and payouts are already solved.
            Your only job is duplication — the part the mentorship covers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="glass group hover:border-primary/50 rounded-2xl p-6 transition-colors"
            >
              <s.icon className="text-primary size-6" />
              <div className="mt-5 text-3xl font-extrabold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm font-semibold">{s.label}</div>
              <p className="text-muted-foreground mt-3 text-xs leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
