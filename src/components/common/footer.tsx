import { Separator } from "../ui/separator"
import Link
  from "next/link"

export default function Footer() {
  return (
    <div className="container flex flex-1 flex-col gap-10 w-full">
      <Separator />
      <div className="flex flex-wrap gap-x-20 gap-y-2 md:justify-around">
        <div className="text-start text-2xl font-semibold md:text-3xl">
          <h2 className="text-xl text-muted-foreground md:text-2xl">
            X/TWITTER
          </h2>
          <Link
            href="https://x.com/Acrepedia"
            className="underline transition-colors hover:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Acrepedia
          </Link>
        </div>

        <div className="text-start text-2xl font-semibold md:text-3xl">
          <h2 className="text-xl text-muted-foreground md:text-2xl">
            GITHUB
          </h2>
          <Link
            href="https://github.com/GeneralAcre"
            className="underline transition-colors hover:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GeneralAcre
          </Link>
        </div>

        <div className="text-start text-2xl font-semibold md:text-3xl">
          <h2 className="text-xl text-muted-foreground md:text-2xl">
            EMAIL
          </h2>
          <Link
            href="mailto:acreforcoding@gmail.com"
            className="underline transition-colors hover:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            acreforcoding@gmail.com
          </Link>
        </div>
      </div>
      <Separator />
      <div className="hidden flex-1 md:flex" />
      <p className="flex flex-col items-center justify-center overflow-x-hidden overscroll-none scroll-smooth md:text-center mb-[20px]">
        © {new Date().getFullYear()} {"Acre"}. All rights
        reserved.
  
      </p>
    </div>

  )
}

