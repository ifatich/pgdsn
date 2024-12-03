"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AccordionBody: () => AccordionBody,
  AccordionGroup: () => AccordionGroup,
  AccordionHeader: () => AccordionHeader,
  AccordionItem: () => AccordionItem,
  Badge: () => Badge,
  Breadcumb: () => Breadcumb,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Check: () => Check,
  CheckBox: () => CheckBox,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  DialogBody: () => DialogBody,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogTitle: () => DialogTitle,
  Dropdown: () => Dropdown,
  ErrorText: () => ErrorText,
  HelperText: () => HelperText,
  InfoTipDescription: () => InfoTipDescription,
  InfoTipTitle: () => InfoTipTitle,
  Infotip: () => Infotip,
  Input: () => Input,
  InputFile: () => InputFile,
  InputGroup: () => InputGroup,
  InputLongText: () => InputLongText,
  InputNumber: () => InputNumber,
  InputSearch: () => InputSearch,
  InputShortText: () => InputShortText,
  Label: () => Label,
  List: () => List,
  Modal: () => Modal,
  ModalBody: () => ModalBody,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ProgressBar: () => ProgressBar,
  Radio: () => Radio,
  RadioBox: () => RadioBox,
  TabGroup: () => TabGroup,
  TabItem: () => TabItem,
  Table: () => Table,
  TimePicker: () => TimePicker,
  TimePickerTry: () => TimePickerTry,
  Toast: () => Toast,
  ToastDescription: () => ToastDescription,
  ToastTitle: () => ToastTitle,
  inputVariants: () => inputVariants
});
module.exports = __toCommonJS(src_exports);

// src/components/ui/accordion.tsx
var import_react = require("react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/accordion.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var AccordionGroup = (0, import_react.forwardRef)(({ className, children, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = (0, import_react.useState)(null);
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => prevIndex === index ? null : index);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("accordion-group", className), ...props, ref, children: import_react.Children.map(
    children,
    (child, index) => (0, import_react.isValidElement)(child) && (0, import_react.cloneElement)(child, {
      isActive: activeIndex === index,
      onToggle: () => toggleAccordion(index)
    })
  ) });
});
var AccordionItem = (0, import_react.forwardRef)(({ className, children, isActive, onToggle, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("accordion-item", className), ...props, ref, children: import_react.Children.map(
    children,
    (child) => (0, import_react.isValidElement)(child) && (0, import_react.cloneElement)(child, { isActive, onToggle })
  ) });
});
var AccordionHeader = (0, import_react.forwardRef)(({ className, children, isActive, onToggle, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: cn("accordion-header", className),
      onClick: onToggle,
      ...props,
      ref,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: cn(
              "accordion-title",
              isActive ? "accordion-opened" : "accordion-closed",
              className
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "svg",
          {
            className: cn(isActive && "rotate"),
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                d: "M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z",
                fill: "#58585B"
              }
            )
          }
        )
      ]
    }
  );
});
var AccordionBody = (0, import_react.forwardRef)(({ className, children, isActive, ...props }, ref) => {
  const contentRef = (0, import_react.useRef)(null);
  const [height, setHeight] = (0, import_react.useState)("0px");
  (0, import_react.useEffect)(() => {
    if (contentRef.current) {
      setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isActive]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: cn(
        "accordion-body",
        isActive ? "accordion-opened" : "accordion-closed",
        className
      ),
      style: {
        height: isActive ? height : "0px",
        overflow: "hidden",
        transition: "height 0.3s ease-in-out"
      },
      ...props,
      ref: contentRef,
      children
    }
  );
});

// src/components/ui/badge.tsx
var import_react2 = require("react");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority.cva)(
  "badge",
  {
    variants: {
      variant: {
        red: "badge-red",
        orange: "badge-orange",
        green: "badge-green",
        blue: "badge-blue"
      }
    },
    defaultVariants: {
      variant: "green"
    }
  }
);
var Badge = (0, import_react2.forwardRef)(({ className, children, variant, dismiss, isBadgeOpen, setBadgeOpen, ...props }, ref) => {
  const [animationState, setAnimationState] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (isBadgeOpen) {
      setAnimationState(true);
    } else {
      setAnimationState(false);
    }
  }, [isBadgeOpen]);
  function handleClose() {
    setAnimationState(false);
    if (setBadgeOpen) setTimeout(() => setBadgeOpen(), 300);
  }
  if (!isBadgeOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: cn(
        badgeVariants({ variant }),
        animationState ? "opacity-100" : "opacity-0",
        className
      ),
      ref,
      role: "badge",
      ...props,
      children: [
        children,
        dismiss && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { onClick: handleClose, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3334 10C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 10C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 10ZM6.86346 6.86344C7.1104 6.61651 7.50173 6.60198 7.76565 6.81986L7.81358 6.86344L10.2778 9.32765L12.742 6.86344L12.7899 6.81986C13.0539 6.60198 13.4452 6.61651 13.6921 6.86344C13.9545 7.12581 13.9545 7.55119 13.6921 7.81356L11.2279 10.2778L13.6921 12.742C13.9545 13.0044 13.9545 13.4297 13.6921 13.6921C13.4452 13.939 13.0539 13.9536 12.7899 13.7357L12.742 13.6921L10.2778 11.2279L7.81357 13.6921L7.76565 13.7357C7.50172 13.9536 7.11039 13.939 6.86345 13.6921C6.60109 13.4297 6.60109 13.0044 6.86345 12.742L9.32768 10.2778L6.86346 7.81356C6.6011 7.55119 6.6011 7.12581 6.86346 6.86344Z", fill: "#939597" }) })
      ]
    }
  );
});

// src/components/ui/breadcumb.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Breadcumb = (0, import_react3.forwardRef)(({ className, itemList, children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("breadcumb"), children: itemList.map((item, i) => {
    if (i >= 0 && i != itemList.length - 1) {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: cn("breadcumb-item"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: item.link, children: item.page }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8.99755 15.875L12.8775 11.995L8.99755 8.11499C8.60755 7.72499 8.60755 7.09499 8.99755 6.70499C9.38755 6.31499 10.0175 6.31499 10.4075 6.70499L14.9975 11.295C15.3875 11.685 15.3875 12.315 14.9975 12.705L10.4075 17.295C10.0175 17.685 9.38755 17.685 8.99755 17.295C8.61755 16.905 8.60755 16.265 8.99755 15.875Z", fill: "#58585B" }) })
      ] }, i);
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("breadcumb-item active"), children: item.page }, i);
    }
  }) });
});

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)("btn", {
  variants: {
    variant: {
      default: "btn--default",
      primary: "btn--primary",
      destructive: "btn--destructive",
      outline: "btn--outline",
      secondary: "btn--secondary",
      ghost: "btn--ghost",
      "ghost-fab": "btn--ghost-fab",
      link: "btn--link"
    },
    size: {
      md: "btn--md",
      sm: "btn--sm",
      lg: "btn--lg",
      xl: "btn--xl",
      icon: "btn--icon-md",
      "icon-sm": "btn--icon-sm",
      "icon-md": "btn--icon-md",
      "icon-lg": "btn--icon-lg",
      "icon-xl": "btn--icon-xl",
      fab: "btn--fab",
      undefined: ""
    },
    display: {
      inline: "",
      block: "btn--block"
    },
    fixedSize: {
      true: "btn--fixed",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    display: "inline",
    fixedSize: true
  }
});
var Button = (0, import_react4.forwardRef)(({
  children,
  isLoading = false,
  className,
  variant,
  size,
  display,
  fixedSize,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? import_react_slot.Slot : "button";
  const CompChild = ({ child }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.Loader2Icon, { className: cn(
        "icon animate-reverse-spin",
        `icon--${size}`
      ) }),
      child
    ] });
  };
  const asChildChildren = asChild ? import_react4.Children.map(children, (child) => (0, import_react4.isValidElement)(child) ? child.props.children : null) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Comp,
    {
      ref,
      className: cn(buttonVariants({
        variant,
        size,
        display,
        fixedSize,
        className
      })),
      ...props,
      children: asChild ? (0, import_react4.cloneElement)(children, {}, /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CompChild, { child: asChildChildren })) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CompChild, { child: children })
    }
  );
});
Button.displayName = "Button";

