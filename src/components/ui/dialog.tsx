"use client"

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, type HTMLAttributes, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

import { cn } from "../../lib/utils"

interface DialogProps extends ComponentPropsWithoutRef<"div"> {
    open?: boolean
}

const Dialog = forwardRef<ElementRef<"div">, DialogProps>(({
    className,
    open = false,
    children,
    ...props
}, ref) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    if (!open) return null

    return createPortal( 
        <div> 
            <DialogOverlay open={open} className={className} {...props}>
                <DialogContent open={open} ref={ref} {...props}>
                    {children}
                </DialogContent>
            </DialogOverlay>
        </div>,
        document.body
    );
})
Dialog.displayName = "Dialog"

interface DialogOverlayProps extends DialogProps {

}

const DialogOverlay = forwardRef<ElementRef<"div">, DialogOverlayProps>(({
    className,
    children,
    open,
    ...props
}, ref) => (
    <div ref={ref}
        className={cn("bg-black-80/50 w-screen h-screen z-10 fixed inset-0",
            open ? "opacity-100" : "opacity-0", className)}
        {...props}>
        {children}
    </div>
))
DialogOverlay.displayName = "DialogOverlay"

interface DialogContentProps extends DialogProps {
    onClose?: () => void;
}

const DialogContent = forwardRef<ElementRef<"div">, DialogContentProps>(({
    className,
    children,
    open,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("fixed bottom-0 z-50 grid w-full bg-background shadow-lg duration-500 transition-transform ease-in-out transform overflow-y-auto",
            "sm:max-w-screen-sm sm:rounded-lg h-fit", // Styling untuk tablet ke atas
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[700px] md:translate-y-[-50px]",

            // Animasikan berdasarkan ukuran layar
            open ? (
                "sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%]" // Tablet ke atas, muncul dari atas
            ) : (
                "ease-in-out bottom-0" // Mobile, muncul dari bawah
            ),
            className
        )}
        style={{ maxHeight: open ? '60vh' : '0' }} // Atur tinggi maksimum
        {...props}
    >
        {children}
    </div>
));

DialogContent.displayName = "DialogContent"

const DialogClose = forwardRef<ElementRef<"button">, ComponentPropsWithoutRef<"button">>(({
    className,
    ...props
}, ref) => (
    <button ref={ref} className={cn("data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", className)} {...props} />
))
DialogClose.displayName = "DialogClose"

interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}

const DialogHeader = ({
    className,
    onClose,
    ...props
}: DialogHeaderProps) => (
    <div className={cn("flex flex-row justify-between items-center sm:text-left p-4", className)} {...props}> 
        <div>
            {props.children} 
        </div>
        {onClose && ( 
            <DialogClose onClick={onClose} className="cursor-pointer">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DialogClose>
        )}
    </div>
)
DialogHeader.displayName = "DialogHeader"

const DialogBody = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(({
    className,
    children,
    ...props
}, ref) => (
    <div ref={ref} className={cn("p-4", className)} {...props}>
        {children}
    </div>
))
DialogBody.displayName = "DialogBody"

const DialogFooter = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-4", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = forwardRef<ElementRef<"h2">, ComponentPropsWithoutRef<"h2">>(({
    className,
    ...props
}, ref) => (
    <h2 ref={ref}
        className={cn("text-lg font-regular leading-none tracking-tight", className)} {...props} />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = forwardRef<ElementRef<"p">, ComponentPropsWithoutRef<"p">>(({
    className,
    ...props
}, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
DialogDescription.displayName = "DialogDescription"

export {
    Dialog,
    DialogOverlay,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogBody
}
