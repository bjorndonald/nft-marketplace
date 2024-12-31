import type { Config } from 'tailwindcss'
import twColors from 'tailwindcss/colors';
import { spacing } from 'tailwindcss/defaultTheme';
import hocus from 'tailwindcss-hocus';
const THEME_COLOR_LIGHT = "#fff"
const THEME_COLOR_DARK = "#3B3B3B"

const extendedSpacing = {
  ...spacing,
  px: '0.0625rem',
  '0.75': '0.1875rem',
  '5.5': '1.375rem',
  7.5: "1.875rem",
  18: '4.5rem',
  21: '5.25rem',
  22: '5.5rem',
  30: '7.5rem',
  breakpoint: "1050px"
};

const fontSize = {
  '2xs': '0.875rem', // small
  '3xs': '0.8125rem', // (?)
};

const breakpoints = {
  'xx': '0px',
  'mobile': '475px',
  tablet: '835px',
  desktop: '1280px',
};

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: breakpoints,
    spacing: extendedSpacing,
   
    borderRadius: {
      ...extendedSpacing,
      half: '50%',
      full: "9999px",
    },
    borderWidth: { ...extendedSpacing, DEFAULT: '0.0625rem' },
    colors: {
      transparent: 'rgba(0,0,0,0)',
      current: 'currentColor',
      inherit: 'inherit',
      black: twColors.black,
      white: twColors.white,
      blue: twColors.sky,
      green: "#00AC4F",
      yellow: twColors.yellow,
      orange: twColors.orange,
      red: twColors.red,
      purple: twColors.violet,
      tint: {
        bg: 'rgba(var(--tint)/var(--opacity-tint-bg))',
        border: 'rgba(var(--tint)/var(--opacity-tint-border))',
      },
    },
    extend: {
      fontSize,
      colors: {
        brand: {
          DEFAULT: '#A259FF',
          950: '#0a0017',
          900: '#1f0046',
          800: '#330074',
          700: '#4700a2',
          600: '#5c00d1',
          500: '#7000ff',
          400: '#8a2eff',
          300: '#a45dff',
          200: '#be8bff',
          100: '#d8b9ff',
          50: '#f2e8ff',
        },
        primary: "#A259FF",
        light: THEME_COLOR_LIGHT,
        dark: THEME_COLOR_DARK,
      },
      fontFamily: {
        spacemono: [
          ['var(--font-spacemono)', 'Space Mono'],
          { fontFeatureSettings: "'calt' 1, 'zero' 1, 'dlig' 1" }
        ],
        worksans: [
          ['var(--font-worksans)', 'Work Sans'],
          { fontFeatureSettings: "'calt' 1, 'zero' 1, 'dlig' 1" }
        ],
      }, 
    },
  },
  plugins: [require("daisyui"), hocus],
  daisyui: {
    themes: [{
      
      light: {
        "--rounded-btn": "20px",
        "primary": "#A259FF",
        "primary-content": "#ffffff",
        "secondary": "#A259FF",
        "secondary-content": "#ffffff",
        "tertiary": "#A259FF",
        "tertiary-content": "#ffffff",
        "accent": "#FF6250",
        "accent-content": "#ffffff",
        "base-100": "#2B2B2B",
        "base-200": "#3B3B3B",
        "base-300": "#858584",
        "base-content": "#ffffff",
        "neutral": "#3B3B3B",
        "neutral-content": "#CCCCCC",
        "success": "#377DF7",
        "success-content": "#fff",
        "error": "#FF7262",
        "error-content": "#ffffff",
        "warning": "#F6851B",
        "warning-content": "#ffffff",
      },

      dark: {
        "--rounded-btn": "20px",
        "primary": "#A259FF",
        "primary-content": "#ffffff",
        "secondary": "#A259FF",
        "secondary-content": "#ffffff",
        "tertiary": "#A259FF",
        "tertiary-content": "#ffffff",
        "accent": "#FF6250",
        "accent-content": "#fff",
        "base-100": "#2B2B2B",
        "base-200": "#3B3B3B",
        "base-300": "#858584",
        "base-content": "#ffffff",
        "neutral": "#3B3B3B",
        "neutral-content": "#CCCCCC",
        "success": "#377DF7",
        "success-content": "#fff",
        "error": "#FF7262",
        "error-content": "#ffffff",
        "warning": "#F6851B",
        "warning-content": "#ffffff",
      },
    }]
  },
}
export default config
