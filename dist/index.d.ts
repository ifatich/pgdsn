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

export { Button };
