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
      .min(1, { message: "password is required" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message: "password must contain 1 special charachter at least",
        },
      ),
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
