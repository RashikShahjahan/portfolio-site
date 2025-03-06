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
        'nous-blue': "#0A0A0A",    // Rich black for maximum contrast with yellow
        'nous-light-blue': "#1A1A1A", // Slightly lighter black/charcoal
        'nous-light': "#E8E6D9",   // Beige/cream color from the image
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
    'nous-card-dark'
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "primary-content": "#D4A017",
          "secondary": "#ffffff",
          "secondary-content": "#D4A017",
          "base-100": "#E8E6D9",     // Beige/cream color from the image
          "base-content": "#D4A017",
          "base-200": "#DDD9C4",     // Slightly darker beige
          "base-300": "#D2CCAF",     // Even darker beige
          "base-content": "#D4A017",
        },
        nous: {
          "primary": "#D4A017",      // Primary dark yellow 
          "primary-content": "#0A0A0A",  // Black text on yellow background (exception)
          "secondary": "#0A0A0A",    // Rich black
          "secondary-content": "#D4A017", // Yellow text on black background
          "accent": "#1A1A1A",       // Slightly lighter black/charcoal
          "accent-content": "#D4A017", // Yellow text on accent background
          "neutral": "#1A1A1A",      // Near black
          "neutral-content": "#D4A017", // Yellow text on neutral background
          "base-100": "#E8E6D9",     // Beige/cream color
          "base-200": "#DDD9C4",     // Slightly darker beige
          "base-300": "#D2CCAF",     // Even darker beige
          "base-content": "#D4A017", // Yellow text on all base backgrounds
          "info": "#3ABFF8",         // Info blue
          "info-content": "#D4A017", // Yellow text on info background
          "success": "#10B981",      // Success green
          "success-content": "#D4A017", // Yellow text on success background
          "warning": "#F59E0B",      // Warning yellow
          "warning-content": "#0A0A0A", // Black text on warning (exception)
          "error": "#EF4444",        // Error red
          "error-content": "#D4A017", // Yellow text on error background
        },
      },
    ],
  },
}

