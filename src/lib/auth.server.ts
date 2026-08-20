import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { RegisterInput } from "./auth-schema";

export async function registerUser(input: RegisterInput) {
  const { email, password, firstName, lastName, phone, city, country } = input;

  const { data, error } = await supabaseAdmin.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        phone,
        city,
        country,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true, user: data.user };
}
