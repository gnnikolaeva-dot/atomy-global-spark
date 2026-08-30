import { neonDb, bookings } from "./neon-db.server";
import type { BookingInput } from "./booking-schema";

export async function saveBooking(
  data: BookingInput,
  _accessToken: string | null,
): Promise<{ id: string; userId: string | null }> {
  const [row] = await neonDb
    .insert(bookings)
    .values({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email || null,
      preferredDay: data.day,
      preferredTime: data.time,
      goal: data.goal || null,
    })
    .returning({ id: bookings.id });

  if (!row) throw new Error("Не удалось сохранить заявку");
  return { id: row.id, userId: null };
}
