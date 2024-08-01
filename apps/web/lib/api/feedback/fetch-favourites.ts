import primsa from "../../prisma/index";

export async function fetchFavoriteFeedback() {
  const response = await primsa.feedbacks.findMany({});
  return response;
}


