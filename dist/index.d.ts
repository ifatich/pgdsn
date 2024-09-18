import * as react from 'react';
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

interface BreadcumbProps {
    itemList: {
        page: string;
        link: string;
    }[];
    children?: React.ReactNode;
}
declare const Breadcumb: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & BreadcumbProps & react.RefAttributes<HTMLDivElement>>;

export { Badge, Breadcumb, Button, InfoTipDescription, InfoTipTitle, Infotip, Modal, ModalBody, ModalFooter, ModalHeader, Toast, ToastDescription, ToastTitle };
