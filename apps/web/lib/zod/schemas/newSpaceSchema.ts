import z from "../index";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const newSpaceformSchema = z.object({
  spacename: z
    .string({
      required_error: "Space Name is required",
    })
    .min(1, "Space Name is required")
    .max(50),
  spacetitle: z
    .string({
      required_error: "Space Title is required",
    })
    .min(1, "Space Title is required")
    .max(50),
  spaceDescription: z
    .string({
      required_error: "Space Description is required",
    })
    .min(1, "Space Description is required")
    .max(50),
  feedbackType: z
    .string({
      required_error: "Feedback type is required",
    })
    .refine((value) => ["Text", "Video", "TextVideo"].includes(value), {
      message: "Feedback type must be 'Text', 'Video', or 'Text and video'",
    }),
  starRating: z.boolean().optional().default(false),
  userlogo: z
    .any()
    .optional()
});
