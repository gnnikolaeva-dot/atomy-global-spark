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

    // The booking is successful only after Supabase confirms the row.
    const { saveBooking } = await import("./booking-db.server");
    const result = await saveBooking(data, accessToken);

    return { ok: true, id: result.id } as const;
  });
