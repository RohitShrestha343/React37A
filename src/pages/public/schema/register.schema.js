import z from "zod";

export const RegisterSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z.string().nonempty({ message: "Password is required" }),
});