// src/components/ui/card.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var cardVariant = (0, import_class_variance_authority3.cva)(
  "card",
  {
    variants: {
      variant: {
        default: "card-default",
        feature: "card-feature"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Card = (0, import_react5.forwardRef)(({
  variant,
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    ref,
    className: cn(cardVariant({ variant }), className),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = (0, import_react5.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    ref,
    className: cn("card__header", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react5.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "h3",
  {
    ref,
    className: cn("card__title", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = (0, import_react5.forwardRef)(({
  highlight = false,
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "p",
  {
    ref,
    className: cn(
      "card__description",
      highlight && "card__description--highlight",
      className
    ),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = (0, import_react5.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ref, className: cn("card__content", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = (0, import_react5.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    ref,
    className: cn("card__footer", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/check.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Check = ({
  id,
  name,
  checked = false,
  onChange,
  disabled = false,
  className = ""
}) => {
  const handleCheckboxChange = (event) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn("relative flex gap-x-3", className), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex h-6 items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "input",
      {
        id,
        name,
        type: "checkbox",
        className: `peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-md border border-slate-300
                        ${checked ? "z-10" : "bg-white"} 
                        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-lime-60"}
                    `,
        checked,
        onChange: handleCheckboxChange,
        disabled
      }
    ),
    checked && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "svg",
      {
        className: "absolute bg-lime-50 rounded",
        width: "20",
        height: "20",
        viewBox: "-2 -2 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.0182 4.67708L16.9026 4.56401C16.2659 3.99867 15.327 4.03636 14.7306 4.67708L8.04186 11.8626L5.26938 8.88419C4.63568 8.20343 3.61546 8.20343 2.98176 8.88419C2.33941 9.57424 2.33941 10.6993 2.98176 11.3893L6.4629 15.129C7.33693 16.0679 8.74679 16.0679 9.62081 15.129L17.0182 7.18219C17.6204 6.53528 17.6581 5.50605 17.1312 4.81134L17.0182 4.67708Z",
            fill: "white"
          }
        )
      }
    )
  ] }) });
};
var CheckBox = ({
  id,
  name,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  subtitle,
  title,
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: cn(
        "checkbox",
        checked && !disabled ? "border-lime-50 bg-lime-10" : "border-black-20",
        className
      ),
      onClick: () => {
        if (onClick && !disabled) onClick(!checked);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Check,
          {
            id,
            name,
            checked: !disabled && checked,
            onChange: (checked2) => {
              if (onChange && !disabled) {
                onChange(checked2);
              }
            },
            disabled
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col gap-[2px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `checkbox-title ${disabled ? "text-black-60" : "text-black-80"}`, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `checkbox-subtitle ${disabled ? "text-black-50" : "text-black-60"}`, children: subtitle })
        ] })
      ]
    }
  );
};

// src/components/ui/date.tsx
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var DatePicker = (0, import_react7.forwardRef)(({ className, selectedDateString, setSelectedDateString, isActive, setActive, ...props }, ref) => {
  const [currentDate, setCurrentDate] = (0, import_react7.useState)(
    () => {
      if (selectedDateString) {
        const arrayDate = selectedDateString.split("/");
        return /* @__PURE__ */ new Date(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`);
      } else {
        return /* @__PURE__ */ new Date();
      }
    }
  );
  const [selectedDate, setSelectedDate] = (0, import_react7.useState)(
    () => {
      if (selectedDateString) {
        const arrayDate = selectedDateString.split("/");
        return /* @__PURE__ */ new Date(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`);
      } else {
        return /* @__PURE__ */ new Date();
      }
    }
  );
  const [isDateSelected, setIsDateSelected] = (0, import_react7.useState)(false);
  const [isYearOpen, setYearOpen] = (0, import_react7.useState)(false);
  const [isTransitionActive, setTransitionActive] = (0, import_react7.useState)(false);
  let indexFirstDate = 0;
  let indexLastDate = 1;
  let firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + indexFirstDate, 1);
  let lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + indexLastDate, 0);
  const dates = [];
  const years = [];
  const [topYears] = (0, import_react7.useState)(() => (/* @__PURE__ */ new Date()).getFullYear() + 3);
  for (let i = 0; i <= 128; i++) {
    years.push(topYears - i);
  }
  for (let i = 0; i < firstDate.getDay(); i++) {
    dates.push(0);
  }
  for (let i = 1; i <= lastDate.getDate(); i++) {
    dates.push(i);
  }
  for (let i = lastDate.getDay(); i < 6; i++) {
    dates.push(0);
  }
  function handleDecreament() {
    if (indexFirstDate == 0) indexFirstDate = 11;
    if (indexLastDate == 0) indexLastDate = 11;
    indexFirstDate--;
    indexLastDate--;
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  }
  function handleIncreament() {
    if (indexFirstDate == 11) indexFirstDate = -1;
    if (indexLastDate == 11) indexLastDate = 0;
    indexFirstDate++;
    indexLastDate++;
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  }
  const months = ["Januari", "Feburari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  function handleYearOpen() {
    setYearOpen(!isYearOpen);
  }
  function handleYearChange(yearChoice) {
    setCurrentDate(new Date(yearChoice, currentDate.getMonth(), currentDate.getDate()));
    handleYearOpen();
  }
  function isDateSameWithCurrent(date) {
    return date === currentDate.getDate() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
  }
  function handleChangeDate(dateChoice) {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dateChoice));
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dateChoice));
    setIsDateSelected(true);
    console.log(currentDate.getDate() + " " + currentDate.getDate());
  }
  (0, import_react7.useEffect)(() => {
    if (isDateSelected) {
      setSelectedDateString(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
      handleClose();
    }
  }, [selectedDate]);
  (0, import_react7.useEffect)(() => {
    if (isActive) {
      setTransitionActive(true);
      if (!window.matchMedia("(min-width: 640px)").matches) {
        preventBodyScroll();
      }
    } else {
      handleClose;
      if (!window.matchMedia("(min-width: 640px)").matches) {
        restoreBodyScroll();
      }
    }
    return () => {
      if (!window.matchMedia("(min-width: 640px)").matches) {
        restoreBodyScroll();
      }
    };
  }, [isActive]);
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
  function handleClose() {
    setTransitionActive(false);
    setTimeout(() => setActive(!isActive), 100);
  }
  if (isActive) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "div",
        {
          className: cn("overlay", isTransitionActive ? `overlay-enter` : `overlay-exit `, "sm:hidden fixed inset-0", className),
          onClick: handleClose,
          ref,
          role: "overlay",
          ...props
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("date", isTransitionActive ? "translate" : null, className), children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("header-date", className), children: [
          "Pilih Tanggal",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "svg",
            {
              onClick: handleClose,
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "path",
                {
                  id: "Combined Shape",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z",
                  fill: "#58585B"
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("month-picker", className), children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { onClick: handleDecreament, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M14.9975 8.12501L11.1175 12.005L14.9975 15.885C15.3875 16.275 15.3875 16.905 14.9975 17.295C14.6075 17.685 13.9775 17.685 13.5875 17.295L8.99754 12.705C8.60754 12.315 8.60754 11.685 8.99754 11.295L13.5875 6.70501C13.9775 6.31501 14.6075 6.31501 14.9975 6.70501C15.3775 7.09501 15.3875 7.73501 14.9975 8.12501Z", fill: "#58585B" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { onClick: handleYearOpen, className: cn("month-year", className), children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: months[currentDate.getMonth()] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: currentDate.getFullYear() }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: isYearOpen ? "rotate" : "", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M8.12253 9.2925L12.0025 13.1725L15.8825 9.2925C16.2725 8.9025 16.9025 8.9025 17.2925 9.2925C17.6825 9.6825 17.6825 10.3125 17.2925 10.7025L12.7025 15.2925C12.3125 15.6825 11.6825 15.6825 11.2925 15.2925L6.70253 10.7025C6.31253 10.3125 6.31253 9.6825 6.70253 9.2925C7.09253 8.9125 7.73253 8.9025 8.12253 9.2925Z", fill: "#58585B" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { onClick: handleIncreament, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M8.99755 15.875L12.8775 11.995L8.99755 8.11499C8.60755 7.72499 8.60755 7.09499 8.99755 6.70499C9.38755 6.31499 10.0175 6.31499 10.4075 6.70499L14.9975 11.295C15.3875 11.685 15.3875 12.315 14.9975 12.705L10.4075 17.295C10.0175 17.685 9.38755 17.685 8.99755 17.295C8.61755 16.905 8.60755 16.265 8.99755 15.875Z", fill: "#58585B" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("day-list", className), children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "days", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Min" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Sen" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Sel" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Rab" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Kam" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Jum" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Sab" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "date-picker", children: dates.map((key, date) => dates[date] === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: cn("nomor", className) }, date) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { onClick: () => handleChangeDate(dates[date]), className: cn("nomor", isDateSameWithCurrent(dates[date]) && "active"), children: dates[date] }, date)) })
        ] }),
        isYearOpen && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "year-picker scrollbar-hide", children: years.map((key, year) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { onClick: () => handleYearChange(years[year]), className: cn("year-cell", years[year] === currentDate.getFullYear() && "active"), children: years[year] }, year)) })
      ] })
    ] });
  }
});

