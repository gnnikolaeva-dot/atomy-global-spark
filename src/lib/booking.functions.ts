import { createServerFn } from "@tanstack/react-start";

import { bookingSchema } from "./booking-schema";

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    const { appendBookingRow } = await import("./booking.server");
    await appendBookingRow(data);
    return { ok: true } as const;
  });
