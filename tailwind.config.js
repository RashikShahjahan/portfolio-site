import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nous-yellow': "#D4A017",  // Main dark yellow color
        'nous-blue': "#1A365D",    // Deep blue/indigo for contrast
        'nous-light-blue': "#2C5282", // Lighter variant of the blue
        'nous-light': "#FFFFFF",   // White text/elements
      },
    },
  },
  safelist: [
    'border-nous-yellow',
    'text-nous-yellow',
    'bg-nous-yellow',
    'hover:bg-nous-yellow',
    'hover:text-nous-blue',
    'border-nous-blue',
    'text-nous-blue',
    'bg-nous-blue',
    'hover:bg-nous-blue'
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "secondary": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#000000",
          "base-300": "#000000",
          "base-content": "#000000",
        },
        nous: {
          "primary": "#D4A017",      // Primary dark yellow 
          "secondary": "#1A365D",    // Deep blue/indigo
          "accent": "#2C5282",       // Lighter blue
          "neutral": "#1A1A1A",      // Near black
          "base-100": "#FFFFFF",     // White background
          "base-200": "#F2F2F2",     // Light gray
          "base-300": "#E5E5E5",     // Lighter gray
          "base-content": "#D4A017", // Yellow text on light backgrounds
          "info": "#3ABFF8",         // Info blue
          "success": "#10B981",      // Success green
          "warning": "#F59E0B",      // Warning yellow
          "error": "#EF4444",        // Error red
        },
      },
    ],
  },
}

