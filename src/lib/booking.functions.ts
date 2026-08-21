import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { bookingSchema } from "./booking-schema";

export const submitBooking = createServerFn({ method: "POST" })
  .validator((data: unknown) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    const authHeader = getRequest().headers.get("authorization");
    const accessToken = authHeader?.toLowerCase().startsWith("bearer ")
      ? authHeader.slice(7).trim()
      : null;

    const { saveBooking } = await import("./booking-db.server");
    await saveBooking(data, accessToken);

    // Google Sheets mirror must never block the booking itself.
    try {
      const { appendBookingRow } = await import("./booking.server");
      await appendBookingRow(data);
    } catch (error) {
      console.error("Sheets mirror failed", error);
    }

    return { ok: true } as const;
  });
