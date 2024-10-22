import { cn } from "../../lib/utils"
import { forwardRef, Children, type InputHTMLAttributes} from "react"

interface ProgressBarProps{
    children?:React.ReactNode;
    value:number;
}

const ProgressBar = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & ProgressBarProps 
>(({ className, children, value, ...props }, ref) => {

    return(
        <div className="progress-bar">
            <div className={cn("fill-bar", className)} style={{ width: `${value}%` }}/>
        </div>
    )
})

export {ProgressBar}