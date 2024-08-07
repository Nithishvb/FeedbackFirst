import primsa from "../../prisma/index";

export async function fetchTextFeedback() {
  const response = await primsa.feedbacks.findMany({
    include: {
      Favorites: true
    }
  });
  return response;
}

export async function fetchTextFeedbackById(spaceId: string) {
  const response = await primsa.feedbacks.findMany({
    where: {
      spaceId: spaceId,
    }
  });
  return response;
}