// src/components/ui/dialog.tsx
var import_react8 = require("react");
var import_react_dom = require("react-dom");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Dialog = (0, import_react8.forwardRef)(({
  className,
  open = false,
  children,
  ...props
}, ref) => {
  const [isMounted, setIsMounted] = (0, import_react8.useState)(false);
  (0, import_react8.useEffect)(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  if (!open) return null;
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DialogOverlay, { open, className, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DialogContent, { open, ref, ...props, children }) }) }),
    document.body
  );
});
Dialog.displayName = "Dialog";
var DialogOverlay = (0, import_react8.forwardRef)(({
  className,
  children,
  open,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "div",
  {
    ref,
    className: cn(
      "bg-black-80/50 w-screen h-screen z-10 fixed inset-0",
      open ? "opacity-100" : "opacity-0",
      className
    ),
    ...props,
    children
  }
));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = (0, import_react8.forwardRef)(({
  className,
  children,
  open,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "div",
  {
    ref,
    className: cn(
      "fixed bottom-0 z-50 grid w-full bg-background shadow-lg duration-500 transition-transform ease-in-out transform overflow-y-auto",
      "sm:max-w-screen-sm sm:rounded-lg h-fit",
      // Styling untuk tablet ke atas
      open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[700px] md:translate-y-[-50px]",
      // Animasikan berdasarkan ukuran layar
      open ? "sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%]" : "ease-in-out bottom-0",
      className
    ),
    style: { maxHeight: open ? "60vh" : "0" },
    ...props,
    children
  }
));
DialogContent.displayName = "DialogContent";
var DialogClose = (0, import_react8.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { ref, className: cn("data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", className), ...props }));
DialogClose.displayName = "DialogClose";
var DialogHeader = ({
  className,
  onClose,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn("flex flex-row justify-between items-center sm:text-left p-4", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: props.children }),
  onClose && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(DialogClose, { onClick: onClose, className: "cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react2.X, { className: "h-4 w-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "sr-only", children: "Close" })
  ] })
] });
DialogHeader.displayName = "DialogHeader";
var DialogBody = (0, import_react8.forwardRef)(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { ref, className: cn("p-4", className), ...props, children }));
DialogBody.displayName = "DialogBody";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-4", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = (0, import_react8.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "h2",
  {
    ref,
    className: cn("text-lg font-regular leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = "DialogTitle";
var DialogDescription = (0, import_react8.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = "DialogDescription";

// src/components/ui/helper-text.tsx
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var ErrorText = (0, import_react9.forwardRef)(({ className, children, active, ...props }, ref) => {
  return active && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-omega text-destructive font-regular", children });
});
var HelperText = (0, import_react9.forwardRef)(({ className, children, active, ...props }, ref) => {
  return active && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-omega text-black-60 font-regular", children });
});

// src/components/ui/infotip.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var infotipVariants = (0, import_class_variance_authority4.cva)(
  "infotip",
  {
    variants: {
      variant: {
        default: "infotip--info",
        error: "infotip--error",
        success: "infotip--success",
        warning: "infotip--warning",
        info: "infotip--info"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Infotip = (0, import_react10.forwardRef)(({ className, variant, dismiss, children, ...props }, ref) => {
  const [isOpacityZero, setOpacityZero] = (0, import_react10.useState)(false);
  const [visible, setVisible] = (0, import_react10.useState)(true);
  if (!visible) return null;
  function handleClose() {
    setOpacityZero(!isOpacityZero);
    setTimeout(() => setVisible(false), 200);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      ref,
      role: "infotip",
      className: cn(infotipVariants({ variant }), isOpacityZero ? "opacity-0" : "opacity-100", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "inline-block items-center", children }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            onClick: handleClose,
            className: "text-gray-500 hover:text-gray-700 focus:outline-none",
            "aria-label": "Close",
            children: dismiss && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { fill: cn(infotipVariants({ variant })), className: "h-5 w-5", role: "button", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { id: "Combined Shape", fillRule: "evenodd", clipRule: "evenodd", d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z" }) }) })
          }
        )
      ]
    }
  );
});
Infotip.displayName = "infotip";
var InfoTipTitle = (0, import_react10.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h5", { ref, className: cn("infotip__title", className), ...props }));
InfoTipTitle.displayName = "InfoTipTitle";
var InfoTipDescription = (0, import_react10.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref, className: cn("infotip__description", className), ...props }));
InfoTipDescription.displayName = "InfoTipDescription";

// src/components/ui/input.tsx
var import_class_variance_authority5 = require("class-variance-authority");
var import_react11 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority5.cva)("input", {
  variants: {
    inputSize: {
      md: "input--md",
      sm: "input--sm",
      lg: "input--lg",
      xl: "input--xl"
    },
    variant: {
      "hover-focus": "input-hover-focus"
    }
  },
  defaultVariants: {
    inputSize: "lg"
  }
});
var Input = (0, import_react11.forwardRef)(({
  className,
  type,
  inputSize,
  variant,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { type, className: cn(inputVariants({ inputSize, variant, className })), ref, ...props });
});
Input.displayName = "Input";
var InputGroup = (0, import_react11.forwardRef)(({ className, children, title, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("input-group"), children });
});

// src/components/ui/label.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_react12 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority6.cva)("form__label");
var Label = (0, import_react12.forwardRef)(({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = "Label";

// src/components/ui/list.tsx
var import_class_variance_authority7 = require("class-variance-authority");
var import_react13 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var listVariants = (0, import_class_variance_authority7.cva)("list", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    variant: {
      unordered: "list-disc pl-5",
      ordered: "list-decimal pl-5"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "unordered"
  }
});
var List = (0, import_react13.forwardRef)(
  ({ className, size, variant = "unordered", ...props }, ref) => {
    const Component = variant === "ordered" ? "ol" : "ul";
    if (Component === "ol") {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ol", { ref, className: cn(listVariants({ size, variant }), className), ...props });
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { ref, className: cn(listVariants({ size, variant }), className), ...props });
    }
  }
);
List.displayName = "List";

// src/components/ui/modal.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_react14 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var modalHeaderVariant = (0, import_class_variance_authority8.cva)("", {
  variants: {
    dismiss: {
      true: "modal-dismiss",
      false: "modal-non-dismiss"
    }
  },
  defaultVariants: {
    dismiss: false
  }
});
var ModalContext = (0, import_react14.createContext)(void 0);
function getModalContext() {
  let context = (0, import_react14.useContext)(ModalContext);
  if (context === void 0) {
    throw Error("Modal undefined");
  }
  return context;
}
var Modal = (0, import_react14.forwardRef)(({ className, children, isOpen, setOpen, ...props }, ref) => {
  const [animationState, setAnimationState] = (0, import_react14.useState)(false);
  const [isModalOpen, setModalOpen] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    if (isOpen) {
      setModalOpen(true);
      setTimeout(() => setAnimationState(true), 200);
      preventBodyScroll();
    } else {
      setAnimationState(false);
      setTimeout(() => setModalOpen(false), 200);
    }
    return () => restoreBodyScroll();
  }, [isOpen]);
  function handleClose() {
    setAnimationState(false);
    setOpen(false);
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
  if (isModalOpen === false) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ModalContext.Provider, { value: { animationState, setAnimationState }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "fixed inset-0 flex items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        className: cn("overlay", animationState ? "opacity-50" : "opacity-0"),
        onClick: handleClose,
        ref,
        role: "modal",
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        ref,
        role: "modal",
        className: cn("modal", animationState ? "animation-enter" : "animation-exit", "sm:w-[360px]", className),
        ...props,
        children
      }
    )
  ] }) });
});
Modal.displayName = "modal";
var ModalHeader = (0, import_react14.forwardRef)(({ className, setOpen, dismiss, children, ...props }, ref) => {
  const { animationState, setAnimationState } = getModalContext();
  function handleClose() {
    setAnimationState(false);
    setOpen(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: cn("modal-header", import_react14.Children.count(children) == 0 && "border-b-0 pb-0"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h4", { className: cn("w-full"), ref, ...props, children }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "svg",
      {
        onClick: handleClose,
        className: cn(modalHeaderVariant({ dismiss })),
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "path",
          {
            id: "Combined Shape",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z",
            fill: "#58585B"
          }
        ) })
      }
    )
  ] });
});
ModalHeader.displayName = "ModalHeader";
var ModalBody = (0, import_react14.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: cn("modal-body"), ...props }));
ModalBody.displayName = "ModalBody";
var ModalFooter = (0, import_react14.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: cn("modal-footer"), ...props }));
ModalFooter.displayName = "ModalFooter";

// src/components/ui/progress-bar.tsx
var import_react15 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var ProgressBar = (0, import_react15.forwardRef)(({ className, children, value, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "progress-bar", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn("fill-bar", className), style: { width: `${value}%` } }) });
});

// src/components/ui/radio.tsx
var import_react16 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Radio = ({
  id,
  name,
  checked = false,
  onChange,
  disabled = false,
  className = ""
}) => {
  const handleRadioboxChange = (event) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: cn("relative flex gap-x-3", className), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex h-6 items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "input",
      {
        id,
        name,
        type: "radio",
        className: `peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full border border-slate-300
                        ${checked ? "z-10 border-lime-50" : "bg-white"} 
                        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-lime-50"}
                    `,
        checked,
        onChange: handleRadioboxChange,
        disabled
      }
    ),
    checked && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { className: "absolute rounded-full", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM12 17C14.7614 17 17 14.7615 17 12C17 9.23853 14.7614 7 12 7C9.23859 7 7 9.23853 7 12C7 14.7615 9.23859 17 12 17Z", fill: "#009E3D" }) })
  ] }) });
};
var RadioBox = ({
  id,
  name,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  subtitle,
  title,
  onClick
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      className: cn(
        "checkbox",
        checked && !disabled ? "border-lime-50 bg-lime-10" : "border-black-20",
        className
      ),
      onClick: handleClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          Radio,
          {
            id,
            name,
            checked,
            onChange: (newChecked) => {
              if (onChange && !disabled) {
                onChange(newChecked);
              }
            },
            disabled
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col gap-[2px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: `checkbox-title ${disabled ? "text-black-60" : "text-black-80"}`, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: `checkbox-subtitle ${disabled ? "text-black-50" : "text-black-60"}`, children: subtitle })
        ] })
      ]
    }
  );
};

