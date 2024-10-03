"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Badge: () => Badge,
  Breadcumb: () => Breadcumb,
  Button: () => Button,
  DatePicker: () => DatePicker,
  ErrorText: () => ErrorText,
  InfoTipDescription: () => InfoTipDescription,
  InfoTipTitle: () => InfoTipTitle,
  Infotip: () => Infotip,
  Input: () => Input,
  InputGroup: () => InputGroup,
  Label: () => Label,
  Modal: () => Modal,
  ModalBody: () => ModalBody,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  Toast: () => Toast,
  ToastDescription: () => ToastDescription,
  ToastTitle: () => ToastTitle
});
module.exports = __toCommonJS(src_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)("btn", {
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
var Button = (0, import_react.forwardRef)(({
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2Icon, { className: cn(
        "icon animate-reverse-spin",
        `icon--${size}`
      ) }),
      child
    ] });
  };
  const asChildChildren = asChild ? import_react.Children.map(children, (child) => (0, import_react.isValidElement)(child) ? child.props.children : null) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      children: asChild ? (0, import_react.cloneElement)(children, {}, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompChild, { child: asChildChildren })) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompChild, { child: children })
    }
  );
});
Button.displayName = "Button";

// src/components/ui/infotip.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var infotipVariants = (0, import_class_variance_authority2.cva)(
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
var Infotip = (0, import_react2.forwardRef)(({ className, variant, dismiss, children, ...props }, ref) => {
  const [isOpacityZero, setOpacityZero] = (0, import_react2.useState)(false);
  const [visible, setVisible] = (0, import_react2.useState)(true);
  if (!visible) return null;
  function handleClose() {
    setOpacityZero(!isOpacityZero);
    setTimeout(() => setVisible(false), 200);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      ref,
      role: "infotip",
      className: cn(infotipVariants({ variant }), isOpacityZero ? "opacity-0" : "opacity-100", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "inline-block items-center", children }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: handleClose,
            className: "text-gray-500 hover:text-gray-700 focus:outline-none",
            "aria-label": "Close",
            children: dismiss && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { fill: cn(infotipVariants({ variant })), className: "h-5 w-5", role: "button", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { id: "Combined Shape", fillRule: "evenodd", clipRule: "evenodd", d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z" }) }) })
          }
        )
      ]
    }
  );
});
Infotip.displayName = "infotip";
var InfoTipTitle = (0, import_react2.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h5", { ref, className: cn("infotip__title", className), ...props }));
InfoTipTitle.displayName = "InfoTipTitle";
var InfoTipDescription = (0, import_react2.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("infotip__description", className), ...props }));
InfoTipDescription.displayName = "InfoTipDescription";

// src/components/ui/toast.tsx
var import_react3 = require("react");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var toastVariants = (0, import_class_variance_authority3.cva)(
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
var Toast = (0, import_react3.forwardRef)(({ className, variant, isToastOpen, setToastOpen, children, ...props }, ref) => {
  const [animationState, setAnimationState] = (0, import_react3.useState)(null);
  ;
  const [isOpacityZero, setOpacityZero] = (0, import_react3.useState)(true);
  ;
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "inline-block items-center", children }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            onClick: handleClose,
            "aria-label": "Close",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "svg",
              {
                fill: cn(toastVariants({ variant })),
                className: "h-5 w-5",
                role: "button",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var ToastTitle = (0, import_react3.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h5", { "data-title": true, ref, className: cn("__title", className), ...props }));
ToastTitle.displayName = "toastTitle";
var ToastDescription = (0, import_react3.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { "data-description": true, ref, className: cn("__description", className), ...props }));
ToastDescription.displayName = "toastDescription";

// src/components/ui/modal.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var modalHeaderVariant = (0, import_class_variance_authority4.cva)("", {
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
var Modal = (0, import_react4.forwardRef)(({ className, children, dismiss, isOpen, onClose, ...props }, ref) => {
  const [animationState, setAnimationState] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    if (isOpen) {
      setAnimationState(true);
    } else {
      setAnimationState(false);
    }
  }, [isOpen]);
  function handleClose() {
    setAnimationState(false);
    if (onClose) setTimeout(() => onClose(), 200);
    return null;
  }
  if (!isOpen && !animationState) return handleClose();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "fixed inset-0 flex items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: cn("overlay", animationState ? "opacity-50" : "opacity-0", className),
        onClick: handleClose,
        ref,
        role: "modal",
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        ref,
        role: "modal",
        className: cn("modal", animationState ? "animation-enter" : "animation-exit", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "svg",
            {
              onClick: handleClose,
              className: cn(modalHeaderVariant({ dismiss }), className),
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          ),
          children
        ]
      }
    )
  ] });
});
Modal.displayName = "modal";
var ModalHeader = (0, import_react4.forwardRef)(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { ref, ...props, className: cn("modal-header", className) });
});
ModalHeader.displayName = "ModalHeader";
var ModalBody = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref, className: cn("modal-body", className), ...props }));
ModalBody.displayName = "ModalBody";
var ModalFooter = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref, className: cn("modal-footer", className), ...props }));
ModalFooter.displayName = "ModalFooter";

