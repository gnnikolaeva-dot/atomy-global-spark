export const NAV_LINKS = [
  { id: "system", label: "Система" },
  { id: "global-scale", label: "Мировой масштаб" },
  { id: "mentor", label: "Наставник" },
  { id: "calculator", label: "Расчёт / Калькулятор" },
  { id: "strategy-call", label: "Стратегический звонок" },
];

export const CALL_TO_ACTION = "Записаться на 30-мин. звонок";

export function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(
    Math.round(value),
  );
}
