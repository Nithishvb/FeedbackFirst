import React from "react";
import StarRating from "../starRating/StarRating";
import AddFavouriteBtn from "./AddFavouriteBtn";
import { FeedbackTextProps } from "@/lib/types";

const DrawerFeedbackContent = ({ selectedFeedback } : { selectedFeedback: FeedbackTextProps & { id: string } }) => {

  const addToFavourites = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          "feedbackId": selectedFeedback.id
        }
      ),
      redirect: "follow"
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/feedbacks/favourite/create`, requestOptions);
    const res = await response.json();
    console.log(res);
  }

  return (
    <div className="p-4">
        <div className="flex justify-between items-center">
            <StarRating readonly={true} ratingCount={selectedFeedback.rating} />
            <AddFavouriteBtn addToFavourites={addToFavourites} />
        </div>
      <div className="my-5">
        <h5 className="text-black leading-relaxed text-lg">
          {selectedFeedback.feedback}
        </h5>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              {selectedFeedback.name}
            </div>
            <div className="text-black font-semibold">{"john"}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
            {selectedFeedback.email}
            </div>
            <div className="text-black font-semibold">{"john@gmail.com"}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Created
            </div>
            <div className="text-black font-semibold">July 22, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerFeedbackContent;
