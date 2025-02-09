import { z } from "zod";

export const prospectFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, {
      message: "Please enter your full name",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectType: z.string().min(1, {
    message: "Project type is required.",
  }),
  projectBrief: z
    .string()
    .min(10, {
      message: "Project brief must be at least 10 characters.",
    })
    .max(200, {
      message: "Project brief must not be longer than 200 characters.",
    }),
});
export const ctaFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, {
      message: "Please enter your full name",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectBrief: z
    .string()
    .min(10, {
      message: "Project brief must be at least 10 characters.",
    })
    .max(200, {
      message: "Project brief must not be longer than 200 characters.",
    }),
});

export const leadFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
