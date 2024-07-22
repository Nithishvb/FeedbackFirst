import primsa from "../../prisma/index";

export async function fetchSpace() {
  const response = await primsa.space.findMany();
  return response;
}
