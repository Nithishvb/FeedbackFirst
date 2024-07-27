import { fetchTextFeedbackById } from "@/lib/api/feedback/fetch-text-feedback";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { spaceid: string } }
) {
  const response = await fetchTextFeedbackById(params.spaceid);

  return NextResponse.json({
    message: "Feedback fetched succesfully",
    data: response,
  });
}
