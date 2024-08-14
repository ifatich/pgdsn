import type { Config } from "tailwindcss"


const G_KIT_COLORS = require("./src/lib/g-kit/colors")
const G_KIT_FONT_SIZE = require("./src/lib/g-kit/font-sizes")
const G_KIT_THEME = require("./src/lib/g-kit/theme")

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,tsx}", "./src/components/**/*.{js,ts,tsx}", "./src/modules/**/*.{js,ts,tsx}"
    ],
    darkMode: "class",
    theme: {
        container: {
            ...G_KIT_THEME.CONTAINER
        },
        fontSize: {
            ...G_KIT_FONT_SIZE.SIZES
        },
        fontWeight: {
            ...G_KIT_FONT_SIZE.WEIGHTS
        },
        colors: {
            ...G_KIT_COLORS, ...G_KIT_THEME.COLORS
        },
        extend: {
            ...G_KIT_THEME.DEFAULT_EXTEND
        }
    },
    plugins: [  ]
}

export default config