// src/components/ui/tabs.tsx
var import_react17 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var TabGroup = (0, import_react17.forwardRef)(
  ({ className, children, activeTabIndex, setActiveTabIndex, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: cn("tab-group", className), ...props, ref, children: import_react17.Children.map(children, (child, index) => {
      if ((0, import_react17.isValidElement)(child)) {
        return (0, import_react17.cloneElement)(child, {
          isActive: activeTabIndex === index,
          // Aktif jika indeksnya sama dengan activeTabIndex
          setActive: () => setActiveTabIndex(index)
          // Set tab aktif ke indeks saat ini
        });
      }
      return child;
    }) });
  }
);
var TabItem = (0, import_react17.forwardRef)(
  ({ className, children, isActive, setActive, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        className: cn("tab-item", isActive ? "active" : "", className),
        onClick: setActive,
        ...props,
        ref,
        children
      }
    );
  }
);

// src/components/ui/table.tsx
var import_react19 = __toESM(require("react"));
var import_react_data_table_component = __toESM(require("react-data-table-component"));

// src/components/custom/input/search.tsx
var import_react18 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var InputSearch = (0, import_react18.forwardRef)(
  ({ className, setEnteredText, placeholder, shadow, value, children, ...props }, ref) => {
    function handleClearText() {
      setEnteredText("");
    }
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: cn("input", "input-search", shadow ? "shadow" : null, className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.3645 14.608H16.1986L20.6753 19.1033C21.1082 19.5359 21.1082 20.2429 20.6753 20.6755C20.2424 21.1082 19.535 21.1082 19.1021 20.6755L14.6148 16.1909V15.3572L14.3298 15.0618C12.8516 16.328 10.835 16.9823 8.69161 16.6235C5.75639 16.1275 3.41244 13.6794 3.05345 10.7248C2.50442 6.26128 6.26319 2.50471 10.7294 3.05342C13.6857 3.41219 16.1352 5.75477 16.6315 8.68827C16.9905 10.8304 16.3359 12.8458 15.0688 14.3231L15.3645 14.608ZM5.11233 9.85956C5.11233 12.487 7.23456 14.608 9.86359 14.608C12.4926 14.608 14.6148 12.487 14.6148 9.85956C14.6148 7.23207 12.4926 5.11109 9.86359 5.11109C7.23456 5.11109 5.11233 7.23207 5.11233 9.85956Z", fill: "#58585B" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { ...props, ref, role: "input", placeholder, value, onChange: (e) => setEnteredText(e.target.value) }),
      value && !props.readOnly && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { onClick: handleClearText, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z", fill: "#58585B" }) })
    ] });
  }
);

// src/components/ui/table.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var CustomPagination = ({ rowsPerPage, rowCount, onChangePage, currentPage, onChangeRowsPerPage }) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const [selectedPage, setSelectedPage] = (0, import_react19.useState)(currentPage);
  const pageItems = (0, import_react19.useMemo)(() => {
    return Array.from({ length: totalPages }, (_, index) => ({
      value: index + 1,
      text: `${index + 1}`
    }));
  }, [totalPages]);
  const handlePageChange = (event) => {
    const page = Number(event.target.value);
    setSelectedPage(page);
    onChangePage(page, rowCount);
  };
  var i = 5;
  const [rowsPerPages, setRowsPerPage] = (0, import_react19.useState)(10);
  const handleRowsPerPageChange = (event) => {
    onChangeRowsPerPage(Number(event.target.value), currentPage);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "custom-pagination", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "rows-per-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { htmlFor: "rows-per-page", className: "mr-2", children: "Lihat" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
        "select",
        {
          id: "rows-per-page",
          value: rowsPerPage,
          onChange: handleRowsPerPageChange,
          className: "border border-gray-300 rounded px-2 py-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 5, children: "5" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 10, children: "10" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 15, children: "15" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 20, children: "20" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { htmlFor: "rows-per-page", className: " ml-2", children: "baris" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-black-50", children: "Menampilkan " + (rowsPerPage * currentPage - (rowsPerPage - 1) + "-" + rowsPerPage * currentPage + " dari " + rowCount + " baris") }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "table-nav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "page-select-nav", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "select",
          {
            id: "page-select-nav",
            value: currentPage,
            onChange: handlePageChange,
            className: "border border-gray-300 rounded px-2 py-1",
            children: pageItems.map((page) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: page.value, children: page.text }, page.value))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { htmlFor: "page-select", className: "font-medium", children: [
          "dari ",
          totalPages,
          " halaman"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "next-prev-nav", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => onChangePage(1, rowCount),
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "path",
              {
                d: "M13.7412 12L17.7065 7.92C17.8997 7.70674 18.0048 7.42467 17.9998 7.13322C17.9948 6.84176 17.8801 6.56369 17.6798 6.35757C17.4794 6.15145 17.2092 6.03338 16.9259 6.02824C16.6426 6.0231 16.3685 6.13128 16.1612 6.33L11.4232 11.205C11.2185 11.4159 11.1034 11.7019 11.1034 12C11.1034 12.2981 11.2185 12.5841 11.4232 12.795L16.1612 17.67C16.3685 17.8687 16.6426 17.9769 16.9259 17.9718C17.2092 17.9666 17.4794 17.8486 17.6798 17.6424C17.8801 17.4363 17.9948 17.1582 17.9998 16.8668C18.0048 16.5753 17.8997 16.2933 17.7065 16.08L13.7412 12ZM8.18678 7.125C8.18678 6.82663 8.07158 6.54048 7.86653 6.3295C7.66148 6.11853 7.38337 6 7.09339 6C6.8034 6 6.5253 6.11853 6.32025 6.3295C6.1152 6.54048 6 6.82663 6 7.125V16.875C6 17.1734 6.1152 17.4595 6.32025 17.6705C6.5253 17.8815 6.8034 18 7.09339 18C7.38337 18 7.66148 17.8815 7.86653 17.6705C8.07158 17.4595 8.18678 17.1734 8.18678 16.875V7.125Z",
                fill: "#58585B"
              }
            ) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => onChangePage(
              Math.max(currentPage - 1, 1),
              rowCount
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "svg",
              {
                className: "rotate-90",
                xmlns: "http://www.w3.org/2000/svg",
                width: "30",
                height: "30",
                viewBox: "0 0 30 30",
                fill: "none",
                children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  "path",
                  {
                    d: "M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z",
                    fill: "#58585B"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "current-page", children: currentPage }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => onChangePage(Math.min(
              currentPage + 1,
              totalPages
            ), rowCount),
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "svg",
              {
                className: "-rotate-90",
                xmlns: "http://www.w3.org/2000/svg",
                width: "30",
                height: "30",
                viewBox: "0 0 30 30",
                fill: "none",
                children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  "path",
                  {
                    d: "M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z",
                    fill: "#58585B"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => onChangePage(totalPages, rowCount),
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "path",
              {
                d: "M7.86682 9.9C7.6254 9.63342 7.49397 9.28083 7.50021 8.91652C7.50646 8.55221 7.6499 8.20461 7.90031 7.94696C8.15072 7.68931 8.48855 7.54172 8.84263 7.5353C9.1967 7.52887 9.53938 7.6641 9.79847 7.9125L15.721 14.0062C15.9769 14.2699 16.1207 14.6273 16.1207 15C16.1207 15.3727 15.9769 15.7301 15.721 15.9938L9.79847 22.0875C9.53938 22.3359 9.1967 22.4711 8.84263 22.4647C8.48855 22.4583 8.15072 22.3107 7.90031 22.053C7.6499 21.7954 7.50646 21.4478 7.50021 21.0835C7.49397 20.7192 7.6254 20.3666 7.86682 20.1L12.8235 15L7.86682 9.9ZM21.1333 22.5C21.4957 22.5 21.8434 22.3518 22.0997 22.0881C22.356 21.8244 22.5 21.4667 22.5 21.0938V8.90625C22.5 8.53329 22.356 8.1756 22.0997 7.91188C21.8434 7.64816 21.4957 7.5 21.1333 7.5C20.7708 7.5 20.4231 7.64816 20.1668 7.91188C19.9105 8.1756 19.7665 8.53329 19.7665 8.90625V21.0938C19.7665 21.87 20.3788 22.5 21.1333 22.5Z",
                fill: "#58585B"
              }
            ) })
          }
        )
      ] })
    ] })
  ] });
};
var Table = ({
  cardResponsive,
  ...props
}) => {
  const [filterText, setFilterText] = import_react19.default.useState("");
  const filteredItems = props.data.filter(
    (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const [rowperpage, setRowperpage] = (0, import_react19.useState)(10);
  const [showExtraColumn, setShowExtraColumn] = (0, import_react19.useState)(
    typeof window !== "undefined" && window.innerWidth <= 640
  );
  const handleResize = () => {
    if (typeof window !== "undefined") {
      setShowExtraColumn(window.innerWidth <= 640);
    }
  };
  (0, import_react19.useEffect)(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const modifiedColumns = props.columns.map((column) => ({
    ...column,
    cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      showExtraColumn && column.name !== "Action" && column.name !== "Aksi" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: column.name }),
      column.selector && typeof column.selector === "function" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { "data-tag": "allowRowEvents", children: column.selector(row) })
    ] })
  }));
  (0, import_react19.useEffect)(() => {
  }, [rowperpage]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "table-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "table-search", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      InputSearch,
      {
        placeholder: "Cari nama",
        setEnteredText: setFilterText,
        value: filterText
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      import_react_data_table_component.default,
      {
        ...props,
        columns: cardResponsive ? modifiedColumns : props.columns,
        paginationComponent: CustomPagination,
        paginationPerPage: rowperpage,
        data: filteredItems,
        persistTableHead: true,
        className: cardResponsive ? "table-card-responsive" : "",
        noDataComponent: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "p-6", children: "Data tidak ditemukan" })
      }
    )
  ] });
};

