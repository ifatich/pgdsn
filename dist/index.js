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
  InfoTipDescription: () => InfoTipDescription,
  InfoTipTitle: () => InfoTipTitle,
  Infotip: () => Infotip,
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
var import_class_variance_authority6 = require("class-variance-authority");
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Breadcumb,
  Button,
  InfoTipDescription,
  InfoTipTitle,
  Infotip,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Toast,
  ToastDescription,
  ToastTitle
});