// src/components/ui/badge.tsx
var import_react5 = require("react");
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority5.cva)(
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
var Badge = (0, import_react5.forwardRef)(({ className, children, variant, dismiss, isBadgeOpen, setBadgeOpen, ...props }, ref) => {
  const [animationState, setAnimationState] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
        dismiss && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { onClick: handleClose, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3334 10C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 10C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 10ZM6.86346 6.86344C7.1104 6.61651 7.50173 6.60198 7.76565 6.81986L7.81358 6.86344L10.2778 9.32765L12.742 6.86344L12.7899 6.81986C13.0539 6.60198 13.4452 6.61651 13.6921 6.86344C13.9545 7.12581 13.9545 7.55119 13.6921 7.81356L11.2279 10.2778L13.6921 12.742C13.9545 13.0044 13.9545 13.4297 13.6921 13.6921C13.4452 13.939 13.0539 13.9536 12.7899 13.7357L12.742 13.6921L10.2778 11.2279L7.81357 13.6921L7.76565 13.7357C7.50172 13.9536 7.11039 13.939 6.86345 13.6921C6.60109 13.4297 6.60109 13.0044 6.86345 12.742L9.32768 10.2778L6.86346 7.81356C6.6011 7.55119 6.6011 7.12581 6.86346 6.86344Z", fill: "#939597" }) })
      ]
    }
  );
});

// src/components/ui/breadcumb.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Breadcumb = (0, import_react6.forwardRef)(({ className, itemList, children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn("breadcumb"), children: itemList.map((item, i) => {
    if (i >= 0 && i != itemList.length - 1) {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: cn("breadcumb-item"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: item.link, children: item.page }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M8.99755 15.875L12.8775 11.995L8.99755 8.11499C8.60755 7.72499 8.60755 7.09499 8.99755 6.70499C9.38755 6.31499 10.0175 6.31499 10.4075 6.70499L14.9975 11.295C15.3875 11.685 15.3875 12.315 14.9975 12.705L10.4075 17.295C10.0175 17.685 9.38755 17.685 8.99755 17.295C8.61755 16.905 8.60755 16.265 8.99755 15.875Z", fill: "#58585B" }) })
      ] }, i);
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn("breadcumb-item active"), children: item.page }, i);
    }
  }) });
});

