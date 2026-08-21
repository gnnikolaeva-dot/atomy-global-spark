import { createClient } from "@supabase/supabase-js";

import type { BookingInput } from "./booking-schema";
import type { Database } from "@/integrations/supabase/types";

/** Resolves the signed-in user id from a bearer token, if any. Never throws. */
async function resolveUserId(accessToken: string | null): Promise<string | null> {
  if (!accessToken) return null;
  try {
    const client = createClient<Database>(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"]!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );
    const { data, error } = await client.auth.getUser(accessToken);
    if (error) return null;
    return data.user?.id ?? null;
  } catch {
    return null;
  }
}

export async function saveBooking(
  data: BookingInput,
  accessToken: string | null,
): Promise<{ id: string; userId: string | null }> {
  const userId = await resolveUserId(accessToken);
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { data: row, error } = await supabaseAdmin
    .from("bookings")
    .insert({
      user_id: userId,
      first_name: data.firstName,
      last_name: data.lastName,
      country: data.country,
      city: data.city,
      phone: data.phone,
      email: data.email,
      preferred_day: data.day,
      preferred_time: data.time,
      goal: data.goal,
    })
    .select("id")
    .single();

  if (error) throw error;
  return { id: row.id, userId };
}
