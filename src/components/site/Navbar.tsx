import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, CALL_TO_ACTION } from "./data";
import { cn } from "@/lib/utils";

export function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-[image:var(--gradient-cta)] text-primary-foreground">
            <Zap className="size-4.5" />
          </span>
          <span className="text-sm leading-tight font-extrabold tracking-[0.14em] uppercase">
            Atomy
            <br />
            <span className="text-primary">Global Engine</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/catalog"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Каталог
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Button variant="cta" className="hidden sm:inline-flex" onClick={onBook}>
            {CALL_TO_ACTION}
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="lg:hidden"
            aria-label="Открыть меню"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="glass animate-fade-in border-t px-5 pt-2 pb-6 lg:hidden">
          <ul className="grid gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground block rounded-lg px-3 py-2.5 text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/catalog"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground block rounded-lg px-3 py-2.5 text-sm font-medium"
              >
                Каталог
              </Link>
            </li>
          </ul>
          <Button
            variant="cta"
            className="mt-3 w-full"
            onClick={() => {
              setOpen(false);
              onBook();
            }}
          >
            {CALL_TO_ACTION}
          </Button>
        </div>
      )}
    </header>
  );
}
