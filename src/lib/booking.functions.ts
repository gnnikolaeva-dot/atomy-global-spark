import { createServerFn } from "@tanstack/react-start";

import { bookingSchema } from "./booking-schema";

export const submitBooking = createServerFn({ method: "POST" })
  .validator((data: unknown) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    // The booking is successful only after Google Sheets confirms the row.
    const { appendBookingRow } = await import("./booking.server");
    await appendBookingRow(data);

    return { ok: true } as const;
  });
