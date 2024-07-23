import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui";
import IconHeart from "../../../../packages/ui/src/icons/favorite-icon";

const AddFavouriteBtn = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
            <IconHeart className="text-2xl cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddFavouriteBtn;
