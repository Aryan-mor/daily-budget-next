/** @_types {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './_components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {},
    darkMode: "class",
    plugins: [nextui(), require("tailwindcss-animate")],
}
