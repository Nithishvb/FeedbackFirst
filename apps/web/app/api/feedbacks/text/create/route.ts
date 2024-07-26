import { NextRequest, NextResponse } from "next/server";
import { feedbackTextSchema } from "@/lib/zod/schemas/feedbackTextSchems";
import { parseRequestBody } from "@/lib/api/utils";
import { createTextFeedback } from "@/lib/api/feedback/create-text-feedback";
import { FeedbackFirstApiError } from "@/lib/api/error";

export async function POST(req: NextRequest) {
  const parseBody = await parseRequestBody(req)
  const data = feedbackTextSchema.parse(parseBody.data);
  try {
    const response = await createTextFeedback({ ...data, spaceId: parseBody.spaceId });
    return NextResponse.json(response);
  } catch (error: any) {
    throw new FeedbackFirstApiError({
      code: "unprocessable_entity",
      message: error.message,
    });
  }
}
