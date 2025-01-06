import type { Metadata } from "next";
import "../styles/globals.css";
import fs from "fs";
import path from "path";
import { geometosSoft, neueMontreal } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://relaydigital.agency"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: "Relay Digital | Fast Track Your Business Growth",
  description:
    "Relay Digital helps businesses accelerate growth with proven strategies, precision, and speed. From high-converting websites to tailored marketing campaigns, we deliver results that leave competitors in the dust.",
  keywords:
    "Relay Digital, digital marketing, website development, paid traffic, SEO, content marketing, marketing automation, business growth strategies, branding, graphic design, performance marketing, online presence, marketing consultancy, growth partner, marketing funnels, media buying, lead generation, digital transformation",
  openGraph: {
    type: "website",
    url: "https://relaydigital.agency",
    title: "Relay Digital | Fast Track Your Business Growth",
    description:
      "Relay Digital drives your business growth with data-driven strategies and cutting-edge marketing solutions, transforming your goals into results.",
    images: "/assets/images/relay-digital-og-image.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relay Digital | Fast Track Your Business Growth",
    description:
      "Relay Digital delivers proven growth strategies and precision marketing, designed to transform your business and boost your ROI.",
    images: "/assets/images/relay-digital-twitter-image.webp",
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    apple: [{ url: "/assets/images/favicon.webp", sizes: "180x180" }],
    other: [
      {
        rel: "icon",
        url: "/assets/images/favicon.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        rel: "icon",
        url: "/assets/images/favicon.webp",
        sizes: "16x16",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let criticalCss = "";

  try {
    const criticalCssPath = path.join(
      process.cwd(),
      "src",
      "styles",
      "critical.css"
    );
    criticalCss = fs.readFileSync(criticalCssPath, "utf8");
  } catch (error) {
    console.error("Failed to load critical CSS:", error);
  }

  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCss,
          }}
        />
      </head>
      <body
        className={`${geometosSoft.variable} ${neueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
