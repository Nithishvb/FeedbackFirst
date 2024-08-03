import React from "react";
import StarRating from "../starRating/StarRating";
import AddFavouriteBtn from "./AddFavouriteBtn";

interface DrawerFeedbackPropTypes {
  selectedFeedback: any;
  addToFavourites: () => void;
  removeFromFavorites: () => void;
}

const DrawerFeedbackContent = ({
  selectedFeedback, addToFavourites, removeFromFavorites
}: DrawerFeedbackPropTypes) => {

   console.log("selected items", selectedFeedback);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <StarRating readonly={true} ratingCount={selectedFeedback.rating} />
        <AddFavouriteBtn
          addToFavourites={selectedFeedback?.Favorites && selectedFeedback?.Favorites.length === 1 ? removeFromFavorites : addToFavourites}
          isFavourite={selectedFeedback?.Favorites && selectedFeedback?.Favorites.length === 1}
        />
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
