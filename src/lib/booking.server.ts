import type { BookingInput } from "./booking-schema";
import { saveBooking as persistBooking } from "./booking-db.server";

export async function saveBooking(data: BookingInput, accessToken: string | null) {
  return persistBooking(data, accessToken);
}
