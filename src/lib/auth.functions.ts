import { createServerFn } from "@tanstack/react-start";
import { registerSchema } from "./auth-schema";
import { registerUser } from "./auth.server";

export const signUp = createServerFn({ method: "POST" })
  .validator((data: unknown) => registerSchema.parse(data))
  .handler(async ({ data }) => {
    return await registerUser(data);
  });
