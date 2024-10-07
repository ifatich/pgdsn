import { cn } from "../../../lib/utils"
import { useState, forwardRef, Children, type InputHTMLAttributes, type TextareaHTMLAttributes} from "react"

interface InputProps {
    placeholder:string;
    children?:React.ReactNode;
    setEnteredText: (value:string) => void;
}

interface InputTextProps{
    iconLeft?:boolean;
    iconright?:boolean;
}

const InputLongText = forwardRef<
HTMLInputElement,
React.HTMLAttributes<HTMLInputElement> & InputProps & InputTextProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, placeholder, setEnteredText, iconLeft, iconright, children, ...props }, ref) => {

    const icons: React.ReactNode[] = [];

    function handleClearText(){
        setEnteredText("")
        console.log(props.value)
    }

    if((iconLeft && iconright) && (Children.toArray(children).length===1)){
        icons.push(
            <div key={0}>{Children.toArray(children)[0]}</div>
        )
        icons.push(
            <div key={1}>{Children.toArray(children)[0]}</div>
        )
    }else{
        Children.toArray(children).map((i,key) => {
            icons.push(
                <div key={key}>{i}</div>
            )
        })
    }   

    return(
        <div className={cn("input-group")}>
            <div className={cn("input")} {...props} ref={ref} role="input" >
                {(icons && iconLeft) && icons[0]}
                <textarea {...props} placeholder={placeholder} value={props.value} onChange={(e)=> setEnteredText(e.target.value)} ></textarea>
                {
                (props.value && !props.readOnly) && 
                        <svg onClick={handleClearText} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z" fill="#58585B"/>
                        </svg>
                }
                {(((icons[0] || icons[1]) && iconright) && (icons[1]?icons[1]:icons[0])) }
            </div>
        </div>
    )
}) 


export {InputLongText}