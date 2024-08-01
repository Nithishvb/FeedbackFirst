import { fetchFavoriteFeedback } from "@/lib/api/feedback/fetch-favourites";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchFavoriteFeedback();
  return NextResponse.json({
    message: "Favourite Feedback fetched succesfully",
    data: data
  });
}