"use client";

import { Card, CardContent, CardTitle } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {

  const params = useParams<{ spaceId: string }>();
  const searchParams = useSearchParams();

  return (
    <div className="m-6">
      <Link href={`/dashboard/space/${params.spaceId}/react/embedding?code=${searchParams.get("code")}`}>
        <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-[293px] h-[220px] cursor-pointer">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEWNw_Bo9DvCUkojUY6S3zYdxapqCxmIJhg&s"
            alt="Project 1"
            width={600}
            height={400}
            className="object-cover w-full h-36 group-hover:scale-105 transition-transform"
          />
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold truncate">
              {"Wall Layout"}{" "}
            </CardTitle>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default page;
