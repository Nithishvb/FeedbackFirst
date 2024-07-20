import z from "../index";

export const feedbackTextSchema = z.object({
  feedback: z
    .string({
      required_error: "Feedback is required",
    })
    .min(1, "Feedback is required"),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required")
    .max(50),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("This is not a valid email.")
    .min(1, "Email is required"),
  rating: z.number().optional(),
  userlogo: z.any().optional(),
});
