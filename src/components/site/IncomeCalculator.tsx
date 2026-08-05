import { useMemo, useState } from "react";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { formatRub } from "./data";

export function IncomeCalculator({ onBook }: { onBook: () => void }) {
  const [partners, setPartners] = useState(2);
  const [months, setMonths] = useState(6);
  const [pv, setPv] = useState(60000);

  const result = useMemo(() => {
    const growth = Math.max(partners, 1);
    const structure =
      growth === 1 ? months : Math.round((Math.pow(growth, months + 1) - 1) / (growth - 1)) - 1;
    const volume = structure * pv;
    const income = volume * 0.012 * (pv / 60000 > 1 ? 1.05 : 1);
    const steps = Math.max(1, Math.floor(Math.log2(structure + 2)));
    return { structure, volume, income, steps };
  }, [partners, months, pv]);

  return (
    <section id="calculator" className="relative py-22 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
          Математика, а не обещания
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold lg:text-4xl">
          Интерактивный калькулятор{" "}
          <span className="text-gradient">дохода и дупликации</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="glass rounded-3xl p-7 lg:col-span-3">
            <div className="grid gap-9">
              <Control
                label="Активных партнёров в месяц"
                value={`${partners}`}
                min={1}
                max={4}
                step={1}
                current={partners}
                onChange={setPartners}
              />
              <Control
                label="Горизонт планирования"
                value={`${months} мес.`}
                min={3}
                max={12}
                step={1}
                current={months}
                onChange={setMonths}
              />
              <Control
                label="Личный объём в месяц"
                value={`${formatRub(pv)} PV`}
                min={10000}
                max={120000}
                step={10000}
                current={pv}
                onChange={setPv}
              />
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl p-7 lg:col-span-2">
            <div className="from-primary/20 absolute -top-24 -right-16 size-64 rounded-full bg-gradient-to-br to-transparent blur-2xl" />
            <div className="relative">
              <div className="text-muted-foreground flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                <CalcIcon className="size-4" /> Прогноз
              </div>
              <div className="mt-6">
                <div className="text-muted-foreground text-xs">
                  Прогнозируемый доход в месяц
                </div>
                <div className="text-emerald mt-1 text-4xl font-extrabold tabular-nums">
                  {formatRub(result.income)} ₽
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  ≈ {formatRub(result.income * 12)} ₽ в год
                </div>
              </div>

              <dl className="mt-7 grid gap-3">
                <Row label="Размер структуры" value={`${formatRub(result.structure)} партнёров`} />
                <Row label="Групповой объём" value={`${formatRub(result.volume)} PV`} />
                <Row label="Достигнутая ступень" value={`Ступень ${result.steps}`} />
              </dl>

              <Button variant="cta" className="mt-7 w-full" onClick={onBook}>
                Проверить цифры с наставником <ArrowRight />
              </Button>
              <p className="text-muted-foreground mt-3 text-[11px] leading-relaxed">
                Расчёты носят иллюстративный характер и зависят от вашей регулярности.
                Это не гарантия дохода.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Control({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-primary text-sm font-bold tabular-nums">{value}</span>
      </div>
      <Slider
        className="mt-4"
        min={min}
        max={max}
        step={step}
        value={[current]}
        onValueChange={(v) => onChange(v[0] ?? current)}
        aria-label={label}
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b pb-2 last:border-0">
      <dt className="text-muted-foreground text-xs">{label}</dt>
      <dd className="text-sm font-semibold tabular-nums">{value}</dd>
    </div>
  );
}
