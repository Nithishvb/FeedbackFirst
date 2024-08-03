import { NextRequest, NextResponse } from "next/server";
import { parseRequestBody } from "@/lib/api/utils";
import { FeedbackFirstApiError } from "@/lib/api/error";
import { removefavouriteFeedback } from "@/lib/api/feedback/create-favourites";

export async function POST(req: NextRequest) {
  const parseBody = await parseRequestBody(req);
  console.log(parseBody);
  try {
    const response = await removefavouriteFeedback(parseBody.favoriteId);
    return NextResponse.json({
        message: "Favourite added successfully",
        data: response
    });
  } catch (error: any) {
    throw new FeedbackFirstApiError({
      code: "unprocessable_entity",
      message: error.message,
    });
  }
}
