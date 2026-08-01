import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email().min(1, { message: "email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required EX: Aa!12345678" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter (a-z)",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter (A-Z)",
    })
    .regex(/\d/, { message: "Password must contain at least one number (0-9)" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character (@$!%*?&)",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
});
