import React from "react";
import StarRating from "../starRating/StarRating";
import AddFavouriteBtn from "./AddFavouriteBtn";

const DrawerFeedbackContent = () => {
  return (
    <div className="p-4">
        <div className="flex justify-between items-center">
            <StarRating readonly={true} ratingCount={3} />
            <AddFavouriteBtn />
        </div>
      <div className="my-5">
        <h5 className="text-black leading-relaxed text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsa
          vitae, repellendus vel soluta odit architecto error neque fugit esse
          exercitationem mollitia quos dignissimos placeat atque officia
          corporis magnam voluptate.
        </h5>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Name
            </div>
            <div className="text-black font-semibold">{"john"}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Email
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
