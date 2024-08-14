import type { Config } from "tailwindcss";

import G_KIT_COLORS from "./src/lib/g-kit/colors";
import G_KIT_FONT_SIZE from "./src/lib/g-kit/font-sizes";
import G_KIT_THEME from "./src/lib/g-kit/theme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,tsx}",
    "./src/components/**/*.{js,ts,tsx}",
    "./src/modules/**/*.{js,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      ...G_KIT_THEME.CONTAINER,
    },
    fontSize: {
      ...G_KIT_FONT_SIZE.SIZES,
    },
    fontWeight: {
      ...G_KIT_FONT_SIZE.WEIGHTS,
    },
    colors: {
      ...G_KIT_COLORS,
      ...G_KIT_THEME.COLORS,
    },
    extend: {
      ...G_KIT_THEME.DEFAULT_EXTEND,
    },
  },
  plugins: [],
};

export default config;
