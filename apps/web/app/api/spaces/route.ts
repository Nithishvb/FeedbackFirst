import { NextResponse } from "next/server";
import { parseRequestBody } from "../../../lib/api/utils";
import { newSpaceformSchema } from "../../../lib/zod/schemas/newSpaceSchema";
import { createSpace } from "../../../lib/api/space/create-space";
import { FeedbackFirstApiError } from "../../../lib/api/error";
import { fetchSpace } from "../../../lib/api/space/fetch-space";

export async function POST(req: Request) {
  const data = newSpaceformSchema.parse(await parseRequestBody(req));
  try {
    const response = await createSpace(data);
    return NextResponse.json(response);
  } catch (error) {
    throw new FeedbackFirstApiError({
      code: "unprocessable_entity",
      message: error?.message,
    });
  }
}

export async function GET(req: Request) {
  const data = await fetchSpace();
  return NextResponse.json({
    message: "Spaces fetched successfully",
    data,
  });
}
