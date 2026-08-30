import { createServerFn } from "@tanstack/react-start";
import { bookingSchema } from "./booking-schema";
import { saveBooking } from "./booking.server";

export const submitBooking = createServerFn({ method: "POST" })
  .validator((input: unknown) => bookingSchema.parse(input))
  .handler(async ({ data }) => {
    return saveBooking(data, null);
  });