// src/components/ui/timepicker.tsx
var import_react20 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var TimePicker = (0, import_react20.forwardRef)(({ className, ...props }, ref) => {
  const initialHours = [...Array.from({ length: 24 }, (_, i) => i)];
  const [hourList, setHourList] = (0, import_react20.useState)([...initialHours, ...initialHours, ...initialHours]);
  const minutes = [58, 59, ...Array.from({ length: 60 }, (_, i) => i), 0, 1];
  const currentHour = (/* @__PURE__ */ new Date()).getHours();
  const currentMinute = (/* @__PURE__ */ new Date()).getMinutes();
  const [choosenHour, setChoosenHour] = (0, import_react20.useState)(currentHour);
  const [choosenMinute, setChoosenMinute] = (0, import_react20.useState)(currentMinute);
  const hourRef = (0, import_react20.useRef)(null);
  const minuteRef = (0, import_react20.useRef)(null);
  const itemHeight = 40;
  const [isInputHourActive, setInputHourActive] = (0, import_react20.useState)(false);
  const [inputHourValue, setInputHourValue] = (0, import_react20.useState)(choosenHour);
  const inputHourRef = (0, import_react20.useRef)(null);
  let timer;
  (0, import_react20.useEffect)(() => {
    if (hourRef.current) {
      hourRef.current.scrollTop = (currentHour + initialHours.length) * itemHeight;
      console.log("currentt: " + currentHour);
    }
  }, [currentHour]);
  (0, import_react20.useEffect)(() => {
    if (minuteRef.current) {
      minuteRef.current.scrollTop = currentMinute * itemHeight;
    }
  }, [currentMinute]);
  const getCenterElement = (container, items) => {
    if (container) {
      const { scrollTop, clientHeight } = container;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.floor(middle / itemHeight) % items.length;
      const value = items[index];
      return value;
    }
    return null;
  };
  const handleHourScroll = () => {
    const container = hourRef.current;
    const hour = getCenterElement(container, hourList);
    if (container && hour !== null && hour !== choosenHour) {
      setChoosenHour(hour);
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.clientHeight;
      if (scrollTop < containerHeight) {
        container.scrollTop = scrollTop + initialHours.length * itemHeight;
      } else if (scrollTop + containerHeight >= scrollHeight - containerHeight) {
        container.scrollTop = scrollTop - initialHours.length * itemHeight;
      }
    }
  };
  const handleMinuteScroll = () => {
    const minute = getCenterElement(minuteRef.current, minutes);
    if (minute !== null && minute !== choosenMinute) {
      setChoosenMinute(minute);
    }
  };
  function handleGetTime() {
    const hour = getCenterElement(hourRef.current, hourList);
    const minute = getCenterElement(minuteRef.current, minutes);
    if (hour !== null && minute !== null) {
      alert(`Selected time: ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
    }
  }
  (0, import_react20.useEffect)(() => {
    if (isInputHourActive) {
      setInputHourValue(choosenHour);
    }
  }, [isInputHourActive]);
  function handleInputChange(value) {
    const validValue = value.substring(0, 2);
    if (value === "") {
      setInputHourValue(0);
    } else {
      setInputHourValue(parseInt(validValue));
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (parseInt(validValue) > 23) {
        setInputHourActive(false);
        return;
      } else if (validValue === "") {
        setChoosenHour(0);
      } else {
        setChoosenHour(parseInt(validValue));
      }
      if (hourRef.current && parseInt(validValue) <= 23) {
        hourRef.current.scrollTop = (parseInt(validValue) + initialHours.length) * itemHeight;
      }
      setInputHourActive(false);
    }, 3e3);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-row items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        ref: hourRef,
        onScroll: handleHourScroll,
        className: `hours-list flex flex-col h-48 snap-y snap-mandatory ${isInputHourActive ? "overflow-hidden " : "overflow-y-scroll scroll-smooth"}`,
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: hourList.map((item, key) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "div",
          {
            className: cn("flex items-center py-2 w-16 justify-center text-center", choosenHour === item ? "font-bold" : "font-regular", isInputHourActive && "px-2", className),
            style: {
              scrollSnapAlign: "center",
              height: `${itemHeight}px`
            },
            onClick: () => {
              setInputHourActive(true);
            },
            children: isInputHourActive && choosenHour === item ? isInputHourActive ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Input, { autoFocus: true, ref: inputHourRef, className: `text-center ${isInputHourActive && "border-lime-50"}`, inputSize: "sm", value: inputHourValue.toString(), onChange: (e) => handleInputChange(e.target.value) }) : item.toString().padStart(2, "0") : item.toString().padStart(2, "0")
          },
          key
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "h-10 flex items-center", children: ":" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        ref: minuteRef,
        onScroll: handleMinuteScroll,
        className: "minutes-list flex flex-col h-48 overflow-y-scroll scroll-smooth",
        style: {
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: minutes.map((item, key) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "div",
          {
            className: `flex pt-2 w-16 justify-center text-center items-center ${59 === item || item === 0 ? 59 === item ? "pb-[3px]" : "pt-[6px]" : "pb-2"}`,
            style: {
              scrollSnapAlign: "center",
              height: `${itemHeight}px`
            },
            children: item.toString().padStart(2, "0")
          },
          key
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { onClick: handleGetTime, children: "Get Time" })
  ] });
});

// src/components/ui/timpicker-try.tsx
var import_react21 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var TimePickerTry = (0, import_react21.forwardRef)(({ className, isOpen, onClose, ...props }, ref) => {
  const currentHour = (/* @__PURE__ */ new Date()).getHours();
  const currentMinute = (/* @__PURE__ */ new Date()).getMinutes();
  const itemHeight = 44;
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const [scrollHourIndex, setScrollHourIndex] = (0, import_react21.useState)(currentHour);
  const [scrollMinuteIndex, setScrollMinuteIndex] = (0, import_react21.useState)(currentMinute);
  const hourContainerRef = (0, import_react21.useRef)(null);
  const minuteContainerRef = (0, import_react21.useRef)(null);
  const [inputHourValue, setInputHourValue] = (0, import_react21.useState)(scrollHourIndex.toString());
  const [inputMinuteValue, setInputMinuteValue] = (0, import_react21.useState)(scrollMinuteIndex.toString());
  const [isInputHourActive, setInputHourActive] = (0, import_react21.useState)(false);
  const [isInputMinuteActive, setInputMinuteActive] = (0, import_react21.useState)(false);
  const inputHourRef = (0, import_react21.useRef)(null);
  function handleGetTime() {
    const hour = getCenterElement(hourContainerRef.current, hours);
    const minute = getCenterElement(minuteContainerRef.current, minutes);
    if (hour !== null && minute !== null) {
      alert(`Selected time: ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
    }
  }
  const [hasInitialized, setHasInitialized] = (0, import_react21.useState)(false);
  (0, import_react21.useEffect)(() => {
    if (isOpen) {
      if (hourContainerRef.current) {
        hourContainerRef.current.scrollTop = (currentHour + hours.length - 2) * itemHeight;
      }
      if (minuteContainerRef.current) {
        minuteContainerRef.current.scrollTop = (currentMinute + minutes.length - 2) * itemHeight;
      }
      setHasInitialized(true);
    } else {
      setHasInitialized(false);
    }
  }, [isOpen, hasInitialized]);
  const getCenterElement = (container, items) => {
    if (container) {
      const { scrollTop, clientHeight } = container;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.floor(middle / itemHeight) % items.length;
      return items[index];
    }
    return null;
  };
  const handleHourScroll = () => {
    const container = hourContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.clientHeight;
      if (scrollTop === 0) {
        container.scrollTop = scrollHeight / 2 - 40 * 13;
      } else if (scrollTop + containerHeight >= scrollHeight) {
        if (scrollHourIndex === 22) {
          container.scrollTop = scrollHeight / 2 + 40 * 35;
        } else if (scrollHourIndex === 23) {
          container.scrollTop = scrollHeight / 2 + 40 * 36;
        } else {
          container.scrollTop = scrollHeight / 2 + 40 * 8;
        }
      }
      const hour = getCenterElement(container, hours);
      if (hour != null) {
        setScrollHourIndex(hour);
        setInputHourValue(hour.toString());
      }
    }
  };
  const handleMinuteScroll = () => {
    const container = minuteContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.clientHeight;
      if (scrollTop === 0) {
        container.scrollTop = scrollHeight / 2 - 40 * 33;
      } else if (scrollTop + containerHeight >= scrollHeight) {
        if (scrollMinuteIndex === 58) {
          container.scrollTop = scrollHeight / 2 + 40 * 28.6;
        } else if (scrollMinuteIndex === 59) {
          container.scrollTop = scrollHeight / 2 + 40 * 29.7;
        } else {
          container.scrollTop = scrollHeight / 2 + 40 * 29;
        }
      }
      const minute = getCenterElement(container, minutes);
      if (minute != null) {
        setScrollMinuteIndex(minute);
        setInputMinuteValue(minute.toString());
      }
    }
  };
  let timerHour;
  let timerMinute;
  const [isInputHourChanged, setInputHourChanged] = (0, import_react21.useState)(false);
  const [isInputMinuteChanged, setInputMinuteChanged] = (0, import_react21.useState)(false);
  const [isInputHourChangedEnter, setInputHourChangedEnter] = (0, import_react21.useState)(false);
  const [isInputMinuteChangedEnter, setInputMinuteChangedEnter] = (0, import_react21.useState)(false);
  const handleHourInput = (value) => {
    const inputValue = value.replace(/[^0-9]/g, "").slice(0, 2);
    console.log("inputvalue: " + inputValue);
    setInputHourValue(inputValue);
    if (isInputHourChangedEnter) {
      return;
    }
    clearTimeout(timerHour);
    timerHour = setTimeout(() => {
      setInputHourChanged(true);
    }, 2e3);
  };
  (0, import_react21.useEffect)(() => {
    if (isInputHourChanged) {
      const parsedValue = parseInt(inputHourValue);
      if (parsedValue >= 0 && parsedValue <= 23) {
        setScrollHourIndex(parsedValue);
        if (hourContainerRef.current) {
          hourContainerRef.current.scrollTop = (parsedValue + hours.length - 2) * itemHeight;
        }
        console.log("valid format: " + parsedValue);
      }
      setInputHourActive(false);
      setInputHourChanged(false);
      setInputHourChangedEnter(false);
    }
  }, [isInputHourChanged]);
  function handleHourInputEnter(e) {
    if (e.key === "Enter") {
      setInputHourChangedEnter(true);
      console.log(inputHourValue);
      setInputHourChanged(true);
    }
  }
  function handleMinuteInput(value) {
    const inputValue = value.replace(/[^0-9]/g, "").slice(0, 2);
    console.log("inputvalue: " + inputValue);
    setInputMinuteValue(inputValue);
    if (isInputMinuteChangedEnter) {
      return;
    }
    clearTimeout(timerMinute);
    timerMinute = setTimeout(() => {
      setInputMinuteChanged(true);
    }, 2e3);
  }
  function handleMinuteInputEnter(e) {
    if (e.key === "Enter") {
      setInputMinuteChangedEnter(true);
      console.log(inputMinuteValue);
      setInputMinuteChanged(true);
    }
  }
  (0, import_react21.useEffect)(() => {
    if (isInputMinuteChanged) {
      const parsedValue = parseInt(inputMinuteValue);
      if (parsedValue >= 0 && parsedValue <= 59) {
        setScrollMinuteIndex(parsedValue);
        if (minuteContainerRef.current) {
          minuteContainerRef.current.scrollTop = (parsedValue + minutes.length - 2) * itemHeight;
        }
        console.log("valid format: " + parsedValue);
      }
      setInputMinuteActive(false);
      setInputMinuteChanged(false);
      setInputMinuteChangedEnter(false);
    }
  }, [isInputMinuteChanged]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Modal, { className: "w-full sm:w-[360px]", isOpen, setOpen: onClose, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ModalHeader, { setOpen: onClose, dismiss: true, children: "Pilih Waktu" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ModalBody, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-row items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "div",
        {
          ref: hourContainerRef,
          onScroll: handleHourScroll,
          style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          className: `h-[220px] w-[75px] snap-y snap-mandatory overflow-y-scroll`,
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: Array.from({ length: 7 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex flex-col", children: hours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "div",
            {
              style: {
                height: `${itemHeight}px`
              },
              className: `flex items-center justify-center snap-center text-black-80 transition-all duration-200 ease-in-out 
                            ${scrollHourIndex === hour ? "text-zeta font-bold px-3" : "text-omicron px-0"} 
                            ${(scrollHourIndex - 1 === hour || scrollHourIndex + 1 === hour || scrollHourIndex === 0 && (hour === 23 || hour === 1) || scrollHourIndex === 23 && hour === 0) && "opacity-50"} 
                            ${(scrollHourIndex - 2 >= hour || scrollHourIndex + 2 <= hour) && "opacity-15"} 
                            
                            `,
              onClick: () => scrollHourIndex === hour && setInputHourActive(true),
              children: isInputHourActive && scrollHourIndex === hour ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                Input,
                {
                  maxLength: 2,
                  autoFocus: true,
                  className: `text-center ${isInputHourActive && "border-lime-50"}`,
                  inputSize: "sm",
                  value: inputHourValue,
                  onChange: (e) => handleHourInput(e.target.value),
                  ref: inputHourRef,
                  onKeyDown: (e) => handleHourInputEnter(e)
                }
              ) : hour.toString().padStart(2, "0")
            },
            `${i}-${hour}`
          )) }, i)) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "font-bold text-lambda flex", children: ":" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "div",
        {
          ref: minuteContainerRef,
          onScroll: handleMinuteScroll,
          style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          className: `h-[220px] w-[75px] snap-y snap-mandatory overflow-y-scroll`,
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: Array.from({ length: 7 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { style: { display: "flex", flexDirection: "column" }, children: minutes.map((minute) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "div",
            {
              style: {
                height: `${itemHeight}px`
              },
              className: `flex items-center justify-center snap-center text-black-80 transition-all duration-200 ease-in-out 
                            ${scrollMinuteIndex === minute ? "text-zeta font-bold" : "text-omicron"} 
                            ${(scrollMinuteIndex - 1 === minute || scrollMinuteIndex + 1 === minute || scrollMinuteIndex === 0 && (minute === 59 || minute === 1) || scrollMinuteIndex === 59 && minute === 0) && "opacity-50"} 
                            ${(scrollMinuteIndex - 2 >= minute || scrollMinuteIndex + 2 <= minute) && "opacity-15"}`,
              onClick: () => scrollMinuteIndex === minute && setInputMinuteActive(true),
              children: isInputMinuteActive && scrollMinuteIndex === minute ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                Input,
                {
                  maxLength: 2,
                  autoFocus: true,
                  className: `text-center ${isInputMinuteActive && "border-lime-50"}`,
                  inputSize: "sm",
                  value: inputMinuteValue,
                  onChange: (e) => handleMinuteInput(e.target.value),
                  onKeyDown: (e) => handleMinuteInputEnter(e)
                }
              ) : minute.toString().padStart(2, "0")
            },
            `${i}-${minute}`
          )) }, i)) })
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ModalFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button, { onClick: handleGetTime, variant: "primary", size: "md", children: "Tetapkan" }) })
  ] }) });
});

