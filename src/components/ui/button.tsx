import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2Icon } from "lucide-react"
import {
    type ButtonHTMLAttributes,
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    type ReactElement,
    type ReactNode
} from "react"


const buttonVariants = cva("btn", {
    variants: {
        variant: {
            default: "btn--default",
            primary: "btn--primary",
            destructive: "btn--destructive",
            outline: "btn--outline",
            secondary: "btn--secondary",
            ghost: "btn--ghost",
            "ghost-fab": "btn--ghost-fab",
            link: "btn--link"
        },
        size: {
            md: "btn--md",
            sm: "btn--sm",
            lg: "btn--lg",
            xl: "btn--xl",
            icon: "btn--icon-md",
            "icon-sm": "btn--icon-sm",
            "icon-md": "btn--icon-md",
            "icon-lg": "btn--icon-lg",
            "icon-xl": "btn--icon-xl",
            fab: "btn--fab",
            undefined: ""
        },
        display: {
            inline: "",
            block: "btn--block"
        },
        fixedSize: {
            true: "btn--fixed",
            false: ""
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        display: "inline",
        fixedSize: true
    }
})

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
    children?: ReactNode
    isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(({
    children,
    isLoading = false,
    className,
    variant,
    size,
    display,
    fixedSize,
    asChild = false,
    ...props
}, ref) => {
    const Comp = asChild ? Slot : "button"

    const CompChild = ({child}: {child?: ReactNode}) => {
        return (
            <>
                {isLoading &&
                    <Loader2Icon className={cn(
                        "icon animate-reverse-spin",
                        `icon--${size}`
                    )} />
                }
                {child}
            </>
        )
    }
    const asChildChildren = asChild
        ? Children.map(children, child => isValidElement(child) ? child.props.children : null)
        : null

    return (
        <Comp ref={ref}
            className={cn(buttonVariants({
                variant,
                size,
                display,
                fixedSize,
                className
            }))}
            {...props}>
            {asChild
                ? cloneElement(children as ReactElement, {}, <CompChild child={asChildChildren} />)
                : <CompChild child={children} />
            }
        </Comp>
    )
})
Button.displayName = "Button"

export {
    Button,
    buttonVariants
}
