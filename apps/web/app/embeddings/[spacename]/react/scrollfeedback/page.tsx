"use client";

import useFetch from "@/lib/hooks/useFetch";
import { InfiniteMovingCards } from "@repo/ui";
import { useParams } from "next/navigation";
import LoadingDots from "../../../../../../../packages/ui/src/icons/loading-dots";

export default function page() {
  const params = useParams<{ spacename: string }>();
  const { data, loading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text/${params.spacename}`
  );

  return (
    <div className="bg-slate-900 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingDots />
        </div>
      ) : (
        <div className="mx-8 md:mx-10 lg:mx-20 xl:mx-auto py-20">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                What people are saying.
              </h1>
              <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                Here's what others have to say about us.
              </p>
            </div>
          </div>

          <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={data} direction="right" speed="normal" />
          </div>
        </div>
      )}
    </div>
  );
}