// src/components/ui/toast.tsx
var import_react22 = require("react");
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime22 = require("react/jsx-runtime");
var toastVariants = (0, import_class_variance_authority9.cva)(
  "toast",
  {
    variants: {
      variant: {
        default: "toast--info",
        error: "toast--error",
        success: "toast--success",
        warning: "toast--warning",
        info: "toast--info"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = (0, import_react22.forwardRef)(({ className, variant, isToastOpen, setToastOpen, children, ...props }, ref) => {
  const [animationState, setAnimationState] = (0, import_react22.useState)(null);
  ;
  const [isOpacityZero, setOpacityZero] = (0, import_react22.useState)(true);
  ;
  (0, import_react22.useEffect)(() => {
    setOpacityZero(!isOpacityZero);
    setAnimationState("animation-enter");
    console.log(isToastOpen);
  }, [isToastOpen]);
  function handleClose() {
    setOpacityZero(!isOpacityZero);
    setAnimationState(null);
    setTimeout(() => setToastOpen(), 300);
    console.log(isToastOpen);
  }
  if (!isToastOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    "div",
    {
      "data-toast": true,
      ref,
      role: "toast",
      className: cn(
        toastVariants({ variant }),
        className,
        animationState
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "inline-block items-center", children }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "button",
          {
            onClick: handleClose,
            "aria-label": "Close",
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                fill: cn(toastVariants({ variant })),
                className: "h-5 w-5",
                role: "button",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                  "path",
                  {
                    id: "Combined Shape",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                  }
                ) })
              }
            )
          }
        )
      ]
    }
  ) });
});
var ToastTitle = (0, import_react22.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h5", { "data-title": true, ref, className: cn("__title", className), ...props }));
ToastTitle.displayName = "toastTitle";
var ToastDescription = (0, import_react22.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { "data-description": true, ref, className: cn("__description", className), ...props }));
ToastDescription.displayName = "toastDescription";

