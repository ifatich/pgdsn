import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { useState, forwardRef, useEffect, Children, useContext, createContext } from "react";

const modalHeaderVariant = cva("", {
  variants: {
    dismiss: {
      true: "modal-dismiss",
      false: "modal-non-dismiss",
    },
  },
  defaultVariants: {
    dismiss: false,
  },
});

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: (isOpen:boolean) => void;
}

interface ModalContextType {
    animationState: boolean;
    setAnimationState: (state: boolean) => void;
}
  

const ModalContext = createContext<ModalContextType | undefined>(undefined)

function getModalContext(){
    let context = useContext(ModalContext)

  if (context === undefined) {
    throw Error('Modal undefined')
  }

  return context
}
  

const Modal = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ModalProps
>(({ className, children, isOpen, setOpen, ...props }, ref) => {
  const [animationState, setAnimationState] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
        setModalOpen(true)
      setTimeout(() => setAnimationState(true), 200);
      preventBodyScroll();
    }else{
        setAnimationState(false)
        setTimeout(() => setModalOpen(false), 200);
    }
    return () => restoreBodyScroll();
  }, [isOpen]);

  function handleClose() {
    setAnimationState(false); // Start closing animation
    setOpen(false)
  }

  function preventBodyScroll() {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  }

  function restoreBodyScroll() {
    const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollY);
  }

  if (isModalOpen === false) return null; // Don’t render anything when closed

  return (
    <ModalContext.Provider value={{animationState, setAnimationState}}>
        <div className="fixed inset-0 flex items-center justify-center">
      <div
        className={cn("overlay", animationState ? "opacity-50" : "opacity-0")}
        onClick={handleClose}
        ref={ref}
        role="modal"
        {...props}
      ></div>   
      <div
        ref={ref}
        role="modal"
        className={cn("modal", animationState ? "animation-enter" : "animation-exit","sm:w-[360px]", className)}
        {...props}
      >
        {children}
      </div>
    </div>
    </ModalContext.Provider> 
    
  );
});


Modal.displayName = "modal";

interface ModalHeaderProps{
    setOpen: (isOpen:boolean) => void;
    children? : React.ReactNode;
}

const ModalHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & ModalHeaderProps & VariantProps<typeof modalHeaderVariant>
>(({ className, setOpen, dismiss, children, ...props }, ref) => {

    const {animationState, setAnimationState} =  getModalContext()

    function handleClose() {
        setAnimationState(false)
        setOpen(false)
    }
    
  return (
        <div className={cn("modal-header",  Children.count(children) == 0 && "border-b-0 pb-0")}>
            <h4 className={cn("w-full")} ref={ref} {...props}>{children}</h4>
            <svg
                onClick={handleClose}
                className={cn(modalHeaderVariant({ dismiss }))}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g id="filled=false">
                    <path
                    id="Combined Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                    fill="#58585B"
                    />
                </g>
            </svg>
        </div>
      
  );
});

ModalHeader.displayName = "ModalHeader";

const ModalBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("modal-body")} {...props} />
));
ModalBody.displayName = "ModalBody";

const ModalFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("modal-footer")} {...props} />
));
ModalFooter.displayName = "ModalFooter";

export { Modal, ModalHeader, ModalBody, ModalFooter };
