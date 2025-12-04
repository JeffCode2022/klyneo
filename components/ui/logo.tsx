import { cn } from "../../lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon"
}

export function Logo({ className, size = "md", variant = "full" }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }

  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(sizes[size], className)}>
        <path d="M16 2L2 8L16 14L30 8L16 2Z" fill="currentColor" className="text-gold" />
        <path d="M16 18L2 12V24L16 30L30 24V12L16 18Z" fill="currentColor" className="text-gold opacity-80" />
      </svg>

      {variant === "full" && (
        <span className="font-montserrat text-xl md:text-2xl font-bold">
          KLY<span className="text-gold">NEO</span>
        </span>
      )}
    </div>
  )
}
