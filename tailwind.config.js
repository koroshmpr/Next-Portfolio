/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mont : ['var(--font-mont)', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#9b2463", // 240,86,199
                secondary: "#701c1c",
                primaryDark: "#58E6D9", // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'cta' : 'pulse 4s linear infinite alternate'
            },
            keyframes: {
                pulse: {
                    'from': { opacity : 0.2 , transform : 'rotate(0)' },
                    'to': { opacity : 1 , transform : 'rotate(180deg)' },
                }
            }
        },
    },
    plugins: [],
}

