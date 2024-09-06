import * as React from 'react';
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
declare const Button: React.ForwardRefExoticComponent<ButtonPropsType & React.RefAttributes<HTMLButtonElement>>;

declare const Infotip: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
declare const InfoTipTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const InfoTipDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

interface ToastProps {
    isToastOpen: boolean;
    setToastOpen: (isToastOpen: boolean) => void;
    children: React.ReactNode;
}
declare const Toast: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
    type?: "mobile" | "desktop" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & ToastProps & React.RefAttributes<HTMLDivElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

export { Button, InfoTipDescription, InfoTipTitle, Infotip, Toast, ToastDescription, ToastTitle };
