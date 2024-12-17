import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export type SignIn = z.infer<typeof signInSchema>;
