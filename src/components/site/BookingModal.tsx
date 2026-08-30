import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const YANDEX_FORM_URL =
  "https://forms.yandex.ru/cloud/6a93cb44493639a36caa60d9?iframe=1";

export function BookingModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass max-h-[92vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold">
            Запись на 30-минутный стратегический звонок
          </DialogTitle>
          <DialogDescription>
            Заполните форму — заявка будет отправлена в Яндекс.Формы.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 overflow-hidden rounded-xl border bg-background">
          <iframe
            src={YANDEX_FORM_URL}
            title="Форма записи на стратегический звонок"
            name="ya-form-6a93cb44493639a36caa60d9"
            className="h-[min(720px,70vh)] w-full min-w-0"
            frameBorder="0"
            loading="eager"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default BookingModal;
