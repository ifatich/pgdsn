import { cn } from "../../lib/utils"
import { forwardRef} from "react"


interface LabelProps{
    children:React.ReactNode;
}

const Label = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & LabelProps
>(({ className, children, ...props }, ref) => {
    return (
        <div className={cn("label")}> {children} </div>
    )
})

export {Label}