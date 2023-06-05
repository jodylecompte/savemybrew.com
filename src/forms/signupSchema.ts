import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email().min(1).max(120),
  password: z.string().min(8).max(32),
  handle: z.string().min(3).max(128),
});

export type SignUpForm = z.infer<typeof signUpSchema>;
