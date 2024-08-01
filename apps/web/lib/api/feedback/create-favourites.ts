import primsa from "../../prisma/index";

export async function createfavouriteFeedback(feedbackId: string) {
  const response = await primsa.favorites.create({
    data: {
      feedbackId: feedbackId,
      userId: 1,
    },
  });
  return response;
}
