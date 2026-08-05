import { ArrowRight, ShoppingBag, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIMELINE = [
  { month: "1 месяц", team: "Вы + 2", income: "~7 000 ₽" },
  { month: "2 месяц", team: "6 активных", income: "~15 000 ₽" },
  { month: "3 месяц", team: "14 активных", income: "~28 000 ₽" },
  { month: "4 месяц", team: "30 активных", income: "~46 000 ₽" },
  { month: "5 месяц", team: "62 активных", income: "~68 000 ₽" },
  { month: "6 месяц", team: "126 активных", income: "91 000 ₽" },
];

export function DuplicationSystem({ onBook }: { onBook: () => void }) {
  return (
    <section id="system" className="relative border-y py-22 lg:py-28">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-emerald text-xs font-bold tracking-[0.2em] uppercase">
          Система дупликации
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold lg:text-4xl">
          Модель 60К PV: <span className="text-gradient">два действия в месяц</span>,
          которые повторяет каждый ваш партнёр
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="glass rounded-3xl p-7">
            <span className="bg-primary/15 text-primary grid size-11 place-items-center rounded-xl">
              <ShoppingBag className="size-5" />
            </span>
            <div className="text-muted-foreground mt-5 text-xs font-bold tracking-wider uppercase">
              KPI 01
            </div>
            <h3 className="mt-1 text-xl font-bold">60 000 PV личного объёма</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Замените то, что уже покупаете — уход, дом, здоровье — на свой магазин.
              Без лишнего бюджета, без склада и без обязательных продаж.
            </p>
          </div>
          <div className="glass rounded-3xl p-7">
            <span className="bg-emerald/15 text-emerald grid size-11 place-items-center rounded-xl">
              <UserPlus className="size-5" />
            </span>
            <div className="text-muted-foreground mt-5 text-xs font-bold tracking-wider uppercase">
              KPI 02
            </div>
            <h3 className="mt-1 text-xl font-bold">2 активных партнёра</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Левая ветка, правая ветка. Каждый партнёр повторяет те же два шага — это
              и есть бинарная дупликация, которая превращает линейные усилия в
              растущую структуру.
            </p>
          </div>
        </div>

        <div className="glass mt-6 rounded-3xl p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-lg font-bold">Кривая дупликации за 6 месяцев</h3>
            <p className="text-muted-foreground text-xs">
              Пример расчёта при стабильном темпе 2 партнёра в месяц
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
              Получить личный план на 6 месяцев <ArrowRight />
            </Button>
            <p className="text-muted-foreground text-xs">
              ≈ 91 000 ₽ остаточного дохода в месяц к шестому месяцу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
