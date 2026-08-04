import { ArrowRight, BadgeCheck, Crown, MessageSquareHeart, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import mentor from "@/assets/mentor-galina.jpg";

const FRAMEWORK = [
  {
    icon: Route,
    title: "Diagnose, then design",
    copy: "Your goal, hours available and network are mapped before any action plan.",
  },
  {
    icon: BadgeCheck,
    title: "Copy-paste execution",
    copy: "Scripts, product routines and follow-up templates that already convert.",
  },
  {
    icon: MessageSquareHeart,
    title: "Weekly accountability",
    copy: "Direct mentor access until your first two partners are self-sufficient.",
  },
];

export function Mentor({ onBook }: { onBook: () => void }) {
  return (
    <section id="mentor" className="relative py-22 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="from-primary/25 to-emerald/25 absolute -inset-4 rounded-[2rem] bg-gradient-to-br blur-2xl" />
          <img
            src={mentor}
            alt="Galina Nikolaeva, top mentor and network business leader"
            loading="lazy"
            width={912}
            height={1104}
            className="relative w-full rounded-3xl border object-cover"
          />
          <div className="glass animate-float absolute -bottom-6 -right-2 rounded-2xl p-4 lg:-right-8">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
              <Crown className="text-primary size-4" /> 30+ years
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Former Oriflame Gold Director
            </p>
          </div>
        </div>

        <div>
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            Mentor spotlight
          </p>
          <h2 className="mt-4 text-3xl font-extrabold lg:text-4xl">
            Galina Nikolaeva — <span className="text-gradient">the shortcut</span> is
            having someone who already did it
          </h2>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed lg:text-base">
            Three decades inside network business, a Gold Director track record at
            Oriflame, and hundreds of partners trained across multiple markets. Galina
            does not sell motivation — she installs a repeatable process, then holds
            you to it.
          </p>

          <div className="mt-8 grid gap-4">
            {FRAMEWORK.map((f) => (
              <div key={f.title} className="glass flex gap-4 rounded-2xl p-5">
                <span className="bg-secondary text-primary grid size-10 shrink-0 place-items-center rounded-xl">
                  <f.icon className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">{f.title}</div>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {f.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="cta" size="xl" className="mt-8" onClick={onBook}>
            Talk to Galina — 30 minutes <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
