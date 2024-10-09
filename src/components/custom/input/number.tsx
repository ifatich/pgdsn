import { cn } from "../../../lib/utils"
import { useState, forwardRef, Children, type InputHTMLAttributes, type TextareaHTMLAttributes} from "react"

interface InputProps {
    placeholder:string;
    children?:React.ReactNode;
    setEnteredText: (value:string) => void;
}

interface InputNumberProps{
    labelLeft?:string;
    labelRight?:string;
    type?: "default" | "percentage" | "money" | "4-digits-seperate";
}

const InputNumber = forwardRef<
HTMLInputElement,
React.HTMLAttributes<HTMLInputElement> & InputProps & InputHTMLAttributes<HTMLInputElement> & InputNumberProps
>(({ className, placeholder, setEnteredText, type, children, labelLeft, labelRight, ...props }, ref) => {

    function handleClearText(){
        setEnteredText("")
        console.log(props.value)
    }

    function setInputValue(currentValue:string){
        let formattedValue = ""
        if(type=="percentage"){
            formattedValue = currentValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }else if(type == "money"){
            formattedValue = currentValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }else if(type == "4-digits-seperate"){
            formattedValue = currentValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        }else{
            formattedValue = currentValue
        }

        setEnteredText(formattedValue)
    }
    return (
        <div className={cn("input")} >
            {
                labelLeft &&
                    <span className={cn("unit-input-left", !props.disabled && "active")}>{labelLeft}</span>
            }
            <input {...props} ref={ref} role="input"  placeholder={placeholder} value={props.value} onChange={(e)=> setInputValue(e.target.value)}/> 
            {
                (props.value && !props.readOnly) && 
                    <svg onClick={handleClearText} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z" fill="#58585B"/>
                    </svg>
            }
            {
                labelRight &&
                    <span className={cn("unit-input-right", !props.disabled && "active")}>{labelRight}</span>
            }
        </div>
    )
})

export {InputNumber}