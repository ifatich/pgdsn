import * as react from 'react';
import react__default, { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, LabelHTMLAttributes, HTMLAttributes, ComponentPropsWithoutRef, TextareaHTMLAttributes } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { TableProps, PaginationComponentProps } from 'react-data-table-component';

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

declare const ErrorText: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const HelperText: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
} & react.RefAttributes<HTMLDivElement>>;

declare const inputVariants: (props?: ({
    inputSize?: "md" | "sm" | "lg" | "xl" | null | undefined;
    variant?: "hover-focus" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps$4 extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps$4 & react.RefAttributes<HTMLInputElement>>;
declare const InputGroup: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

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

interface DatePickerProps {
    selectedDateString: string;
    setSelectedDateString: (selectedDateString: string) => void;
    isActive: boolean;
    setActive: (isActive: boolean) => void;
}
declare const DatePicker: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & DatePickerProps & react.RefAttributes<HTMLDivElement>>;

interface DropdownProps {
    disabled?: boolean;
    loading?: boolean;
    useBottomSheet?: boolean;
    showMenu?: boolean;
    error?: string;
    label?: string;
    items?: Array<{
        [key: string]: any;
    }>;
    itemValue?: string;
    itemText?: string;
    modelValue?: any;
    placeholder?: string;
    className?: string;
    errorFetch?: string;
    executeFetch?: () => void;
    onChange?: (value: any) => void;
    onBlur?: () => void;
}
declare const Dropdown: React.FC<DropdownProps>;

declare const List: react.ForwardRefExoticComponent<HTMLAttributes<HTMLOListElement | HTMLUListElement> & VariantProps<(props?: ({
    size?: "md" | "sm" | "lg" | null | undefined;
    variant?: "ordered" | "unordered" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & react.RefAttributes<HTMLOListElement | HTMLUListElement>>;

interface InputProps$3 {
    placeholder: string;
    children?: React.ReactNode;
    setEnteredText: (value: string) => void;
    value: string;
    shadow?: boolean;
}
declare const InputSearch: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLInputElement> & InputProps$3 & InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

interface ProgressBarProps {
    children?: React.ReactNode;
    value: number;
}
declare const ProgressBar: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & ProgressBarProps & react.RefAttributes<HTMLDivElement>>;

declare const AccordionGroup: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & {
    isActive?: boolean;
    onToggle?: () => void;
} & react.RefAttributes<HTMLDivElement>>;
declare const AccordionHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & {
    isActive?: boolean;
    onToggle?: () => void;
} & react.RefAttributes<HTMLDivElement>>;
declare const AccordionBody: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & {
    isActive?: boolean;
} & react.RefAttributes<HTMLDivElement>>;

interface TabGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    activeTabIndex: number;
    setActiveTabIndex: (index: number) => void;
}
declare const TabGroup: react.ForwardRefExoticComponent<TabGroupProps & react.RefAttributes<HTMLDivElement>>;
interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    setActive?: () => void;
}
declare const TabItem: react.ForwardRefExoticComponent<TabItemProps & react.RefAttributes<HTMLDivElement>>;

type CustomTableProps<T> = TableProps<T> & PaginationComponentProps;
declare const Table: react__default.FC<CustomTableProps<any>>;

interface InputProps$2 {
    placeholder: string;
    children?: React.ReactNode;
    setEnteredText: (value: string) => void;
}
interface InputNumberProps {
    labelLeft?: string;
    labelRight?: string;
    type?: "default" | "percentage" | "money" | "4-digits-seperate";
}
declare const InputNumber: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLInputElement> & InputProps$2 & InputHTMLAttributes<HTMLInputElement> & InputNumberProps & react.RefAttributes<HTMLInputElement>>;

interface InputProps$1 {
    placeholder: string;
    children?: React.ReactNode;
    setEnteredText: (value: string) => void;
    value: string;
}
interface InputTextProps$1 {
    iconLeft?: boolean;
    iconright?: boolean;
}
declare const InputShortText: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLInputElement> & InputProps$1 & InputHTMLAttributes<HTMLInputElement> & InputTextProps$1 & react.RefAttributes<HTMLInputElement>>;

interface InputProps {
    placeholder: string;
    children?: React.ReactNode;
    setEnteredText: (value: string) => void;
}
interface InputTextProps {
    iconLeft?: boolean;
    iconright?: boolean;
}
declare const InputLongText: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLInputElement> & InputProps & InputTextProps & TextareaHTMLAttributes<HTMLTextAreaElement> & react.RefAttributes<HTMLInputElement>>;

export { AccordionBody, AccordionGroup, AccordionHeader, AccordionItem, Badge, Breadcumb, Button, DatePicker, Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, Dropdown, ErrorText, HelperText, InfoTipDescription, InfoTipTitle, Infotip, Input, InputGroup, InputLongText, InputNumber, InputSearch, InputShortText, Label, List, Modal, ModalBody, ModalFooter, ModalHeader, ProgressBar, TabGroup, TabItem, Table, Toast, ToastDescription, ToastTitle, inputVariants };
