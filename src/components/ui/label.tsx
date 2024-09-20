"use client"

import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type LabelHTMLAttributes } from "react"


const labelVariants = cva("form__label")

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants>>(({
    className,
    ...props
}, ref) => (
    <label ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = "Label"

export { Label }