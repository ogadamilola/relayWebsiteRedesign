import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   black: "#000",
      //   white: "#fff",
      //   blue: {
      //     500: "#007bff",
      //     600: "#0056b3",
      //   },
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        relaydigital: {
          blue: "#3b82f6",
          black: "#0A0A0A",
          grey: "#E7E7E7",
        },
      },
      fontSize: {
        sub: ["0.875rem", { lineHeight: "1.05rem" }],
        p3: ["1rem", { lineHeight: "1.5rem" }],
        p2: ["1.5rem", { lineHeight: "2.5rem" }],
        p1: [
          "clamp(1.375rem, 5vw, 1.625rem)",
          { lineHeight: "clamp(1.85rem, 5vw, 2.1rem)" },
        ],
        h3: ["4.5rem", { lineHeight: "5rem" }],
        h2: ["5.5rem", { lineHeight: "6rem" }],
        h1: [
          "clamp(2.5rem, 5vw, 6rem)",
          {
            lineHeight: "clamp(2.625rem, 5vw, 6.125rem)",
          },
        ],
      },
      fontFamily: {
        "geometos-soft": ["Geometos Soft", "sans-serif"],
        "neue-montreal": ["Neue Montreal", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
