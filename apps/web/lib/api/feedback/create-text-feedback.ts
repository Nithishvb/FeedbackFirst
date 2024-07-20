import { FeedbackTextProps } from "../../types";
import primsa from "../../prisma/index";

export async function createTextFeedback(space: FeedbackTextProps) {
  const response = await primsa.feedbacks.create({
    data: {
      ...space,
      image: "",
    },
  });
  return response;
}
