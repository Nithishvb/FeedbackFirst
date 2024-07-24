import { Skeleton } from "@repo/ui";

const TextCardsLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-[380px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default TextCardsLoader