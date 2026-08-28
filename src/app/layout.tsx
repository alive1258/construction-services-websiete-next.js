import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://constructa.com"),

  title: {
    default: "Constructa | Building Tomorrow's Landmarks Today",
    template: "%s | Constructa",
  },

  description:
    "Constructa delivers high-quality construction services for residential, commercial, and industrial projects — from planning and design to on-time delivery.",

  keywords: [
    "Constructa",
    "construction company",
    "building construction",
    "commercial construction",
    "residential construction",
    "renovation",
    "general contractor",
  ],

  authors: [{ name: "Constructa" }],
  creator: "Constructa",
  publisher: "Constructa",

  category: "construction",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Constructa | Building Tomorrow's Landmarks Today",
    description:
      "High-quality construction services for residential, commercial, and industrial projects.",
    url: "https://constructa.com",
    siteName: "Constructa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1000,
        alt: "Constructa — construction worker on site reviewing blueprints",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Constructa | Building Tomorrow's Landmarks Today",
    description:
      "High-quality construction services for residential, commercial, and industrial projects.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    ],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://constructa.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "Constructa",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-brand-900`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
