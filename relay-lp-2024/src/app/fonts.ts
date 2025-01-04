// app/fonts.ts
import localFont from "next/font/local";

export const geometosSoft = localFont({
  src: [
    {
      path: "../../public/fonts/geometos-soft/GeometosSoft-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/geometos-soft/GeometosSoft-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geometos-soft",
  display: "swap",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/neue-montreal/NeueMontreal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-montreal/NeueMontreal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-montreal/NeueMontreal-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});
