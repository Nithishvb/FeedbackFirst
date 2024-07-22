import { NextResponse } from "next/server";
import { fetchTextFeedback } from "../../../../lib/api/feedback/fetch-text-feedback";

export async function GET() {
  const data = await fetchTextFeedback();
  return NextResponse.json({
    message: "Feedback fetched succesfully",
    data: data
  });
}