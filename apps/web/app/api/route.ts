import { NextResponse } from "next/server";
import prisma from "../../lib/prisma/index";

export async function GET() {
  const data = await prisma.space.findMany();
  return NextResponse.json({
    message: "Data fetched succesfully",
    data: JSON.stringify(data)
  });
}