// src/components/ui/input.tsx
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Input = (0, import_react7.forwardRef)(
  ({ className, placeholder, type, children, ...props }, ref) => {
    const [enteredText, setEnteredText] = (0, import_react7.useState)("");
    const [isPasswordHidden, setPasswordHidden] = (0, import_react7.useState)(true);
    const [isResetActive, setResetActive] = (0, import_react7.useState)(false);
    function handleClearText() {
      setEnteredText("");
      console.log(enteredText);
    }
    function setInputValue(currentValue) {
      if (type === "number") {
        let formattedValue = currentValue.replace(/[^0-9]/g, "");
        setEnteredText(formattedValue);
      } else {
        setEnteredText(currentValue);
      }
    }
    if (type != "textarea") {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("input"), children: [
        type == "number" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: cn("unit-input", !props.disabled && "active"), children: "Rupiah" }),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { ...props, ref, role: "input", type: type === "password" ? isPasswordHidden ? "password" : "text" : type === "number" ? "text" : type, placeholder, value: props.readOnly ? props.value : enteredText, onChange: (e) => setInputValue(e.target.value) }),
        enteredText && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { onClick: handleClearText, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z", fill: "#58585B" }) }),
        type === "password" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { onClick: () => props.disabled ? null : setPasswordHidden(!isPasswordHidden), xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: isPasswordHidden ? "M11.9953 5C7.73495 5 3.91914 7.64806 2.05973 11.7257C1.98009 11.9004 1.98009 12.0996 2.05973 12.2743C3.91914 16.3519 7.73495 19 11.9953 19C16.2528 19 20.0676 16.3544 21.9396 12.2757C22.0201 12.1002 22.0201 11.8998 21.9396 11.7243C20.0676 7.64563 16.2528 5 11.9953 5ZM12.264 6.35895C15.6588 6.46287 18.7266 8.53073 20.4108 11.7569L20.533 12L20.4108 12.2431C18.6823 15.5542 15.4964 17.6452 11.9953 17.6452L11.7265 17.641C8.32971 17.5371 5.26229 15.4681 3.58821 12.2443L3.46512 12L3.58821 11.7557C5.30634 8.44708 8.49212 6.35484 11.9953 6.35484L12.264 6.35895ZM12 7.70968C9.5598 7.70968 7.5814 9.63065 7.5814 12C7.5814 14.3694 9.5598 16.2903 12 16.2903C14.4402 16.2903 16.4186 14.3694 16.4186 12C16.4186 9.63065 14.4402 7.70968 12 7.70968ZM12 9.06452C13.6696 9.06452 15.0233 10.3789 15.0233 12C15.0233 13.6211 13.6696 14.9355 12 14.9355C10.3304 14.9355 8.97674 13.6211 8.97674 12C8.97674 10.3789 10.3304 9.06452 12 9.06452Z" : "M20.8654 3.20277C20.593 2.93241 20.1512 2.93241 19.8788 3.20277L3.13458 19.8182L3.06702 19.8958C2.86437 20.1668 2.88689 20.5514 3.13458 20.7972C3.40704 21.0676 3.84878 21.0676 4.12124 20.7972L7.07212 17.869C8.58719 18.7087 10.263 19.1538 11.9953 19.1538C16.2528 19.1538 20.0676 16.4501 21.9396 12.2818C22.0201 12.1024 22.0201 11.8976 21.9396 11.7182C21.0645 9.76959 19.7438 8.1074 18.1207 6.90541L20.8654 4.18184L20.933 4.1042C21.1356 3.83317 21.1131 3.44856 20.8654 3.20277ZM17.1217 7.89674L15.5787 9.42785C16.1196 10.1675 16.4186 11.0615 16.4186 12C16.4186 14.4214 14.4402 16.3846 12 16.3846C11.0542 16.3846 10.1533 16.088 9.40792 15.5512L8.10394 16.8452C9.3187 17.4512 10.637 17.7692 11.9953 17.7692C15.4964 17.7692 18.6823 15.6323 20.4108 12.2485L20.533 12.0009L20.5097 11.95C19.7092 10.3077 18.5517 8.91886 17.1572 7.92117L17.1217 7.89674ZM10.4129 14.554C10.8834 14.8428 11.4289 15 12 15C13.6696 15 15.0233 13.6567 15.0233 12C15.0233 11.4333 14.8648 10.892 14.5738 10.4251L10.4129 14.554ZM14.5249 5.1703C13.7017 4.95561 12.8546 4.84615 11.9953 4.84615C7.73495 4.84615 3.91914 7.55241 2.05973 11.7197C1.98009 11.8982 1.98009 12.1018 2.05973 12.2803C2.64274 13.5869 3.42961 14.77 4.38095 15.7732C4.645 16.0517 5.08654 16.065 5.36715 15.803C5.64777 15.541 5.6612 15.1028 5.39715 14.8244L5.12168 14.5222C4.4915 13.8035 3.95033 12.9895 3.51544 12.1037L3.46605 11.9982L3.58821 11.7504C5.30634 8.369 8.49212 6.23077 11.9953 6.23077C12.7344 6.23077 13.4624 6.32482 14.1703 6.50943C14.5429 6.60662 14.9244 6.38564 15.0224 6.01585C15.1203 5.64605 14.8976 5.26749 14.5249 5.1703ZM12.6977 8.30769C12.6977 7.92534 12.3853 7.61538 12 7.61538C9.5598 7.61538 7.5814 9.57857 7.5814 12C7.5814 12.3824 7.89375 12.6923 8.27907 12.6923C8.66438 12.6923 8.97674 12.3824 8.97674 12C8.97674 10.3433 10.3304 9 12 9C12.3853 9 12.6977 8.69004 12.6977 8.30769Z", fill: "#58585B" }) })
      ] });
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("input-group"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("input"), ...props, ref, role: "input", children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("textarea", { ...props, placeholder, value: enteredText, onChange: (e) => setEnteredText(e.target.value) }),
          enteredText && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { onClick: handleClearText, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.23613 8.23613C8.53245 7.93981 9.00205 7.92238 9.31876 8.18384L9.37627 8.23613L12.3333 11.1932L15.2904 8.23613L15.3479 8.18384C15.6646 7.92238 16.1342 7.93981 16.4305 8.23613C16.7454 8.55097 16.7454 9.06143 16.4305 9.37627L13.4735 12.3333L16.4305 15.2904C16.7454 15.6052 16.7454 16.1157 16.4305 16.4305C16.1342 16.7269 15.6646 16.7443 15.3479 16.4828L15.2904 16.4305L12.3333 13.4735L9.37626 16.4305L9.31875 16.4828C9.00204 16.7443 8.53244 16.7269 8.23612 16.4305C7.92128 16.1157 7.92128 15.6052 8.23612 15.2904L11.1932 12.3333L8.23613 9.37627C7.92129 9.06143 7.92129 8.55097 8.23613 8.23613Z", fill: "#58585B" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "error-massage" })
      ] });
    }
  }
);
var InputGroup = (0, import_react7.forwardRef)(({ className, children, title, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: cn("input-group"), children });
});

