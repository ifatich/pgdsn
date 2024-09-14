import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { useState, forwardRef, useEffect } from "react";

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
  onClose: () => void;
}

const Modal = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ModalProps & VariantProps<typeof modalHeaderVariant>
>(({ className, children, dismiss, isOpen, onClose, ...props }, ref) => {
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    // Handle the animation when modal is opened or closed
    if (isOpen) {
      setAnimationState(true); // Start animation
    } else {
      setAnimationState(false); // Stop animation
    }
  }, [isOpen]);

  function handleClose() {
    setAnimationState(false); // Start closing animation
    setTimeout(() => onClose(), 200); // Close modal after animation
    return null
  }

  if (!isOpen && !animationState) return handleClose();

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className={cn("overlay", animationState ? "opacity-50" : "opacity-0", className)}
        onClick={handleClose}
      ></div>
      <div
        ref={ref}
        role="modal"
        className={cn("modal", animationState ? "animation-enter" : "animation-exit", className)}
        {...props}
      >
        <svg
        onClick={handleClose} // This is where handleClose is passed
        className={cn(modalHeaderVariant({ dismiss }), className)}
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
        {children}
      </div>
    </div>
  );
});

Modal.displayName = "modal";

const ModalHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> 
>(({ className, ...props }, ref) => {
  return (
      <h4 ref={ref} {...props}  className={cn("modal-header", className)}/>
  );
});

ModalHeader.displayName = "ModalHeader";

const ModalBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("modal-body", className)} {...props} />
));
ModalBody.displayName = "ModalBody";

const ModalFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("modal-footer", className)} {...props} />
));
ModalFooter.displayName = "ModalFooter";

export { Modal, ModalHeader, ModalBody, ModalFooter };
