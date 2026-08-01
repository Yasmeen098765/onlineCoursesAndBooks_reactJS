import z from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string().min(1, { message: "firstName is required" }),
    lastName: z.string().min(1, { message: "lastName is required" }),
    phone: z
      .string()
      .min(1, { message: "phone is required" })
      .regex(/^09[3-9]\d{7}$/, {
        message: "please enter a valid phoneNumber example : (0961234567)",
      }),
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
      .regex(/\d/, {
        message: "Password must contain at least one number (0-9)",
      })
      .regex(/[@$!%*?&]/, {
        message:
          "Password must contain at least one special character (@$!%*?&)",
      })
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .min(1, { message: "confirmPassword is required" }),
    image: z
      .any()
      .refine((file) => file && file.length > 0, {
        message: "please upload image",
      })
      .refine((files) => files[0]?.size <= 5 * 1024 * 1024, {
        message: "your image size must be less than 5MB ",
      }),
  })
  .refine((same) => same.password === same.confirmPassword, {
    message: "confirm password dosn't match your password",
    path: ["confirmPassword"],
  });
