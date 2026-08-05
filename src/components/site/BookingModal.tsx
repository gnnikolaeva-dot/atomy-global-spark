import { useState } from "react";
import { CalendarCheck, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const SLOTS = ["09:00", "11:30", "14:00", "16:30", "19:00", "20:30"];

export function BookingModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slot, setSlot] = useState<string>(SLOTS[1]!);
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email || !date) {
      toast.error("Укажите имя, email и удобную дату.");
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      onOpenChange(false);
      toast.success(
        `Заявка отправлена — ${format(date, "EEE, d MMM", { locale: ru })}, ${slot}. Команда Галины подтвердит время по email.`,
      );
    }, 900);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass max-h-[92vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold">
            Запись на 30-минутный стратегический звонок
          </DialogTitle>
          <DialogDescription>
            Личный видеозвонок с Галиной Николаевой. Выберите удобные дату и время.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="mt-2 grid gap-6 md:grid-cols-2">
          <div>
            <Label className="text-xs font-bold tracking-wider uppercase">
              Выберите дату
            </Label>
            <div className="bg-surface/70 mt-3 rounded-2xl border p-1">
              <Calendar
                mode="single"
                locale={ru}
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
                className={cn("pointer-events-auto p-3")}
              />
            </div>
            <div className="mt-4">
              <Label className="text-xs font-bold tracking-wider uppercase">
                Свободное время
              </Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {SLOTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSlot(s)}
                    className={cn(
                      "flex items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-semibold transition-colors",
                      slot === s
                        ? "border-primary text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Clock className="size-3" /> {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Имя и фамилия</Label>
              <Input id="name" name="name" maxLength={100} placeholder="Анна Смирнова" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                maxLength={255}
                placeholder="anna@company.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Страна / город</Label>
              <Input id="country" name="country" maxLength={100} placeholder="Москва, Россия" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="goal">Ваша цель по доходу</Label>
              <Textarea
                id="goal"
                name="goal"
                maxLength={600}
                rows={4}
                placeholder="Хочу 90 000 ₽ остаточного дохода за 6 месяцев, не оставляя работу."
              />
            </div>

            <div className="bg-surface-2/60 flex items-center gap-3 rounded-xl border p-3">
              <CalendarCheck className="text-emerald size-5 shrink-0" />
              <p className="text-muted-foreground text-xs">
                {date ? format(date, "EEEE, d MMMM yyyy", { locale: ru }) : "Дата не выбрана"} ·{" "}
                {slot} · видеозвонок 30 минут
              </p>
            </div>

            <Button type="submit" variant="cta" size="xl" disabled={sending}>
              {sending ? <Loader2 className="animate-spin" /> : null}
              Подтвердить запись
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
