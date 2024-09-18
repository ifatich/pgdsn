import { cn } from "../../lib/utils"
import { useState, useEffect, forwardRef, Children} from "react"
import { cva, type VariantProps } from "class-variance-authority"


interface BreadcumbProps {
    itemList: { page: string; link: string }[]
    children?:React.ReactNode;
}

const Breadcumb = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BreadcumbProps
>(({ className, itemList, children, ...props }, ref) => {

  return (
    <div className={cn("breadcumb")}>
        {
            itemList.map((item,i) => {
                if(i>=0 && i!=(itemList.length-1)) {
                    return(
                        <div key={i} className={cn("breadcumb-item")}>
                            <a href={item.link}>{item.page}</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M8.99755 15.875L12.8775 11.995L8.99755 8.11499C8.60755 7.72499 8.60755 7.09499 8.99755 6.70499C9.38755 6.31499 10.0175 6.31499 10.4075 6.70499L14.9975 11.295C15.3875 11.685 15.3875 12.315 14.9975 12.705L10.4075 17.295C10.0175 17.685 9.38755 17.685 8.99755 17.295C8.61755 16.905 8.60755 16.265 8.99755 15.875Z" fill="#58585B"/>
                            </svg>
                        </div> 
                    )
                }else{
                    return (
                        <div key={i} className={cn("breadcumb-item active")}>
                            {item.page}
                        </div>
                    )
                }
            })
        }
    </div>
  )
})

// interface BreadcumpItemProps{
//     page:string;
//     link:string;
//     isActive: boolean;
//     children:React.ReactNode;
// }

// const BreadcrumbItem = forwardRef<
//   HTMLHeadingElement,
//   React.HTMLAttributes<HTMLHeadingElement> & BreadcumpItemProps
// >(({ className, isActive, page, link, ...props }, ref) => (
//   isActive?
//   <a href={link}>{page}</a>
//   : page
// ))
// BreadcrumbItem.displayName = "Breadcumb Item" 

export {Breadcumb}


