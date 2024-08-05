"use client";

import TextCardsLoader from "@/components/SkeletonLoader/TextCardsLoader";
import DrawerFeedbackContent from "@/components/spaceCards/DrawerContent";
import TextFeedbackCards from "@/components/spaceCards/TextCards";
import useFetch from "@/lib/hooks/useFetch";
import { FeedbackTextProps } from "@/lib/types";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@repo/ui";
import { useState } from "react";

const page = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackTextProps>();
  const { data, loading, refetch } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text`
  );

  const removeFromFavorites = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favoriteId: selectedFeedback?.Favorites[0].id,
      }),
      redirect: "follow",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/favourite/remove`,
      requestOptions
    );
    const res = await response.json();
    const feedBack = res.data.filter((e: any) => e.id === selectedFeedback?.id);
    setSelectedFeedback(feedBack[0]);
    refetch();
  };

  return (
    <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {loading
        ? [1, 2, 3].map((val: number, index: number) => (
            <TextCardsLoader key={index} />
          ))
        : data?.map(
            (val) =>
              val.Favorites?.length > 0 && (
                <Drawer key={val.id} direction="right">
                  <DrawerTrigger>
                    <TextFeedbackCards
                      {...val}
                      setSelectedData={setSelectedFeedback}
                    />
                  </DrawerTrigger>
                  <DrawerContent className="h-screen top-0 right-0 left-auto text-left mt-0 w-[500px] rounded-none">
                    <DrawerHeader>
                      <DrawerDescription>
                        <DrawerFeedbackContent
                          selectedFeedback={selectedFeedback}
                          removeFromFavorites={removeFromFavorites}
                        />
                      </DrawerDescription>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>
              )
          )}
    </div>
  );
};

export default page;
