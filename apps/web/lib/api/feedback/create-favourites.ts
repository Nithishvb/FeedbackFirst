import primsa from "../../prisma/index";
import { fetchTextFeedback } from "./fetch-text-feedback";

export async function createfavouriteFeedback(feedbackId: string) {
  await primsa.favorites.create({
    data: {
      feedbackId: feedbackId,
      userId: 1,
    },
  });
  const response = await fetchTextFeedback();
  return response;
}

export async function removefavouriteFeedback(favoriteId: number) {
  await primsa.favorites.delete({
    where: {
      id: favoriteId
    }
  });
  const response = await fetchTextFeedback();
  return response;
}
