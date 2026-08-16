import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().trim().min(1, "Укажите имя").max(100),
  lastName: z.string().trim().min(1, "Укажите фамилию").max(100),
  country: z.string().trim().max(100).default(""),
  city: z.string().trim().max(100).default(""),
  phone: z.string().trim().min(5, "Укажите телефон").max(30),
  email: z.string().trim().email("Некорректный email").max(255).or(z.literal("")).default(""),
  day: z.string().trim().min(1).max(100),
  time: z.string().trim().min(1).max(20),
  goal: z.string().trim().max(600).default(""),
});

export type BookingInput = z.infer<typeof bookingSchema>;
