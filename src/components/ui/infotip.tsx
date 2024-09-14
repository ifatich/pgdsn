import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { useState, forwardRef }  from "react"

const infotipVariants = cva(
  "infotip",
  {
    variants: {
      variant: {
        default: "infotip--info",
        error: "infotip--error",
        success: "infotip--success",
        warning: "infotip--warning",
        info: "infotip--info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Infotip = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof infotipVariants>
>(({ className, variant, children, ...props }, ref) => {
  const [isOpacityZero, setOpacityZero] = useState(false)
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  function handleClose(){ 
    setOpacityZero(!isOpacityZero)
    setTimeout(() => setVisible(false),200)
  }

  return (
    <div
      ref={ref}
      role="infotip"
      className={cn(infotipVariants({ variant }), isOpacityZero ? "opacity-0" : "opacity-100", className)}
      {...props}
    >
       <div className="inline-block items-center">
       {children}
       </div>
      <button
        onClick={handleClose}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close"
      >
        <svg  fill={cn(infotipVariants({ variant }))} className="h-5 w-5" role="button" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="filled=false">
            <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"/>
          </g>  
        </svg>

      </button>
    </div>
  )
})
Infotip.displayName = "infotip"

const InfoTipTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("infotip__title", className)} {...props} />
))
InfoTipTitle.displayName = "InfoTipTitle"

const InfoTipDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("infotip__description", className)} {...props} />
))
InfoTipDescription.displayName = "InfoTipDescription"

export { Infotip, InfoTipTitle, InfoTipDescription, infotipVariants }