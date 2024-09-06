import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
// import { error } from "console"
import * as React from "react"

const toastVariants = cva(
  "sonner",
  {
    variants: {
      variant: {
        default: "sonner--info",
        error: "sonner--error",
        success: "sonner--success",
        warning: "sonner--warning",  
        info: "sonner--info",
      },
      type: {
        mobile: "sonner--mobile",
        desktop: "sonner--desktop",
      }
    },
    defaultVariants: {
      variant: "default",
      type: "desktop",
    },
  }
)

interface ToastProps {
  isToastOpen: boolean;
  setToastOpen: () => void;
  children: React.ReactNode;
}



const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof toastVariants>  & ToastProps
>(({ className, variant, type, isToastOpen, setToastOpen, children, ...props }, ref) => {
  const [visible, setVisible] = React.useState(isToastOpen)
  if (!isToastOpen) return null

  return (
    <>
      {
        type==="mobile"
          && <div className="overlay bg-black-80 opacity-50 w-screen h-screen z-1 fixed inset-0"/>
      }
      <div
        data-sonner-toast
        ref={ref}
        role="toast"
        className={cn(toastVariants({ variant, type }), className)}
        {...props}
      >
        <div className="inline-block items-center">
        {children}
        </div>
        <button
          onClick={setToastOpen}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <svg  fill={cn(toastVariants({ variant }))} className="h-5 w-5" role="button" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="filled=false">
              <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"/>
            </g>  
          </svg>
        </button>
      </div>
    </>
    
  )
})
Toast.displayName = "toast"

const ToastTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 data-title ref={ref} className={cn("__title", className)} {...props} />
))
ToastTitle.displayName = "toastTitle"

const ToastDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div data-description ref={ref} className={cn("__description", className)} {...props} />
))
ToastDescription.displayName = "toastDescription"

export { Toast, ToastDescription, ToastTitle, toastVariants }