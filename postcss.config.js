const fs = require("fs")

module.exports = {
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        "tailwindcss": {},
        "autoprefixer": {},
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
    }

}