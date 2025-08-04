import * as React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className={cn("h-6 w-6", className)}
        {...props}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            fill="currentColor"
            d="M208 40H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 160H48V56h160v144Z"
        />
        <path
            fill="currentColor"
            d="M164 84h-40a28 28 0 0 0-28 28v40a28 28 0 0 0 28 28h40a28 28 0 0 0 28-28v-40a28 28 0 0 0-28-28Zm-40 80a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12Z"
        />
    </svg>
  )
}
