import React, { useState } from "react";

interface StarRatingPropTypes extends React.HTMLAttributes<HTMLInputElement> {
  readonly: boolean;
  ratingCount?: number;
};

export default function StarRating({ readonly , ratingCount ,...props } : StarRatingPropTypes) {
  const [rating, setRating] = useState<number>(ratingCount ? ratingCount : 0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    props?.onChange(newRating);
  };
  
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`
            text-muted-foreground
            text-[#FFB621]
            cursor-pointer
            ${star <= rating ? "text-primary" : ""}
          `}
          onClick={() => readonly ? undefined : handleRatingChange(star)}
          onMouseEnter={() => readonly ? undefined : setHoveredRating(star)}
          onMouseLeave={() => readonly ? undefined : setHoveredRating(0)}
        >
          <StarIcon className="w-6 h-6" fill={star <= (rating || hoveredRating) ? "#FFB621" : "none"} />
        </span>
      ))}
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#FFB621]"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}