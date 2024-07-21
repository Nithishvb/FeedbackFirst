import { DialogContent } from "@repo/ui";
import React from "react";

const FeedbackThankYouCard = () => {
  return (
    <DialogContent className="sm:max-w-md">
      <div className="flex justify-center items-center">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Thank You</h2>
          <p className="text-muted-foreground">
            We appreciate your support and are grateful for your business. Thank
            you for choosing our services.
            🙏
          </p>
        </div>
      </div>
    </DialogContent>
  );
};

export default FeedbackThankYouCard;
