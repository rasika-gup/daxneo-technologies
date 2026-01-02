import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Providers from './Providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Daxneo Technologies | AI-Powered Solutions",
    template: "%s | Daxneo Technologies",
  },
  description: "Daxneo Technologies - Leading provider of AI solutions, software development, and digital transformation services for enterprises and startups.",
  keywords: ["AI solutions", "software development", "digital transformation", "enterprise software", "AI consulting", "technology services"],
  authors: [{ name: "Daxneo Technologies", url: "https://daxneo.com" }],
  creator: "Daxneo Technologies",
  publisher: "Daxneo Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daxneo.com",
    title: "Daxneo Technologies | AI-Powered Solutions",
    description: "Leading provider of AI solutions, software development, and digital transformation services for enterprises and startups.",
    siteName: "Daxneo Technologies",
    images: [
      {
        url: "/og-image.jpg", // You'll want to create this image
        width: 1200,
        height: 630,
        alt: "Daxneo Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daxneo Technologies | AI-Powered Solutions",
    description: "Leading provider of AI solutions, software development, and digital transformation services for enterprises and startups.",
    images: ["/twitter-image.jpg"], // You'll want to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
