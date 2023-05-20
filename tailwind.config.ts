import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      colors: {
      }
    },
  },
  plugins: [require("daisyui"), ('@tailwindcss/forms')


  ],
} satisfies Config;