// src/components/custom/input/dropdown.tsx
var import_react24 = require("react");

// src/components/custom/input/short.tsx
var import_react23 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var InputShortText = (0, import_react23.forwardRef)(
  ({ className, setEnteredText, placeholder, type, iconLeft, value, iconright, children, ...props }, ref) => {
    const [isPasswordHidden, setPasswordHidden] = (0, import_react23.useState)(true);
    const icons = [];
    if (props.readOnly) {
      setEnteredText = () => {
      };
    }
    function handleClearText() {
      setEnteredText("");
      console.log(value);
    }
    if (iconLeft && iconright && import_react23.Children.toArray(children).length === 1) {
      icons.push(
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: import_react23.Children.toArray(children)[0] }, 0)
      );
      icons.push(
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: import_react23.Children.toArray(children)[0] }, 1)
      );
    } else {
      import_react23.Children.toArray(children).map((i, key) => {
        icons.push(
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: i }, key)
        );
      });
    }
    console.log(value);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: cn("input"), children: [
      type == "number" && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: cn("unit-input", !props.disabled && "active"), children: "Rupiah" }),
      icons && iconLeft && icons[0],
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("input", { ...props, ref, role: "input", type: type === "password" ? isPasswordHidden ? "password" : "text" : type, placeholder, value, onChange: (e) => setEnteredText(e.target.value) }),
      value && !props.readOnly && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("svg", { onClick: handleClearText, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z", fill: "#58585B" }) }),
      type === "password" && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("svg", { onClick: () => props.disabled ? null : setPasswordHidden(!isPasswordHidden), xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: isPasswordHidden ? "M11.9953 5C7.73495 5 3.91914 7.64806 2.05973 11.7257C1.98009 11.9004 1.98009 12.0996 2.05973 12.2743C3.91914 16.3519 7.73495 19 11.9953 19C16.2528 19 20.0676 16.3544 21.9396 12.2757C22.0201 12.1002 22.0201 11.8998 21.9396 11.7243C20.0676 7.64563 16.2528 5 11.9953 5ZM12.264 6.35895C15.6588 6.46287 18.7266 8.53073 20.4108 11.7569L20.533 12L20.4108 12.2431C18.6823 15.5542 15.4964 17.6452 11.9953 17.6452L11.7265 17.641C8.32971 17.5371 5.26229 15.4681 3.58821 12.2443L3.46512 12L3.58821 11.7557C5.30634 8.44708 8.49212 6.35484 11.9953 6.35484L12.264 6.35895ZM12 7.70968C9.5598 7.70968 7.5814 9.63065 7.5814 12C7.5814 14.3694 9.5598 16.2903 12 16.2903C14.4402 16.2903 16.4186 14.3694 16.4186 12C16.4186 9.63065 14.4402 7.70968 12 7.70968ZM12 9.06452C13.6696 9.06452 15.0233 10.3789 15.0233 12C15.0233 13.6211 13.6696 14.9355 12 14.9355C10.3304 14.9355 8.97674 13.6211 8.97674 12C8.97674 10.3789 10.3304 9.06452 12 9.06452Z" : "M20.8654 3.20277C20.593 2.93241 20.1512 2.93241 19.8788 3.20277L3.13458 19.8182L3.06702 19.8958C2.86437 20.1668 2.88689 20.5514 3.13458 20.7972C3.40704 21.0676 3.84878 21.0676 4.12124 20.7972L7.07212 17.869C8.58719 18.7087 10.263 19.1538 11.9953 19.1538C16.2528 19.1538 20.0676 16.4501 21.9396 12.2818C22.0201 12.1024 22.0201 11.8976 21.9396 11.7182C21.0645 9.76959 19.7438 8.1074 18.1207 6.90541L20.8654 4.18184L20.933 4.1042C21.1356 3.83317 21.1131 3.44856 20.8654 3.20277ZM17.1217 7.89674L15.5787 9.42785C16.1196 10.1675 16.4186 11.0615 16.4186 12C16.4186 14.4214 14.4402 16.3846 12 16.3846C11.0542 16.3846 10.1533 16.088 9.40792 15.5512L8.10394 16.8452C9.3187 17.4512 10.637 17.7692 11.9953 17.7692C15.4964 17.7692 18.6823 15.6323 20.4108 12.2485L20.533 12.0009L20.5097 11.95C19.7092 10.3077 18.5517 8.91886 17.1572 7.92117L17.1217 7.89674ZM10.4129 14.554C10.8834 14.8428 11.4289 15 12 15C13.6696 15 15.0233 13.6567 15.0233 12C15.0233 11.4333 14.8648 10.892 14.5738 10.4251L10.4129 14.554ZM14.5249 5.1703C13.7017 4.95561 12.8546 4.84615 11.9953 4.84615C7.73495 4.84615 3.91914 7.55241 2.05973 11.7197C1.98009 11.8982 1.98009 12.1018 2.05973 12.2803C2.64274 13.5869 3.42961 14.77 4.38095 15.7732C4.645 16.0517 5.08654 16.065 5.36715 15.803C5.64777 15.541 5.6612 15.1028 5.39715 14.8244L5.12168 14.5222C4.4915 13.8035 3.95033 12.9895 3.51544 12.1037L3.46605 11.9982L3.58821 11.7504C5.30634 8.369 8.49212 6.23077 11.9953 6.23077C12.7344 6.23077 13.4624 6.32482 14.1703 6.50943C14.5429 6.60662 14.9244 6.38564 15.0224 6.01585C15.1203 5.64605 14.8976 5.26749 14.5249 5.1703ZM12.6977 8.30769C12.6977 7.92534 12.3853 7.61538 12 7.61538C9.5598 7.61538 7.5814 9.57857 7.5814 12C7.5814 12.3824 7.89375 12.6923 8.27907 12.6923C8.66438 12.6923 8.97674 12.3824 8.97674 12C8.97674 10.3433 10.3304 9 12 9C12.3853 9 12.6977 8.69004 12.6977 8.30769Z", fill: "#58585B" }) }),
      (icons[0] || icons[1]) && iconright && (icons[1] ? icons[1] : icons[0])
    ] });
  }
);

// src/components/custom/input/dropdown.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var Dropdown = ({
  disabled = false,
  loading = false,
  error = "",
  label = "",
  items = [],
  itemValue = "value",
  itemText = "text",
  modelValue = "",
  placeholder = "",
  className = "",
  errorFetch = "",
  executeFetch,
  onChange,
  onBlur
}) => {
  const [search, setSearch] = (0, import_react24.useState)("");
  const [shown, setShown] = (0, import_react24.useState)(false);
  const [shownOffcanvas, setShownOffcanvas] = (0, import_react24.useState)(false);
  const filteredItems = (0, import_react24.useMemo)(() => {
    return search ? items.filter(
      (i) => i[itemText].toLowerCase().includes(search.toLowerCase())
    ) : items;
  }, [search, items, itemText]);
  const selectedText = (0, import_react24.useMemo)(() => {
    if (modelValue && items.length > 0) {
      const findItem = items.find((v) => v[itemValue] === modelValue);
      return findItem ? findItem[itemText] : "";
    }
    return "";
  }, [modelValue, items, itemValue, itemText]);
  const handleOptionClick = (option) => {
    if (onChange) {
      onChange(option[itemValue]);
    }
    setSearch("");
    setShown(false);
  };
  (0, import_react24.useEffect)(() => {
    if (shown || shownOffcanvas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [shown, shownOffcanvas]);
  function setInputValue3(value) {
    throw new Error("Function not implemented.");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: `input-dropdown group-input ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(InputGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Label, { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        InputShortText,
        {
          className: "mt-0",
          iconright: true,
          readOnly: true,
          setEnteredText: setInputValue3,
          onClick: () => setShown(!shown),
          placeholder: `Pilih ${label.toLowerCase()}`,
          type: "text",
          value: selectedText,
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              className: `transform transition-transform ${shown ? "rotate-180" : "rotate-0"}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    "path",
                    {
                      d: "M8.12253 9.2925L12.0025 13.1725L15.8825 9.2925C16.2725 8.9025 16.9025 8.9025 17.2925 9.2925C17.6825 9.6825 17.6825 10.3125 17.2925 10.7025L12.7025 15.2925C12.3125 15.6825 11.6825 15.6825 11.2925 15.2925L6.70253 10.7025C6.31253 10.3125 6.31253 9.6825 6.70253 9.2925C7.09253 8.9125 7.73253 8.9025 8.12253 9.2925Z",
                      fill: "#58585B"
                    }
                  )
                }
              )
            }
          )
        }
      )
    ] }),
    shown && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "div",
      {
        className: "overlay fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden",
        onClick: () => setShown(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        className: `dropdown-content absolute left-0 right-0 transition-all duration-300 ease-in-out ${shown ? "max-h-96 opacity-100 z-20" : "max-h-0 opacity-0"} overflow-hidden`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "bottomsheet-dropdown", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Label, { children: [
              "Pilih ",
              label.toLowerCase()
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              "svg",
              {
                onClick: () => setShown(false),
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  "path",
                  {
                    id: "Combined Shape",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z",
                    fill: "#58585B"
                  }
                ) })
              }
            )
          ] }),
          items.length > 10 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            InputSearch,
            {
              setEnteredText: setSearch,
              placeholder: `Cari ${label.toLowerCase()}`,
              value: search
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("ul", { className: "list-none max-h-96 sm:max-h-48 overflow-y-auto", children: filteredItems.length > 0 ? filteredItems.map((option) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "li",
            {
              onClick: () => handleOptionClick(option),
              className: "hover:bg-gray-100 cursor-pointer",
              children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex justify-between", children: [
                option[itemText],
                modelValue === option[itemValue] && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  "svg",
                  {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("g", { id: "icon system/C/Check", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      "path",
                      {
                        id: "Solid",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.5449 18.155L20.4219 8.85783C21.1286 8.10774 21.166 6.97978 20.4219 5.61269Z",
                        fill: "#3CBF31"
                      }
                    ) })
                  }
                )
              ] })
            },
            option[itemValue]
          )) : search !== "" && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "p-4 text-error", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Label, { children: "Data Tidak Ditemukan" }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { children: "Informasi yang kamu cari tidak ditemukan silakan masukan kata kunci lain." })
          ] }) })
        ]
      }
    )
  ] }) });
};

