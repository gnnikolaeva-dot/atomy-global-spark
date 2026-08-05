import { ArrowRight, Map, Rocket, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    icon: Video,
    step: "Шаг 1",
    title: "30-минутный видеозвонок",
    copy: "Предметный разговор с Галиной: ваши цели, ваше время, ваш рынок. Без давления и без общих вебинаров.",
  },
  {
    icon: Map,
    step: "Шаг 2",
    title: "Персональная дорожная карта",
    copy: "Вы уходите с письменным планом: ваш объём PV, список первых партнёров и недельный ритм.",
  },
  {
    icon: Rocket,
    step: "Шаг 3",
    title: "Активация системы · старт с 10К PV",
    copy: "Бесплатная регистрация, стартовый заказ на 10 000 PV — и вы внутри системы дупликации.",
  },
];

export function Funnel({ onBook }: { onBook: () => void }) {
  return (
    <section id="strategy-call" className="relative border-y py-22 lg:py-28">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-emerald text-xs font-bold tracking-[0.2em] uppercase">
          Воронка консультации
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold lg:text-4xl">
          От интереса до <span className="text-gradient">активации</span> в три шага
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
            Ваши следующие 6 месяцев начинаются с одного 30-минутного звонка
          </h3>
          <p className="text-muted-foreground max-w-lg text-sm">
            Мест в неделю ограниченно — Галина проводит каждый стратегический звонок лично.
          </p>
          <Button variant="cta" size="xl" onClick={onBook}>
            Записаться на 30-мин. звонок <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
