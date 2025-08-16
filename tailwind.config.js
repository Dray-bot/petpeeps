/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        petpeeps: {
          blue: "#3B82F6",    // Vibrant blue
          purple: "#8B5CF6",  // Playful purple
          pink: "#EC4899",    // Fun pink
          yellow: "#FACC15",  // Happy yellow
          green: "#22C55E",   // Fresh green
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
