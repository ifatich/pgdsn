import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { useState, forwardRef, useEffect, Children } from "react";


const modalHeaderVariant = cva(
    "",
  {
    variants: {
      dismiss: {
        true: "modal-dismiss",
        false: "modal-non-dismiss"
      }
    },
    defaultVariants: {
      dismiss: true,
    },
  }
)

interface ModalProps {
    // isModalOpen: boolean;
    // setModalOpen: (isModalOpen:boolean) => void;
    children: React.ReactNode;
}

const Modal = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ModalProps
>(({ className, children, ...props }, ref) => {
    const [visible, setVisible] = useState(true)
    const [animationState, setAnimationState] = useState<string | null>(null);;
    const [isOpacityZero, setOpacityZero] =useState(false);


//     function handleClose(){
//         setTimeout(() => setOpacityZero(!isOpacityZero), 300);
//         setAnimationState(null);
//         setTimeout(() => setModalOpen(isModalOpen), 300);
//         console.log(isModalOpen)
//       }

//   useEffect(() => {
//     setOpacityZero(!isOpacityZero)
//     setAnimationState("animation-enter");
//     setVisible(isModalOpen)
//     console.log(isModalOpen)
//   }, []);

  if (!visible) return null

  return (
    <>
    <div className="bg-black-80 opacity-50 w-screen h-screen z-10 fixed inset-0 transition-opacity duration-200 ease-in-out"></div>
    <div
      ref={ref}
      role="modal"
      className={cn("modal", className)}
      {...props}
    >   
        {children}  
    </div>
    </>
    
  )
})

Modal.displayName = "modal"

const ModalHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof modalHeaderVariant> & {onClose: () => void;}
>(({ className, onClose, dismiss, ...props }, ref) => {

    return(
        <div className={cn("modal-header", className)} {...props}>
            <h4 ref={ref} {...props} />
                <svg onClick={onClose} className={cn(modalHeaderVariant({ dismiss }), className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="filled=false">
                        <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z" fill="#58585B"/>
                    </g>
                </svg>
        </div>
    )
}
    
)
ModalHeader.displayName = "ModalHeader"

const ModalBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("modal-body", className)} {...props} />
))
ModalBody.displayName = "ModalBody"

const ModalFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("modal-footer", className)} {...props} />
))
ModalFooter.displayName = "ModalFooter" 

export {Modal,ModalBody,ModalFooter,ModalHeader,modalHeaderVariant}