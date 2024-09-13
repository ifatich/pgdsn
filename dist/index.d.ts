import * as React$1 from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

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
declare const Button: React$1.ForwardRefExoticComponent<ButtonPropsType & React$1.RefAttributes<HTMLButtonElement>>;

declare const Infotip: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const InfoTipTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const InfoTipDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

interface ToastProps {
    isToastOpen: boolean;
    setToastOpen: (isToastOpen: boolean) => void;
    children: React$1.ReactNode;
}
declare const Toast: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
    type?: "mobile" | "desktop" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & ToastProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

interface ModalProps {
    children: React.ReactNode;
}
declare const Modal: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & ModalProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & VariantProps<(props?: ({
    dismiss?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    onClose: () => void;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ModalBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const ModalFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLDivElement>>;

export { Button, InfoTipDescription, InfoTipTitle, Infotip, Modal, ModalBody, ModalFooter, ModalHeader, Toast, ToastDescription, ToastTitle };
