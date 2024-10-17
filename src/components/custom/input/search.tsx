import { cn } from "../../../lib/utils"
import { forwardRef, Children, type InputHTMLAttributes} from "react"

interface InputProps {
    placeholder:string;
    children?:React.ReactNode;
    setEnteredText: (value:string) => void;
    value: string;
    shadow?:boolean;
}

const InputSearch = forwardRef<
HTMLInputElement,
React.HTMLAttributes<HTMLInputElement> & InputProps & InputHTMLAttributes<HTMLInputElement>
>(({ className, setEnteredText, placeholder, shadow, value, children, ...props }, ref) => {

    function handleClearText(){
        setEnteredText("")
    }

        return (
            <div className={cn("input","input-search", shadow?"shadow":null, className)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3645 14.608H16.1986L20.6753 19.1033C21.1082 19.5359 21.1082 20.2429 20.6753 20.6755C20.2424 21.1082 19.535 21.1082 19.1021 20.6755L14.6148 16.1909V15.3572L14.3298 15.0618C12.8516 16.328 10.835 16.9823 8.69161 16.6235C5.75639 16.1275 3.41244 13.6794 3.05345 10.7248C2.50442 6.26128 6.26319 2.50471 10.7294 3.05342C13.6857 3.41219 16.1352 5.75477 16.6315 8.68827C16.9905 10.8304 16.3359 12.8458 15.0688 14.3231L15.3645 14.608ZM5.11233 9.85956C5.11233 12.487 7.23456 14.608 9.86359 14.608C12.4926 14.608 14.6148 12.487 14.6148 9.85956C14.6148 7.23207 12.4926 5.11109 9.86359 5.11109C7.23456 5.11109 5.11233 7.23207 5.11233 9.85956Z" fill="#58585B"/>
                </svg>
                <input {...props} ref={ref} role="input" placeholder={placeholder} value={value} onChange={(e)=> setEnteredText(e.target.value)}/> 
                {
                    (value && !props.readOnly) && 
                        <svg onClick={handleClearText} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z" fill="#58585B"/>
                        </svg>
                }
            </div>
        
        )
    }
)

export {InputSearch}