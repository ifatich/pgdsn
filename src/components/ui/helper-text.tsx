import { forwardRef} from "react"

const ErrorText = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & {active?:boolean;}
>(({ className, children, active, ...props }, ref) => {
    return (
        active &&
            <div className="text-omega text-destructive font-regular">
                {children}
            </div>
    )
})

const HelperText = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & {active?:boolean;}
>(({ className, children, active, ...props }, ref) => {
    return (
        active &&
            <div className="text-omega text-black-60 font-regular">
                {children}
            </div>
    )
})



export {ErrorText, HelperText}