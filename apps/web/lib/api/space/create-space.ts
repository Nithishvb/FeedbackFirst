import { NewSpaceProps } from "../../types";
import primsa from "../../prisma/index";

export async function createSpace(space: NewSpaceProps) {
  let {
    spacename,
    spacetitle,
    spaceDescription,
    userlogo,
    starRating,
    feedbackType,
  } = space;

  const response = await primsa.space.create({
    data: {
      name: spacename,
      title: spacetitle,
      description: spaceDescription,
      isStarRating: starRating,
      type: feedbackType,
      image: userlogo ?? "",
    },
  });
  return response;
}
