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
  Button: () => Button,
  InfoTipDescription: () => InfoTipDescription,
  InfoTipTitle: () => InfoTipTitle,
  Infotip: () => Infotip,
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
var React = __toESM(require("react"));
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
var Infotip = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      ref,
      role: "infotip",
      className: cn(infotipVariants({ variant }), className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "inline-block items-center", children }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: () => setVisible(false),
            className: "text-gray-500 hover:text-gray-700 focus:outline-none",
            "aria-label": "Close",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { fill: cn(infotipVariants({ variant })), className: "h-5 w-5", role: "button", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { id: "Combined Shape", fillRule: "evenodd", clipRule: "evenodd", d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z" }) }) })
          }
        )
      ]
    }
  );
});
Infotip.displayName = "infotip";
var InfoTipTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h5", { ref, className: cn("infotip__title", className), ...props }));
InfoTipTitle.displayName = "InfoTipTitle";
var InfoTipDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("infotip__description", className), ...props }));
InfoTipDescription.displayName = "InfoTipDescription";

// src/components/ui/toast.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var React2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var toastVariants = (0, import_class_variance_authority3.cva)(
  "sonner",
  {
    variants: {
      variant: {
        default: "sonner--info",
        error: "sonner--error",
        success: "sonner--success",
        warning: "sonner--warning",
        info: "sonner--info"
      },
      type: {
        mobile: "sonner--mobile",
        desktop: "sonner--desktop"
      }
    },
    defaultVariants: {
      variant: "default",
      type: "desktop"
    }
  }
);
var Toast = React2.forwardRef(({ className, variant, type, isToastOpen, setToastOpen, children, ...props }, ref) => {
  const [visible, setVisible] = React2.useState(isToastOpen);
  if (!isToastOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    type === "mobile" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "overlay bg-black-80 opacity-50 w-screen h-screen z-1 fixed inset-0" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        "data-sonner-toast": true,
        ref,
        role: "toast",
        className: cn(toastVariants({ variant, type }), className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "inline-block items-center", children }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: setToastOpen,
              className: "text-gray-500 hover:text-gray-700 focus:outline-none",
              "aria-label": "Close",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { fill: cn(toastVariants({ variant })), className: "h-5 w-5", role: "button", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { id: "filled=false", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { id: "Combined Shape", fillRule: "evenodd", clipRule: "evenodd", d: "M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z" }) }) })
            }
          )
        ]
      }
    )
  ] });
});
Toast.displayName = "toast";
var ToastTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h5", { "data-title": true, ref, className: cn("__title", className), ...props }));
ToastTitle.displayName = "toastTitle";
var ToastDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { "data-description": true, ref, className: cn("__description", className), ...props }));
ToastDescription.displayName = "toastDescription";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  InfoTipDescription,
  InfoTipTitle,
  Infotip,
  Toast,
  ToastDescription,
  ToastTitle
});
