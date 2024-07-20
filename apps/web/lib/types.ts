export interface NewSpaceProps {
  spacename: string;
  spacetitle: string;
  spaceDescription: string;
  feedbackType: string;
  starRating: boolean;
  userlogo?: string;
}

export interface FeedbackTextProps {
  name: string;
  feedback: string;
  email: string;
  rating?: number | undefined;
  userlogo?: string;
  spaceId: string;
}
