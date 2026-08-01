import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email().min(1, { message: "email is required" }),
  password: z
    .string()
    .min(1, { message: "password is required" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message: "password must contain 1 special charachter at least",
      },
    ),
});
