import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

export const registerSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
  firstName: z.string().min(2, "Имя слишком короткое"),
  lastName: z.string().min(2, "Фамилия слишком короткая"),
  phone: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