// src/components/ui/label.tsx
var import_react8 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Label = (0, import_react8.forwardRef)(({ className, children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn("label"), children: [
    " ",
    children,
    " "
  ] });
});

// src/components/ui/error-text.tsx
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var ErrorText = (0, import_react9.forwardRef)(({ className, children, active, ...props }, ref) => {
  return active && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-omega text-destructive font-regular", children });
});

// src/components/ui/date.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var DatePicker = (0, import_react10.forwardRef)(({ className, selectedDateString, setSelectedDateString, isActive, setActive, ...props }, ref) => {
  const [currentDate, setCurrentDate] = (0, import_react10.useState)(
    () => {
      if (selectedDateString) {
        const arrayDate = selectedDateString.split("/");
        return /* @__PURE__ */ new Date(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`);
      } else {
        return /* @__PURE__ */ new Date();
      }
    }
  );
  const [selectedDate, setSelectedDate] = (0, import_react10.useState)(/* @__PURE__ */ new Date());
  const [isDateSelected, setIsDateSelected] = (0, import_react10.useState)(false);
  const [isYearOpen, setYearOpen] = (0, import_react10.useState)(false);
  let indexFirstDate = 0;
  let indexLastDate = 1;
  let firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + indexFirstDate, 1);
  let lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + indexLastDate, 0);
  const dates = [];
  const years = [];
  const [topYears] = (0, import_react10.useState)(() => (/* @__PURE__ */ new Date()).getFullYear() + 3);
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
  (0, import_react10.useEffect)(() => {
    if (isDateSelected) {
      setSelectedDateString(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    }
  }, [selectedDate]);
  if (isActive) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "date", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: cn("header-date", className), children: [
        "Pilih Tanggal",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "svg",
          {
            onClick: () => setActive(!isActive),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: cn("month-picker", className), children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { onClick: handleDecreament, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M14.9975 8.12501L11.1175 12.005L14.9975 15.885C15.3875 16.275 15.3875 16.905 14.9975 17.295C14.6075 17.685 13.9775 17.685 13.5875 17.295L8.99754 12.705C8.60754 12.315 8.60754 11.685 8.99754 11.295L13.5875 6.70501C13.9775 6.31501 14.6075 6.31501 14.9975 6.70501C15.3775 7.09501 15.3875 7.73501 14.9975 8.12501Z", fill: "#58585B" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { onClick: handleYearOpen, className: cn("month-year", className), children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: months[currentDate.getMonth()] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: currentDate.getFullYear() }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { className: isYearOpen ? "rotate" : "", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M8.12253 9.2925L12.0025 13.1725L15.8825 9.2925C16.2725 8.9025 16.9025 8.9025 17.2925 9.2925C17.6825 9.6825 17.6825 10.3125 17.2925 10.7025L12.7025 15.2925C12.3125 15.6825 11.6825 15.6825 11.2925 15.2925L6.70253 10.7025C6.31253 10.3125 6.31253 9.6825 6.70253 9.2925C7.09253 8.9125 7.73253 8.9025 8.12253 9.2925Z", fill: "#58585B" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { onClick: handleIncreament, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M8.99755 15.875L12.8775 11.995L8.99755 8.11499C8.60755 7.72499 8.60755 7.09499 8.99755 6.70499C9.38755 6.31499 10.0175 6.31499 10.4075 6.70499L14.9975 11.295C15.3875 11.685 15.3875 12.315 14.9975 12.705L10.4075 17.295C10.0175 17.685 9.38755 17.685 8.99755 17.295C8.61755 16.905 8.60755 16.265 8.99755 15.875Z", fill: "#58585B" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: cn("day-list", className), children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "days", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Min" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Sen" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Sel" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Rab" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Kam" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Jum" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Sab" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "date-picker", children: dates.map((key, date) => dates[date] === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: cn("nomor", className) }, date) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { onClick: () => handleChangeDate(dates[date]), className: cn("nomor", isDateSameWithCurrent(dates[date]) && "active"), children: dates[date] }, date)) })
      ] }),
      isYearOpen && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "year-picker scrollbar-hide", children: years.map((key, year) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { onClick: () => handleYearChange(years[year]), className: cn("year-cell", years[year] === currentDate.getFullYear() && "active"), children: years[year] }, year)) })
    ] });
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Breadcumb,
  Button,
  DatePicker,
  ErrorText,
  InfoTipDescription,
  InfoTipTitle,
  Infotip,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Toast,
  ToastDescription,
  ToastTitle
});
