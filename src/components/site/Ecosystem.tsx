import { Award, Building2, Globe2, ShieldCheck } from "lucide-react";

const STATS = [
  {
    icon: Building2,
    value: "2009",
    label: "Основана в Южной Корее",
    copy: "Собственное производство и рост без долгов с первого дня.",
  },
  {
    icon: Award,
    value: "Топ-10",
    label: "Мировых компаний прямых продаж",
    copy: "Один из крупнейших сетевых бизнесов в мире.",
  },
  {
    icon: Globe2,
    value: "170+",
    label: "Стран и территорий",
    copy: "Один глобальный ID — ваша структура пересекает границы вместе с вами.",
  },
  {
    icon: ShieldCheck,
    value: "A+A-",
    label: "Абсолютное качество, абсолютная цена",
    copy: "Философия, которая держит повторные заказы — и остаточный доход — стабильными.",
  },
];

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Ecosystem() {
  return (
    <section id="global-scale" className="relative border-y py-22 lg:py-28 border-white/10">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
          Глобальная экосистема компании
        </p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-3xl font-extrabold lg:text-4xl">
              Вы строите не на надежде. Вы строите на{" "}
              <span className="text-gradient">реальной инфраструктуре.</span>
            </h2>
            <Link to="/about/company">
              <Button variant="outline" className="mt-6 border-primary/20 hover:bg-primary/10">
                Подробнее о компании Atomy <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Логистика, производство, юридические вопросы и выплаты уже решены.
            Ваша задача — только дупликация, и именно её закрывает наставничество.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="glass group hover:border-primary/50 rounded-2xl p-6 transition-colors border-white/5 bg-[#161e2e]/50"
            >
              <s.icon className="text-primary size-6" />
              <div className="mt-5 text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-white/90">{s.label}</div>
              <p className="text-muted-foreground mt-3 text-xs leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
