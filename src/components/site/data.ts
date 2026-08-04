export const NAV_LINKS = [
  { id: "system", label: "System" },
  { id: "global-scale", label: "Global Scale" },
  { id: "mentor", label: "Mentor" },
  { id: "calculator", label: "Math / Calculator" },
  { id: "strategy-call", label: "Strategy Call" },
];

export const CALL_TO_ACTION = "Book 30-Min Strategy Call";

export function formatRub(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    Math.round(value),
  );
}
