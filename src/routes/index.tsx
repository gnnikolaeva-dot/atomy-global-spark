import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Mentor } from "@/components/site/Mentor";
import { DuplicationSystem } from "@/components/site/DuplicationSystem";
import { IncomeCalculator } from "@/components/site/IncomeCalculator";
import { Funnel } from "@/components/site/Funnel";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BookingModal } from "@/components/site/BookingModal";

const TITLE = "Atomy Global Engine — доход 91 000 ₽ в месяц";
const DESCRIPTION =
  "Глобальная система дупликации на экосистеме Atomy: 60 000 PV и 2 партнёра в месяц под наставничеством Галины Николаевой. Бесплатный 30-минутный стратегический звонок.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [booking, setBooking] = useState(false);
  const openBooking = () => setBooking(true);

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Ecosystem />
        <Mentor onBook={openBooking} />
        <DuplicationSystem onBook={openBooking} />
        <IncomeCalculator onBook={openBooking} />
        <Funnel onBook={openBooking} />
      </main>
      <SiteFooter onBook={openBooking} />
      <BookingModal open={booking} onOpenChange={setBooking} />
    </div>
  );
}
