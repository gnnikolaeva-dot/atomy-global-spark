import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatRub } from "@/components/site/data";
import {
  CATALOG_GROUPS,
  CATALOG_PRODUCTS,
} from "@/components/site/catalog-data";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Каталог Атоми — товары для здоровья, красоты и дома";
const DESCRIPTION =
  "Полный каталог продукции Atomy: ХемоХим, витамины, уход за кожей, декоративная косметика, гигиена, продукты питания и товары для дома с ценами в рублях и PV.";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [group, setGroup] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(48);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG_PRODUCTS.filter((p) => {
      if (group !== "all" && p.group !== group) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
      );
    });
  }, [group, query]);

  const visible = filtered.slice(0, limit);

  return (
    <div className="grid-backdrop min-h-screen">
      <header className="glass sticky top-0 z-40 border-b">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4" />
            На главную
          </Link>
          <span className="text-sm leading-tight font-extrabold tracking-[0.14em] uppercase">
            Каталог <span className="text-primary">Атоми</span>
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pt-14 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="glass mb-5 gap-1.5">
            <Sparkles className="size-3.5 text-primary" />
            {CATALOG_PRODUCTS.length} позиций
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Каталог продукции <span className="text-gradient">Атоми</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            Абсолютное качество по абсолютной цене: товары для здоровья,
            красоты, гигиены, питания и дома. Указаны цена в рублях и объём PV,
            который формирует вашу структуру.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className="relative max-w-md">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(48);
              }}
              placeholder="Поиск по названию товара…"
              className="pl-9"
              aria-label="Поиск по каталогу"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATALOG_GROUPS.map((g) => {
              const count =
                g.slug === "all"
                  ? CATALOG_PRODUCTS.length
                  : CATALOG_PRODUCTS.filter((p) => p.group === g.slug).length;
              if (!count) return null;
              return (
                <button
                  key={g.slug}
                  type="button"
                  onClick={() => {
                    setGroup(g.slug);
                    setLimit(48);
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    group === g.slug
                      ? "border-primary/50 bg-primary/15 text-primary"
                      : "glass text-muted-foreground hover:text-foreground",
                  )}
                >
                  {g.label}
                  <span className="ml-1.5 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="text-muted-foreground mt-16 text-center text-sm">
            Ничего не найдено — попробуйте изменить запрос.
          </p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p) => (
              <li
                key={p.id}
                className="glass group flex flex-col overflow-hidden rounded-2xl border transition-all hover:border-primary/40"
              >
                <div className="bg-card/60 relative aspect-square overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  {p.koreaOrder ? (
                    <span className="glass absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-semibold">
                      Заказ из Кореи
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-primary/80 text-[11px] font-semibold tracking-wide uppercase">
                    {p.tag}
                  </p>
                  <h2 className="text-sm leading-snug font-semibold">
                    {p.name}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 text-xs leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                    <div>
                      <p className="text-lg font-extrabold">
                        {p.price ? `${formatRub(p.price)} ₽` : "По запросу"}
                      </p>
                      {p.pv ? (
                        <p className="text-muted-foreground text-[11px]">
                          {p.pv} PV
                        </p>
                      ) : null}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                    >
                      Подробнее
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {visible.length < filtered.length ? (
          <div className="mt-12 flex justify-center">
            <Button variant="glass" onClick={() => setLimit((v) => v + 48)}>
              Показать ещё ({filtered.length - visible.length})
            </Button>
          </div>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  );
}
