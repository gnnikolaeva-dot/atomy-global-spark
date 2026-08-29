import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

export function LegalPage({
  title,
  effectiveDate = "[указать дату вступления в силу]",
  children,
}: {
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground lg:px-8 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" /> На главную
        </Link>
        <div className="mt-12 flex items-start gap-4">
          <span className="bg-primary/10 text-primary grid size-12 shrink-0 place-items-center rounded-xl">
            <FileText className="size-5" />
          </span>
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Правовая информация
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-balance lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-4 text-sm">Дата публикации: {effectiveDate}</p>
          </div>
        </div>
        <div className="prose prose-invert mt-12 max-w-none text-sm leading-7 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
        <div className="border-border bg-muted/30 text-muted-foreground mt-12 rounded-2xl border p-5 text-xs leading-6">
          Внимание: этот текст является шаблоном. Перед публикацией заполните поля в квадратных
          скобках и проверьте документ с юристом с учётом применимого законодательства и фактических
          процессов обработки данных.
        </div>
      </article>
    </main>
  );
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return <strong className="text-foreground">{children}</strong>;
}

export function LegalSections({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
