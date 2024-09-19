import { cn } from "../../lib/utils"
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

export {ErrorText}