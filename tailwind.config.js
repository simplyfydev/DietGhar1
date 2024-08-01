/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dietghar-green": "#4CAF50", // Example green color
        "dietghar-red": "#F44336", // Example red color
        black: "#333333",
        blue: "#334982",
        grey: "#f3f3f3",
        orange: "#fdb913",
        pink: "#e40087",
        purple: "#782b8f",
        red: "#dd372f",
        teal: "#00857d",
        white: "#fff",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        topDownBump: {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(5px)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'top-down-bump': 'topDownBump 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
