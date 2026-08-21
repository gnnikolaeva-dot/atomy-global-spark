import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';

import { listMyBookings } from '@/lib/bookings.functions';

export const Route = createFileRoute('/_authenticated/platform')({
  component: PlatformDashboard,
});

function PlatformDashboard() {
  const fetchBookings = useServerFn(listMyBookings);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-bookings'],
    queryFn: () => fetchBookings(),
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Добро пожаловать в Atomy Global Engine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl border border-primary/20">
          <h2 className="text-xl font-semibold mb-2">Обучение</h2>
          <p className="text-muted-foreground mb-4">Начните свой путь с наших обучающих модулей.</p>
          <button className="text-primary hover:underline">Перейти к урокам &rarr;</button>
        </div>
        <div className="glass p-6 rounded-xl border border-primary/20">
          <h2 className="text-xl font-semibold mb-2">Статистика</h2>
          <p className="text-muted-foreground mb-4">Отслеживайте рост вашей структуры в реальном времени.</p>
          <button className="text-primary hover:underline">Посмотреть отчеты &rarr;</button>
        </div>
        <div className="glass p-6 rounded-xl border border-primary/20">
          <h2 className="text-xl font-semibold mb-2">Объявления</h2>
          <p className="text-muted-foreground mb-4">Будьте в курсе последних новостей платформы.</p>
          <button className="text-primary hover:underline">Читать всё &rarr;</button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Мои заявки на звонок</h2>
        <div className="glass rounded-xl border border-primary/20 overflow-hidden">
          {isLoading ? (
            <p className="p-6 text-muted-foreground">Загружаем заявки…</p>
          ) : isError ? (
            <p className="p-6 text-muted-foreground">Не удалось загрузить заявки. Попробуйте позже.</p>
          ) : !data || data.length === 0 ? (
            <p className="p-6 text-muted-foreground">Заявок пока нет.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground border-b border-border/60">
                <tr>
                  <th className="p-4 font-medium">Партнёр</th>
                  <th className="p-4 font-medium">Локация</th>
                  <th className="p-4 font-medium">День</th>
                  <th className="p-4 font-medium">Время</th>
                  <th className="p-4 font-medium">Статус</th>
                </tr>
              </thead>
              <tbody>
                {data.map((b) => (
                  <tr key={b.id} className="border-b border-border/40 last:border-0">
                    <td className="p-4">{b.first_name} {b.last_name}</td>
                    <td className="p-4 text-muted-foreground">{[b.city, b.country].filter(Boolean).join(', ') || '—'}</td>
                    <td className="p-4">{b.preferred_day}</td>
                    <td className="p-4">{b.preferred_time}</td>
                    <td className="p-4 text-primary">{b.status === 'new' ? 'Новая' : b.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
}
