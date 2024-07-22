import primsa from "../../prisma/index";

export async function fetchTextFeedback() {
  const response = await primsa.feedbacks.findMany();
  return response;
}
