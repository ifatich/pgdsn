import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, LabelHTMLAttributes, HTMLAttributes, ComponentPropsWithoutRef } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: (props?: ({
    variant?: "default" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | "ghost-fab" | "link" | null | undefined;
    size?: "undefined" | "md" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "fab" | null | undefined;
    display?: "inline" | "block" | null | undefined;
    fixedSize?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    children?: ReactNode;
    isLoading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonPropsType & react.RefAttributes<HTMLButtonElement>>;

declare const Infotip: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    dismiss?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const InfoTipTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const InfoTipDescription: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;

interface ToastProps {
    isToastOpen: boolean;
    setToastOpen: () => void;
    children: React.ReactNode;
}
declare const Toast: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & ToastProps & react.RefAttributes<HTMLDivElement>>;
declare const ToastTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const ToastDescription: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
declare const Modal: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & ModalProps & VariantProps<(props?: ({
    dismiss?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & react.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLDivElement>>;
declare const ModalBody: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLDivElement>>;
declare const ModalFooter: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLDivElement>>;

interface BadgeProps {
    dismiss?: boolean;
    isBadgeOpen?: boolean;
    setBadgeOpen?: () => void;
    children: React.ReactNode;
}
declare const Badge: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "red" | "orange" | "green" | "blue" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & BadgeProps & react.RefAttributes<HTMLDivElement>>;

declare const inputVariants: (props?: ({
    inputSize?: "md" | "sm" | "lg" | "xl" | null | undefined;
    variant?: "hover-focus" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const Label: react.ForwardRefExoticComponent<LabelHTMLAttributes<HTMLLabelElement> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & react.RefAttributes<HTMLLabelElement>>;

interface DialogProps extends ComponentPropsWithoutRef<"div"> {
    open?: boolean;
}
declare const Dialog: react.ForwardRefExoticComponent<DialogProps & react.RefAttributes<HTMLDivElement>>;
interface DialogOverlayProps extends DialogProps {
}
declare const DialogOverlay: react.ForwardRefExoticComponent<DialogOverlayProps & react.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends DialogProps {
    onClose?: () => void;
}
declare const DialogContent: react.ForwardRefExoticComponent<DialogContentProps & react.RefAttributes<HTMLDivElement>>;
declare const DialogClose: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}
declare const DialogHeader: {
    ({ className, onClose, ...props }: DialogHeaderProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogBody: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DialogFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

export { Badge, Button, Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, InfoTipDescription, InfoTipTitle, Infotip, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Toast, ToastDescription, ToastTitle, inputVariants };
