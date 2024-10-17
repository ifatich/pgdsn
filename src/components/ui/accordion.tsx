import { useState, useEffect,useRef, forwardRef} from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"



const AccordionGroup =  forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & {isActive:boolean;setActive:(isActive:boolean) => void}
>(({ className,children, isActive, setActive,...props }, ref) => {

    return(
        <div className={cn("accordion-group", isActive?"accordion-opened":"accordion-closed",className)} onClick={()=> setActive(!isActive)}>
            {children}  
        </div>
    )
})

const AccordionHeader = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & {isActive:boolean}
>(({ className,children, isActive, ...props }, ref) => {

    return(
        <div className={cn("accordion-header",className)}>
            <div className={cn("accordion-title", isActive ? "accordion-opened" : "accordion-closed",className)}>
                {children}
            </div>
            <svg className={cn(isActive && "rotate")} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z" fill="#58585B"/>
            </svg>
        </div>
    )
})

const AccordionBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isActive: boolean }
>(({ className, children, isActive, ...props }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isActive && contentRef.current) {
      // Hitung tinggi konten dan tetapkan ke maxHeight
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      // Jika tidak aktif, setel maxHeight ke 0
      setMaxHeight('0px');
    }
  }, [isActive]);

  return (
    <div
      ref={contentRef}
      className={cn("accordion-body overflow-hidden transition-all duration-300", className)}
      style={{ maxHeight }}
      {...props}
    >
      {children}
    </div>
  );
});

export {AccordionBody, AccordionGroup, AccordionHeader}
