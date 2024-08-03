import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui";
import IconHeart from "../../../../packages/ui/src/icons/favorite-icon";
import IconHeartFilled from "../../../../packages/ui/src/icons/favorite-filled-icon";

const AddFavouriteBtn = ({
  addToFavourites,
  isFavourite,
}: {
  addToFavourites: () => void;
  isFavourite: boolean;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {!isFavourite ? (
            <IconHeart
              className="text-2xl cursor-pointer"
              onClick={addToFavourites}
            />
          ) : (
            <IconHeartFilled
              className="text-2xl cursor-pointer text-red-400"
              onClick={addToFavourites}
            />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddFavouriteBtn;
