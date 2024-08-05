"use client";

import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@repo/ui";
import useFetch from "@/lib/hooks/useFetch";
import TextFeedbackCards from "@/components/spaceCards/TextCards";
import DrawerFeedbackContent from "@/components/spaceCards/DrawerContent";
import TextCardsLoader from "@/components/SkeletonLoader/TextCardsLoader";
import { FeedbackTextProps } from "@/lib/types";

const page = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<
    FeedbackTextProps & { id: string }
  >();
  const { data, loading, refetch } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text`
  );
  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    if (data) {
      setFeedbacks(data);
    }
  }, [data]);

  const addToFavourites = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedbackId: selectedFeedback?.id,
      }),
      redirect: "follow",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/favourite/create`,
      requestOptions
    );
    const res = await response.json();
    setFeedbacks(res.data);
    const feedBack = res.data.filter((e: any) => e.id === selectedFeedback?.id);
    setSelectedFeedback(feedBack[0]);
  };

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
    setFeedbacks(res.data);
    const feedBack = res.data.filter((e: any) => e.id === selectedFeedback?.id);
    setSelectedFeedback(feedBack[0]);
  };

  return (
    <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {loading
        ? [1, 2, 3].map((val: number, index: number) => (
            <TextCardsLoader key={index} />
          ))
        : feedbacks?.map((val) => (
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
                      addToFavourites={addToFavourites}
                      removeFromFavorites={removeFromFavorites}
                    />
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          ))}
    </div>
  );
};

export default page;
