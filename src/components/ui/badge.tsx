import { cn } from "../../lib/utils"
import { useState, useEffect, forwardRef} from "react"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
    "badge",
    {
      variants: {
        variant: {
          red: "badge-red",
          orange: "badge-orange",
          green: "badge-green",  
          blue: "badge-blue",
        },
      },
      defaultVariants: {
        variant: "green",
      },
    }
  )

interface BadgeProps {
    dismiss?: boolean
    isBadgeOpen?: boolean;
    setBadgeOpen?: () => void;
    children: React.ReactNode;
}

const Badge = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants> & BadgeProps
>(({ className,children, variant, dismiss, isBadgeOpen, setBadgeOpen, ...props }, ref) => {
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    if (isBadgeOpen) {
        setAnimationState(true); // Start animation
      } else {
        setAnimationState(false); // Stop animation
      }
  }, [isBadgeOpen]);

  function handleClose(){
    setAnimationState(false);
    if(setBadgeOpen) setTimeout(() => setBadgeOpen(), 300);
  }

  if (!isBadgeOpen) return null;

  return (
    <div 
    className={cn(
        badgeVariants({variant}),
        animationState ? "opacity-100" : "opacity-0",
        className,
    )}
    ref={ref}
    role="badge"
    {...props}
    >
        {children}
        {
            dismiss &&
            <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.3334 10C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 10C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 10ZM6.86346 6.86344C7.1104 6.61651 7.50173 6.60198 7.76565 6.81986L7.81358 6.86344L10.2778 9.32765L12.742 6.86344L12.7899 6.81986C13.0539 6.60198 13.4452 6.61651 13.6921 6.86344C13.9545 7.12581 13.9545 7.55119 13.6921 7.81356L11.2279 10.2778L13.6921 12.742C13.9545 13.0044 13.9545 13.4297 13.6921 13.6921C13.4452 13.939 13.0539 13.9536 12.7899 13.7357L12.742 13.6921L10.2778 11.2279L7.81357 13.6921L7.76565 13.7357C7.50172 13.9536 7.11039 13.939 6.86345 13.6921C6.60109 13.4297 6.60109 13.0044 6.86345 12.742L9.32768 10.2778L6.86346 7.81356C6.6011 7.55119 6.6011 7.12581 6.86346 6.86344Z" fill="#939597"/>
            </svg>
        }
         
    </div>
  )
})

export {Badge}