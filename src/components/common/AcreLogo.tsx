import { cn } from "@/lib/utils"

interface AcreLogoProps {
  className?: string
}

export default function AcreLogo({ className }: AcreLogoProps) {
  return (
    <span
      aria-label="Acre"
      className={cn(
        "acre-logo inline-flex items-center font-kdam text-[1.375rem] font-extrabold leading-none text-primary tracking-normal sm:text-[1.5rem] md:text-[1.625rem]",
        className
      )}
    >
      Acre
    </span>
  )
}
