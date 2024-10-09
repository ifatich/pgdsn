import { cn } from "../../lib/utils"
import { forwardRef, type HTMLAttributes } from "react"


const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("card", className)}
        {...props}
    />
))
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("card__header", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(({
    className,
    ...props
}, ref) => (
    <h3
        ref={ref}
        className={cn("card__title", className)}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

interface CardDescriptionPropsType extends HTMLAttributes<HTMLParagraphElement> {
    highlight?: boolean
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionPropsType>(({
    highlight = false,
    className,
    ...props
}, ref) => (
    <p
        ref={ref}
        className={cn(
            "card__description",
            highlight && "card__description--highlight",
            className
        )}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
    className,
    ...props
}, ref) => (
    <div ref={ref} className={cn("card__content", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("card__footer", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
}
