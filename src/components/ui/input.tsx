import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type InputHTMLAttributes } from "react"


const inputVariants = cva("inp", {
    variants: {
        inputSize: {
            md: "inp--md remove-arrow",
            sm: "inp--sm remove-arrow",
            lg: "inp--lg remove-arrow",
            xl: "inp--xl remove-arrow"
        },
        variant: {
            "hover-focus": "inp--hover-focus"
        }
    },
    defaultVariants: {
        inputSize: "lg",
    }
})

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    inputSize,
    variant,
    ...props
}, ref) => {
    return (
        <input type={type} className={cn(inputVariants({inputSize, variant, className}))} ref={ref}{...props} />
    )
})
Input.displayName = "Input"

export { Input, inputVariants }
