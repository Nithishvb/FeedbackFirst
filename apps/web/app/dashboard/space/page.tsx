"use client";

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import Spaces from "@/components/pages/Space";
import useFetch from "@/lib/hooks/useFetch";
import { SpaceCardsLoader } from "@/components/SkeletonLoader/SpaceCardsLoader";

const page = () => {
  const { push } = useRouter();
  const { data: spaces, loading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api`
  );

  const handleNavigate = () => {
    push(`/space`);
  };

  return (
    <div className="flex justify-start items-center">
      {loading ? (
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3].map((val, index: number) => (
            <SpaceCardsLoader key={index} />
          ))}
        </div>
      ) : spaces.length == 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-3">
            <span className="block text-gray-500">Hey, Luffy!</span>
            <span className="block">Create your first Space.</span>
          </h1>
          <p className="text-xl text-center">
            <span className="max-w-md">
              Craft Stunning Testimonials with Ease .
            </span>
          </p>
          <Button
            text="Create space"
            variant="danger"
            className="px-8 py-2 mt-8 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
            onClick={handleNavigate}
          />
        </div>
      ) : (
        <Spaces />
      )}
    </div>
  );
};

export default page;
