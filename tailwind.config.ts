import type { Config } from "tailwindcss"
import { default as tailwindcssAnimate } from "tailwindcss-animate";



const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate],
}

export default config
