import { z } from "zod";

export const RegisterUserSchema = z
  .object({
    first_name: z
      .string({
        required_error: "first name is required",
      })
      .min(1, "first name is required")
      .max(50, "First name is too long"),
    last_name: z
      .string({
        required_error: "last name is required",
      })
      .min(1, "last name is required")
      .max(50, "Last name is too long"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, "Email is required")
      .email("Email is invalid"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    password_confirmation: z
      .string({
        required_error: "Confirm your password",
      })
      .min(1, "Confirm your password"),
})
.refine((data) => data.password === data.password_confirmation, {
  path: ["password_confirmation"],
  message: "Passwords don't match",
});


export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(3, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;