"use client";

import React, { useState } from "react";
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

  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackTextProps>();
  const { data, loading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text`
  );

  return (
    <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {loading ? (
        [1,2,3].map((val:number, index: number) => <TextCardsLoader key={index} />)
      ) : (
        data?.map((val) => (
          <Drawer key={val.id} direction="right">
            <DrawerTrigger>
              <TextFeedbackCards {...val} setSelectedData={setSelectedFeedback} />
            </DrawerTrigger>
            <DrawerContent className="h-screen top-0 right-0 left-auto text-left mt-0 w-[500px] rounded-none">
              <DrawerHeader>
                <DrawerDescription>
                  <DrawerFeedbackContent selectedFeedback={selectedFeedback} />
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        ))
      )}
    </div>
  );
};

export default page;
