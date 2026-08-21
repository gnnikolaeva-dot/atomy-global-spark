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
  "'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            For the code present, I get the error below.\n\nPlease think step-by-step in order to resolve it.\n```\nError: permission denied for function has_role\n\n{\n  \"timestamp\": 1787311701149,\n  \"error_type\": \"RUNTIME_ERROR\",\n  \"filename\": \"http://localhost:8080/_serverFn/eyJmaWxlIjoiL3NyYy9saWIvYm9va2luZ3MuZnVuY3Rpb25zLnRzP3Rzcy1zZXJ2ZXJmbi1zcGxpdCIsImV4cG9ydCI6Imxpc3RNeUJvb2tpbmdzX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIifQ\",\n  \"lineno\": 0,\n  \"colno\": 0,\n  \"stack\": \"Unavailable\",\n  \"has_blank_screen\": true\n}\n```";


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
