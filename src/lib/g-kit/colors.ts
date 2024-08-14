const COLORS = {
    broccoli: {
        90: "hsl(var(--broccoli-90)  / <alpha-value>)",
        80: "hsl(var(--broccoli-80)  / <alpha-value>)",
        60: "hsl(var(--broccoli-60)  / <alpha-value>)",
        50: "hsl(var(--broccoli-50)  / <alpha-value>)",
        40: "hsl(var(--broccoli-40)  / <alpha-value>)",
        20: "hsl(var(--broccoli-20)  / <alpha-value>)",
        10: "hsl(var(--broccoli-10)  / <alpha-value>)"
    },
    lime: {
        90: "hsl(var(--lime-90)  / <alpha-value>)",
        80: "hsl(var(--lime-80)  / <alpha-value>)",
        60: "hsl(var(--lime-60)  / <alpha-value>)",
        50: "hsl(var(--lime-50)  / <alpha-value>)",
        40: "hsl(var(--lime-40)  / <alpha-value>)",
        20: "hsl(var(--lime-20)  / <alpha-value>)",
        10: "hsl(var(--lime-10)  / <alpha-value>)"
    },
    pear: {
        90: "hsl(var(--pear-90)  / <alpha-value>)",
        80: "hsl(var(--pear-80)  / <alpha-value>)",
        60: "hsl(var(--pear-60)  / <alpha-value>)",
        50: "hsl(var(--pear-50)  / <alpha-value>)",
        40: "hsl(var(--pear-40)  / <alpha-value>)",
        20: "hsl(var(--pear-20)  / <alpha-value>)",
        10: "hsl(var(--pear-10)  / <alpha-value>)"
    },
    kiwi: {
        90: "hsl(var(--kiwi-90)  / <alpha-value>)",
        80: "hsl(var(--kiwi-80)  / <alpha-value>)",
        60: "hsl(var(--kiwi-60)  / <alpha-value>)",
        50: "hsl(var(--kiwi-50)  / <alpha-value>)",
        40: "hsl(var(--kiwi-40)  / <alpha-value>)",
        20: "hsl(var(--kiwi-20)  / <alpha-value>)",
        10: "hsl(var(--kiwi-10)  / <alpha-value>)"
    },
    red: {
        90: "hsl(var(--red-90)  / <alpha-value>)",
        80: "hsl(var(--red-80)  / <alpha-value>)",
        60: "hsl(var(--red-60)  / <alpha-value>)",
        50: "hsl(var(--red-50)  / <alpha-value>)",
        40: "hsl(var(--red-40)  / <alpha-value>)",
        20: "hsl(var(--red-20)  / <alpha-value>)",
        10: "hsl(var(--red-10)  / <alpha-value>)"
    },
    orange: {
        90: "hsl(var(--orange-90)  / <alpha-value>)",
        80: "hsl(var(--orange-80)  / <alpha-value>)",
        60: "hsl(var(--orange-60)  / <alpha-value>)",
        50: "hsl(var(--orange-50)  / <alpha-value>)",
        40: "hsl(var(--orange-40)  / <alpha-value>)",
        20: "hsl(var(--orange-20)  / <alpha-value>)",
        10: "hsl(var(--orange-10)  / <alpha-value>)"
    },
    yellow: {
        90: "hsl(var(--yellow-90)  / <alpha-value>)",
        80: "hsl(var(--yellow-80)  / <alpha-value>)",
        60: "hsl(var(--yellow-60)  / <alpha-value>)",
        50: "hsl(var(--yellow-50)  / <alpha-value>)",
        40: "hsl(var(--yellow-40)  / <alpha-value>)",
        20: "hsl(var(--yellow-20)  / <alpha-value>)",
        10: "hsl(var(--yellow-10)  / <alpha-value>)"
    },
    gold: {
        90: "hsl(var(--gold-90)  / <alpha-value>)",
        80: "hsl(var(--gold-80)  / <alpha-value>)",
        60: "hsl(var(--gold-60)  / <alpha-value>)",
        50: "hsl(var(--gold-50)  / <alpha-value>)",
        40: "hsl(var(--gold-40)  / <alpha-value>)",
        20: "hsl(var(--gold-20)  / <alpha-value>)",
        10: "hsl(var(--gold-10)  / <alpha-value>)"
    },
    turquoise: {
        90: "hsl(var(--turquoise-90)  / <alpha-value>)",
        80: "hsl(var(--turquoise-80)  / <alpha-value>)",
        60: "hsl(var(--turquoise-60)  / <alpha-value>)",
        50: "hsl(var(--turquoise-50)  / <alpha-value>)",
        40: "hsl(var(--turquoise-40)  / <alpha-value>)",
        20: "hsl(var(--turquoise-20)  / <alpha-value>)",
        10: "hsl(var(--turquoise-10)  / <alpha-value>)"
    },
    blue: {
        90: "hsl(var(--blue-90)  / <alpha-value>)",
        80: "hsl(var(--blue-80)  / <alpha-value>)",
        60: "hsl(var(--blue-60)  / <alpha-value>)",
        50: "hsl(var(--blue-50)  / <alpha-value>)",
        40: "hsl(var(--blue-40)  / <alpha-value>)",
        20: "hsl(var(--blue-20)  / <alpha-value>)",
        10: "hsl(var(--blue-10)  / <alpha-value>)"
    },
    purple: {
        90: "hsl(var(--purple-90)  / <alpha-value>)",
        80: "hsl(var(--purple-80)  / <alpha-value>)",
        60: "hsl(var(--purple-60)  / <alpha-value>)",
        50: "hsl(var(--purple-50)  / <alpha-value>)",
        40: "hsl(var(--purple-40)  / <alpha-value>)",
        20: "hsl(var(--purple-20)  / <alpha-value>)",
        10: "hsl(var(--purple-10)  / <alpha-value>)"
    },
    black: {
        80: "hsl(var(--black-80)  / <alpha-value>)",
        60: "hsl(var(--black-60)  / <alpha-value>)",
        50: "hsl(var(--black-50)  / <alpha-value>)",
        40: "hsl(var(--black-40)  / <alpha-value>)",
        20: "hsl(var(--black-20)  / <alpha-value>)",
        10: "hsl(var(--black-10)  / <alpha-value>)"
    },
    white: "hsl(var(--text-white)  / <alpha-value>)"
}

export default COLORS