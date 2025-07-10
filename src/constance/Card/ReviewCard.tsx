import { cn } from "@/lib/utils";

const ReviewCard = ({title,description,}: {title: string;description: string;}) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          " bg-black hover:bg-black/90",)}>
  
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">{title}</figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-white">{description}</blockquote>
      </figure>
    )
  };
 export default ReviewCard;