/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Geist"],
      },
      height: {
        "height-1": "800px",
        "height-2": "700px",
        "height-3": "600px",
      },
      scale: {
        "a-little-bit": "1.015"
      },
    },
  },
  plugins: [],
};
