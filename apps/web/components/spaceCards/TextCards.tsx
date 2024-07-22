"use client";

import { Card, CardContent, CardDescription } from "@repo/ui";
import React from "react";
import { FeedbackTextProps } from "../../lib/types";
import StarRating from "../starRating/StarRating";

export default function TextFeedbackCards({ ...props }: FeedbackTextProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-[380px]">
      <CardContent className="p-4">
        <div className="py-4">
          <StarRating />
        </div>
        <CardDescription className="text-black line-clamp-2">
          {props.feedback} - Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nihil minus quas adipisci velit officiis. At ducimus recusandae
          officia dolore enim quia impedit tenetur placeat nulla! Natus vitae
          minus voluptates animi.
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

function CircleHelpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}
