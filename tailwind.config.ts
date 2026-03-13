import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // LearnX Navy Primary (#0B1F3A → #3C5F8F)
        navy: {
          900: "#0B1F3A",
          800: "#122B4D",
          700: "#1E3A5F",
          600: "#2C4A73",
          500: "#3C5F8F",
        },
        // LearnX Teal/Cyan Secondary
        teal: {
          50:  "#E0F9FC",
          100: "#CFFAFE",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        // AI Accent
        ai: {
          purple: "#7C3AED",
          indigo: "#6366F1",
        },
        // Neutral
        neutral: {
          bg:   "#F8FAFC",
          card: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // LearnX brand gradients
        "hero-gradient":    "linear-gradient(180deg, #0B1F3A 0%, #1E3A5F 100%)",
        "brand-gradient":   "linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)",
        "ai-gradient":      "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        "navy-gradient":    "linear-gradient(135deg, #0B1F3A 0%, #2C4A73 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-teal":   "0 0 40px rgba(6, 182, 212, 0.35)",
        "glow-navy":   "0 0 40px rgba(30, 58, 95, 0.4)",
        "glow-purple": "0 0 40px rgba(124, 58, 237, 0.3)",
        "card": "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
