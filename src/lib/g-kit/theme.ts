const COLORS = {
    border: "hsl(var(--border) / <alpha-value>)",
    input: {
        DEFAULT: "hsl(var(--input) / <alpha-value>)",
        focus: "hsl(var(--input-focus) / <alpha-value>)"
    },
    ring: "hsl(var(--ring) / <alpha-value>)",
    background: "hsl(var(--background) / <alpha-value>)",
    foreground: {
        DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
        primary: "hsl(var(--foreground-primary) / <alpha-value>)",
        secondary: "hsl(var(--foreground-secondary) / <alpha-value>)",
        tertiary: "hsl(var(--foreground-tertiary) / <alpha-value>)",
        green: "hsl(var(--foreground-green) / <alpha-value>)"
    },
    primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        "on-text": "hsl(var(--primary-on-text) / <alpha-value>)"
    },
    secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
    },
    destructive: {
        DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        "on-text": "hsl(var(--destructive-on-text) / <alpha-value>)"
    },
    accent: {
        DEFAULT: "hsl(var(--accent) / <alpha-value>)",
        foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
    },
    muted: {
        DEFAULT: "hsl(var(--muted) / <alpha-value>)",
        foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
    },
    popover: {
        DEFAULT: "hsl(var(--popover) / <alpha-value>)",
        foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
    },
    card: {
        DEFAULT: "hsl(var(--card) / <alpha-value>)",
        foreground: "hsl(var(--card-foreground) / <alpha-value>)"
    },
    "color-inherit": "inherit",
    "transparent": "transparent"
}
const DEFAULT_EXTEND = {
    borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
    },
    keyframes: {
        "accordion-down": {
            from: {height: "0"},
            to: {height: "var(--radix-accordion-content-height)"}
        },
        "accordion-up": {
            from: {height: "var(--radix-accordion-content-height)"},
            to: {height: "0"}
        },
        "reverse-spin": {
            from: {
                transform: "rotate(360deg)"
            }
        }
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "reverse-spin": "reverse-spin 1s linear infinite"
    },
    screens: {
        "xs": "321px"
    },
    height: {
        "inherit": "inherit"
    }
}
const CONTAINER = {
    center: true,
    padding: "2rem",
    screens: {
        "2xl": "1400px"
    }
}
const G_KIT_THEME = {
    COLORS: COLORS,
    DEFAULT_EXTEND: DEFAULT_EXTEND,
    CONTAINER: CONTAINER
}

export default G_KIT_THEME