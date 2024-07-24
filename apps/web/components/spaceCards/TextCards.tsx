"use client";

import { FeedbackTextProps } from "@/lib/types";
import { Card, CardContent, CardDescription } from "@repo/ui";
import React from "react";
import StarRating from "@/components/starRating/StarRating";

export default function TextFeedbackCards({ ...props }: FeedbackTextProps) {
  return (
    <Card className="overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-xl transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 h-[271px] rounded-sm focus-visible:ring-primary w-[380px] text-left">
      <CardContent className="p-4">
        <div className="py-4">
          <StarRating readonly={true} ratingCount={props.rating} />
        </div>
        <CardDescription className="text-black line-clamp-2">
          {props.feedback}
        </CardDescription>
      </CardContent>
      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Name
            </div>
            <div>{props.name}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Email
            </div>
            <div>{props.email}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Created
            </div>
            <div>July 22, 2024</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
