import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variantClasses = {
      default: "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-violet-700",
      outline: "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
      ghost: "bg-transparent text-slate-800 hover:bg-slate-100",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    }

    const sizeClasses = {
      default: "h-11 px-5",
      sm: "h-9 px-3",
      lg: "h-12 px-8",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }