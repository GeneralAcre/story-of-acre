import { Separator } from "@/components/ui/separator"

interface HeaderDefault{
    title: string;
    subtitle: string;
}

export function Header({
  title,
  subtitle,
}: 
    HeaderDefault
) {
  return (
    <div className="space-y-2"> {/* Added text-center here */}
      <div className="flex items-center gap-4"> {/* Added justify-center here */}
        <Separator orientation="horizontal" className="flex-1" />
        <h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2>
        <Separator orientation="horizontal" className="flex-1 " />
      </div>
      <p className="text-sm text-muted-foreground md:text-base">{subtitle}</p>
    </div>
  )
}