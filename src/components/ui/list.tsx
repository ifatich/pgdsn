"use client"

import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"

// Variants for list
const listVariants = cva("list", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    variant: {
      unordered: "list-disc pl-5",
      ordered: "list-decimal pl-5",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "unordered",
  },
})

type ListProps = HTMLAttributes<HTMLUListElement | HTMLOListElement> & VariantProps<typeof listVariants>

const List = forwardRef<HTMLOListElement | HTMLUListElement, ListProps>(
  ({ className, size, variant = "unordered", ...props }, ref) => {
    const Component = variant === "ordered" ? "ol" : "ul"

    if (Component === "ol") {
      return <ol ref={ref as React.Ref<HTMLOListElement>} className={cn(listVariants({ size, variant }), className)} {...props} />
    } else {
      return <ul ref={ref as React.Ref<HTMLUListElement>} className={cn(listVariants({ size, variant }), className)} {...props} />
    }
  }
)

List.displayName = "List"

export { List }
