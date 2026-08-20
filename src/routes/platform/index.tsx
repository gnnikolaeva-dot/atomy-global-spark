import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/platform/')({
  component: PlatformDashboard,
});

function PlatformDashboard() {
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
    </div>
  );
}
