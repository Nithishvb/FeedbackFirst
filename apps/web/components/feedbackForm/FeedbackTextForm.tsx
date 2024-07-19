import { DialogContent, DialogHeader, DialogTitle, Textarea } from "@repo/ui";
import Image from "next/image";
import StarRating from "../starRating/StarRating";

const FeedbackTextForm = () => {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Write your feedback</DialogTitle>
      </DialogHeader>
      <div>
        <div className="w-16 h-16 my-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold">
          <Image
            src={
              ""
            }
            alt="User Avatar"
            width={128}
            height={128}
            className="rounded-full object-cover w-[100%] h-[100%]"
          />
        </div>
        <div className="my-7">
          <StarRating />
        </div>
        <div className="my-7">
          <Textarea placeholder="Type your feedback here." />
        </div>
      </div>
    </DialogContent>
  );
};

export default FeedbackTextForm;