// src/components/custom/input/file.tsx
var import_react25 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var InputFile = (0, import_react25.forwardRef)(({ className, file, setFile, children, variant, fileSize = 1, ...props }, ref) => {
  const inputRef = (0, import_react25.useRef)(null);
  const [error, setError] = (0, import_react25.useState)(false);
  fileSize = fileSize === void 0 ? 1 : fileSize;
  function handlePickingImage(e) {
    if (e.target.files) {
      console.log(e.target.files[0]);
      if (e.target.files[0].size / 1e6 <= fileSize) {
        setError(false);
        setFile(e.target.files[0]);
        console.log(file?.name);
        console.log(e.target.files[0].size / 1e6);
      } else {
        setError(true);
      }
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
  function handleRemoveFile() {
    setFile(void 0);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "file-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        className: !(variant === "image") && file ? `input-container file-input-all-filled ${file ? null : "h-40"}` : " input-container file-input-empty",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "input",
            {
              ref: inputRef,
              type: "file",
              className: file === void 0 ? "input-visible" : "input-hidden",
              accept: variant === "image" ? "image/*" : "*",
              onChange: (e) => handlePickingImage(e),
              onDragOver: (event) => event.preventDefault()
            }
          ),
          file === void 0 ? variant === "image" ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { src: "https://ifatich4.github.io/img/ico-image-upload.1e0a3166.svg", alt: "Upload Icon" }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "input-empty-all-instruction", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1635 2.62254C9.91883 2.441 9.57161 2.46117 9.34972 2.68306L5.18306 6.84972L5.12254 6.91982C4.941 7.1645 4.96117 7.51172 5.18306 7.73361L5.25316 7.79412C5.49783 7.97567 5.84505 7.9555 6.06694 7.73361L9.16667 4.63412V11.875L9.17237 11.9598C9.21376 12.2649 9.47525 12.5 9.79167 12.5C10.1368 12.5 10.4167 12.2202 10.4167 11.875V4.63412L13.5164 7.73361L13.5865 7.79412C13.8312 7.97567 14.1784 7.9555 14.4003 7.73361C14.6444 7.48953 14.6444 7.0938 14.4003 6.84972L10.2336 2.68306L10.1635 2.62254ZM16.8571 12.0833C17.1826 12.0833 17.4516 12.3185 17.4941 12.6235L17.5 12.7083V16.875C17.5 17.1914 17.2582 17.4529 16.9444 17.4943L16.8571 17.5H3.14286C2.8174 17.5 2.54844 17.2649 2.50587 16.9598L2.5 16.875V12.7083C2.5 12.3632 2.78782 12.0833 3.14286 12.0833C3.46831 12.0833 3.73728 12.3185 3.77985 12.6235L3.78571 12.7083V16.25H16.2143V12.7083C16.2143 12.3919 16.4561 12.1304 16.7699 12.089L16.8571 12.0833Z", fill: "#00AB4E" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { children: [
              "Tarik file ke sini atau ",
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("strong", { children: "pilih dari perangkat" })
            ] })
          ] }) : variant === "image" ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "input-filled-image", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "close-button", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { className: "w-full h-full rounded-md", src: "https://ifatich4.github.io/img/cross.f902232a.svg", alt: "", onClick: handleRemoveFile }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { className: "object-cover w-full h-full rounded-md", src: file ? URL.createObjectURL(file) : "", alt: "Choosen File" })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "input-filled-all", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("strong", { className: "w-full", children: [
              file.name,
              " - ",
              (file.size / 1e6).toFixed(1),
              " MB"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("svg", { onClick: handleRemoveFile, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.64845 5.2298C6.25257 4.90297 5.66557 4.92476 5.29516 5.29516C4.90161 5.68872 4.90161 6.32679 5.29516 6.72034L8.99149 10.4167L5.29516 14.113C4.90161 14.5065 4.90161 15.1446 5.29516 15.5382C5.66557 15.9086 6.25257 15.9304 6.64845 15.6035L6.72034 15.5382L10.4167 11.8418L14.113 15.5382L14.1849 15.6035C14.5808 15.9304 15.1678 15.9086 15.5382 15.5382C15.9317 15.1446 15.9317 14.5065 15.5382 14.113L11.8418 10.4167L15.5382 6.72034C15.9317 6.32679 15.9317 5.68872 15.5382 5.29516C15.1678 4.92476 14.5808 4.90297 14.1849 5.2298L14.113 5.29516L10.4167 8.99149L6.72034 5.29516L6.64845 5.2298Z", fill: "#58585B" }) })
          ] })
        ]
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ErrorText, { active: true, children: [
      "File melebihi ",
      fileSize,
      " MB"
    ] }) : file ? null : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(HelperText, { active: true, children: [
      "Ukuran file maksimal ",
      fileSize,
      " MB"
    ] })
  ] });
});

// src/components/custom/input/long.tsx
var import_react26 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var InputLongText = (0, import_react26.forwardRef)(({ className, placeholder, setEnteredText, iconLeft, iconright, children, ...props }, ref) => {
  const icons = [];
  function handleClearText() {
    setEnteredText("");
    console.log(props.value);
  }
  if (iconLeft && iconright && import_react26.Children.toArray(children).length === 1) {
    icons.push(
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { children: import_react26.Children.toArray(children)[0] }, 0)
    );
    icons.push(
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { children: import_react26.Children.toArray(children)[0] }, 1)
    );
  } else {
    import_react26.Children.toArray(children).map((i, key) => {
      icons.push(
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { children: i }, key)
      );
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: cn("input-group"), children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: cn("input"), ...props, ref, role: "input", children: [
    icons && iconLeft && icons[0],
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("textarea", { ...props, placeholder, value: props.value, onChange: (e) => setEnteredText(e.target.value) }),
    props.value && !props.readOnly && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("svg", { onClick: handleClearText, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z", fill: "#58585B" }) }),
    (icons[0] || icons[1]) && iconright && (icons[1] ? icons[1] : icons[0])
  ] }) });
});

// src/components/custom/input/number.tsx
var import_react27 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var InputNumber = (0, import_react27.forwardRef)(({ className, placeholder, setEnteredText, type, children, labelLeft, labelRight, ...props }, ref) => {
  function handleClearText() {
    setEnteredText("");
    console.log(props.value);
  }
  function setInputValue(currentValue) {
    let formattedValue = "";
    if (type == "percentage") {
      formattedValue = currentValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else if (type == "money") {
      formattedValue = currentValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (type == "4-digits-seperate") {
      formattedValue = currentValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    } else {
      formattedValue = currentValue;
    }
    setEnteredText(formattedValue);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cn("input"), children: [
    labelLeft && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: cn("unit-input-left", !props.disabled && "active"), children: labelLeft }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { ...props, ref, role: "input", placeholder, value: props.value, onChange: (e) => setInputValue(e.target.value) }),
    props.value && !props.readOnly && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("svg", { onClick: handleClearText, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z", fill: "#58585B" }) }),
    labelRight && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: cn("unit-input-right", !props.disabled && "active"), children: labelRight })
  ] });
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccordionBody,
  AccordionGroup,
  AccordionHeader,
  AccordionItem,
  Badge,
  Breadcumb,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Check,
  CheckBox,
  DatePicker,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  Dropdown,
  ErrorText,
  HelperText,
  InfoTipDescription,
  InfoTipTitle,
  Infotip,
  Input,
  InputFile,
  InputGroup,
  InputLongText,
  InputNumber,
  InputSearch,
  InputShortText,
  Label,
  List,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ProgressBar,
  Radio,
  RadioBox,
  TabGroup,
  TabItem,
  Table,
  TimePicker,
  TimePickerTry,
  Toast,
  ToastDescription,
  ToastTitle,
  inputVariants
});
