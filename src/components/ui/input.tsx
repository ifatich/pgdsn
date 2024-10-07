import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type InputHTMLAttributes } from "react"


const inputVariants = cva("input", {
    variants: {
        inputSize: {
            md: "input--md",
            sm: "input--sm",
            lg: "input--lg",
            xl: "input--xl"
        },
        variant: {
            "hover-focus": "input-hover-focus"
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

const InputGroup = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & {children:React.ReactNode}
>(({ className, children, title, ...props }, ref) => {
    return (
        <div className={cn("input-group")}>
            {children}
        </div>
    )
})

export { Input, InputGroup, inputVariants }
