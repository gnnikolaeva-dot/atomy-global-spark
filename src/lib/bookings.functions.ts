import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const listMyBookings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("bookings")
      .select("id, first_name, last_name, city, country, preferred_day, preferred_time, status, created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw error;
    return data;
  });
