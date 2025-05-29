import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nous-yellow': "#F4D03F",  // Brighter, more readable yellow
        'nous-yellow-dark': "#D4A017",  // Original darker yellow for accents
        'nous-blue': "#0A0A0A",    // Rich black for maximum contrast
        'nous-light-blue': "#1A1A1A", // Slightly lighter black/charcoal
        'nous-light': "#F8F6F0",   // Lighter cream for better contrast
        'nous-text-primary': "#2C3E50", // Dark blue-gray for primary text on light backgrounds
        'nous-text-secondary': "#34495E", // Slightly lighter for secondary text
      },
    },
  },
  safelist: [
    'border-nous-yellow',
    'text-nous-yellow',
    'bg-nous-yellow',
    'hover:bg-nous-yellow',
    'hover:text-nous-yellow',
    'border-nous-blue',
    'text-nous-blue',
    'bg-nous-blue',
    'hover:bg-nous-blue',
    'nous-text',
    'nous-bg-light',
    'nous-bg-dark',
    'nous-card',
    'nous-card-dark',
    'text-nous-text-primary',
    'text-nous-text-secondary'
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "primary-content": "#F4D03F",
          "secondary": "#ffffff",
          "secondary-content": "#2C3E50",
          "base-100": "#F8F6F0",     // Lighter cream color
          "base-content": "#2C3E50", // Dark text for better readability
          "base-200": "#F0EDE5",     // Slightly darker cream
          "base-300": "#E8E3D8",     // Even darker cream
        },
        nous: {
          "primary": "#F4D03F",      // Brighter yellow 
          "primary-content": "#0A0A0A",  // Black text on yellow background
          "secondary": "#0A0A0A",    // Rich black
          "secondary-content": "#F4D03F", // Bright yellow text on black background
          "accent": "#1A1A1A",       // Slightly lighter black/charcoal
          "accent-content": "#F4D03F", // Bright yellow text on accent background
          "neutral": "#1A1A1A",      // Near black
          "neutral-content": "#F4D03F", // Bright yellow text on neutral background
          "base-100": "#F8F6F0",     // Lighter cream color
          "base-200": "#F0EDE5",     // Slightly darker cream
          "base-300": "#E8E3D8",     // Even darker cream
          "base-content": "#2C3E50", // Dark text on light backgrounds for better readability
          "info": "#3ABFF8",         // Info blue
          "info-content": "#0A0A0A", // Dark text on info background
          "success": "#10B981",      // Success green
          "success-content": "#0A0A0A", // Dark text on success background
          "warning": "#F59E0B",      // Warning yellow
          "warning-content": "#0A0A0A", // Dark text on warning
          "error": "#EF4444",        // Error red
          "error-content": "#F8F6F0", // Light text on error background
        },
      },
    ],
  },
}

