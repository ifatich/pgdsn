import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const overlayVariants = cva(
  "overlay",
  {
    variants: {
      variant: {
        center: "overlay-center",
        bottom: "overlay--bottom",
      },
    },
    defaultVariants: {
      variant: "bottom",
    },
  }
)

const Overlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof overlayVariants>
>(({ className, variant, children, ...props }, ref) => {
  const [visible, setVisible] = React.useState(true)
  if (!visible) return null

  return (
    <div
      data-sonner-toast
      ref={ref}
      role="toast"
      className={cn(overlayVariants({ variant }), className)}
      {...props}
    >
       <div className="w-full h-full bg-black-80/50">
            {children}
       </div>
    </div>
  )
})