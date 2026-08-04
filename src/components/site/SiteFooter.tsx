import { Mail, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./data";

export function SiteFooter({ onBook }: { onBook: () => void }) {
  return (
    <footer className="relative py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass grid gap-10 rounded-3xl p-8 lg:grid-cols-3 lg:p-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="bg-[image:var(--gradient-cta)] text-primary-foreground grid size-9 place-items-center rounded-lg">
                <Zap className="size-4.5" />
              </span>
              <span className="text-sm font-extrabold tracking-[0.14em] uppercase">
                Atomy Global Engine
              </span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-xs text-xs leading-relaxed">
              An independent partner platform built on the Atomy ecosystem. Mentorship
              and duplication framework by Galina Nikolaeva.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wider uppercase">Sections</div>
            <ul className="mt-4 grid gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wider uppercase">Get in touch</div>
            <div className="text-muted-foreground mt-4 grid gap-3 text-sm">
              <span className="flex items-center gap-2">
                <Mail className="size-4" /> mentor@atomyglobalengine.com
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="size-4" /> Direct messenger after booking
              </span>
            </div>
            <Button variant="cta" className="mt-5 w-full" onClick={onBook}>
              Book 30-Min Strategy Call
            </Button>
          </div>
        </div>

        <p className="text-muted-foreground mt-8 text-center text-xs">
          © {new Date().getFullYear()} Atomy Global Engine. Income examples are
          illustrative and not a guarantee of earnings.
        </p>
      </div>
    </footer>
  );
}
