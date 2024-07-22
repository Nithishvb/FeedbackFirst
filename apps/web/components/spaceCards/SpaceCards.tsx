import { Card, CardContent, CardTitle, CardDescription } from "@repo/ui";
import Image from "next/image";

interface SpaceCardsPropTypes {
  title: string;
  description: string;
  image?: string;
}

const SpaceCards = ({ title, description }: SpaceCardsPropTypes) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-[270px]">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEWNw_Bo9DvCUkojUY6S3zYdxapqCxmIJhg&s"
        alt="Project 1"
        width={600}
        height={200}
        className="object-cover w-full h-28 group-hover:scale-105 transition-transform"
      />
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold truncate">{title} </CardTitle>
        <CardDescription className="text-muted-foreground truncate">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SpaceCards;
