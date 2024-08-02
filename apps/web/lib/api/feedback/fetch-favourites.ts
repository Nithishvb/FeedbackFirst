import primsa from "../../prisma/index";

export async function fetchFavoriteFeedback() {
  const response = await primsa.favorites.findMany({
    include: {
      feedback: true
    }
  });
  return response;
}


