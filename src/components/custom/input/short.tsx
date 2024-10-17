import { cn } from "../../../lib/utils"
import { useState, forwardRef, Children, type InputHTMLAttributes} from "react"

interface InputProps {
    placeholder:string;
    children?:React.ReactNode;
    setEnteredText: (value:string) => void;
    value:string
}

interface InputTextProps{
    iconLeft?:boolean;
    iconright?:boolean;
}

interface InputNumberProps{
    labelLeft?:string;
    labelRight?:string;
    type?: "default" | "percentage" | "money" | "4-digits-seperate";
}

const InputShortText = forwardRef<
HTMLInputElement,
React.HTMLAttributes<HTMLInputElement> & InputProps & InputHTMLAttributes<HTMLInputElement> & InputTextProps
>(({ className, setEnteredText, placeholder, type, iconLeft, value, iconright, children, ...props }, ref) => {
    
    // const [enteredText, setEnteredText] = useState("")
    const [isPasswordHidden, setPasswordHidden] = useState(true)
    const icons: React.ReactNode[] = [];

    if(props.readOnly){
        setEnteredText= () =>{}
    }

    function handleClearText(){
        setEnteredText("")
        console.log(value)
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
    console.log(value)

        return (
            <div className={cn("input")} >
                {
                    type=="number" &&
                        <span className={cn("unit-input", !props.disabled && "active")}>Rupiah</span>
                }
                
                {(icons && iconLeft) && icons[0]}
                <input {...props} ref={ref} role="input" type={type ==="password"? isPasswordHidden? "password" : "text":type} placeholder={placeholder} value={value} onChange={(e)=> setEnteredText(e.target.value)}/> 
                {
                    (value && !props.readOnly) && 
                        <svg onClick={handleClearText} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z" fill="#58585B"/>
                        </svg>
                }
                {
                    type === "password" && 
                        <svg  onClick={() => props.disabled? null: setPasswordHidden(!isPasswordHidden)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d={isPasswordHidden? "M11.9953 5C7.73495 5 3.91914 7.64806 2.05973 11.7257C1.98009 11.9004 1.98009 12.0996 2.05973 12.2743C3.91914 16.3519 7.73495 19 11.9953 19C16.2528 19 20.0676 16.3544 21.9396 12.2757C22.0201 12.1002 22.0201 11.8998 21.9396 11.7243C20.0676 7.64563 16.2528 5 11.9953 5ZM12.264 6.35895C15.6588 6.46287 18.7266 8.53073 20.4108 11.7569L20.533 12L20.4108 12.2431C18.6823 15.5542 15.4964 17.6452 11.9953 17.6452L11.7265 17.641C8.32971 17.5371 5.26229 15.4681 3.58821 12.2443L3.46512 12L3.58821 11.7557C5.30634 8.44708 8.49212 6.35484 11.9953 6.35484L12.264 6.35895ZM12 7.70968C9.5598 7.70968 7.5814 9.63065 7.5814 12C7.5814 14.3694 9.5598 16.2903 12 16.2903C14.4402 16.2903 16.4186 14.3694 16.4186 12C16.4186 9.63065 14.4402 7.70968 12 7.70968ZM12 9.06452C13.6696 9.06452 15.0233 10.3789 15.0233 12C15.0233 13.6211 13.6696 14.9355 12 14.9355C10.3304 14.9355 8.97674 13.6211 8.97674 12C8.97674 10.3789 10.3304 9.06452 12 9.06452Z" : "M20.8654 3.20277C20.593 2.93241 20.1512 2.93241 19.8788 3.20277L3.13458 19.8182L3.06702 19.8958C2.86437 20.1668 2.88689 20.5514 3.13458 20.7972C3.40704 21.0676 3.84878 21.0676 4.12124 20.7972L7.07212 17.869C8.58719 18.7087 10.263 19.1538 11.9953 19.1538C16.2528 19.1538 20.0676 16.4501 21.9396 12.2818C22.0201 12.1024 22.0201 11.8976 21.9396 11.7182C21.0645 9.76959 19.7438 8.1074 18.1207 6.90541L20.8654 4.18184L20.933 4.1042C21.1356 3.83317 21.1131 3.44856 20.8654 3.20277ZM17.1217 7.89674L15.5787 9.42785C16.1196 10.1675 16.4186 11.0615 16.4186 12C16.4186 14.4214 14.4402 16.3846 12 16.3846C11.0542 16.3846 10.1533 16.088 9.40792 15.5512L8.10394 16.8452C9.3187 17.4512 10.637 17.7692 11.9953 17.7692C15.4964 17.7692 18.6823 15.6323 20.4108 12.2485L20.533 12.0009L20.5097 11.95C19.7092 10.3077 18.5517 8.91886 17.1572 7.92117L17.1217 7.89674ZM10.4129 14.554C10.8834 14.8428 11.4289 15 12 15C13.6696 15 15.0233 13.6567 15.0233 12C15.0233 11.4333 14.8648 10.892 14.5738 10.4251L10.4129 14.554ZM14.5249 5.1703C13.7017 4.95561 12.8546 4.84615 11.9953 4.84615C7.73495 4.84615 3.91914 7.55241 2.05973 11.7197C1.98009 11.8982 1.98009 12.1018 2.05973 12.2803C2.64274 13.5869 3.42961 14.77 4.38095 15.7732C4.645 16.0517 5.08654 16.065 5.36715 15.803C5.64777 15.541 5.6612 15.1028 5.39715 14.8244L5.12168 14.5222C4.4915 13.8035 3.95033 12.9895 3.51544 12.1037L3.46605 11.9982L3.58821 11.7504C5.30634 8.369 8.49212 6.23077 11.9953 6.23077C12.7344 6.23077 13.4624 6.32482 14.1703 6.50943C14.5429 6.60662 14.9244 6.38564 15.0224 6.01585C15.1203 5.64605 14.8976 5.26749 14.5249 5.1703ZM12.6977 8.30769C12.6977 7.92534 12.3853 7.61538 12 7.61538C9.5598 7.61538 7.5814 9.57857 7.5814 12C7.5814 12.3824 7.89375 12.6923 8.27907 12.6923C8.66438 12.6923 8.97674 12.3824 8.97674 12C8.97674 10.3433 10.3304 9 12 9C12.3853 9 12.6977 8.69004 12.6977 8.30769Z"} fill="#58585B"/>
                        </svg>   
                }
                {(((icons[0] || icons[1]) && iconright) && (icons[1]?icons[1]:icons[0])) }
            </div>
        
        )
    }
)

export {InputShortText}