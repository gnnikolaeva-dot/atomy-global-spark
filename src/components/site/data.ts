export const NAV_LINKS = [
  { id: "system", label: "Система" },
  { id: "global-scale", label: "Экосистема" },
  { id: "mentor", label: "Наставник" },
  { id: "calculator", label: "Калькулятор" },
  { id: "strategy-call", label: "Процесс" },
];

export const CALL_TO_ACTION = "Записаться на 30-мин. звонок";

export function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(
    Math.round(value),
  );
}
