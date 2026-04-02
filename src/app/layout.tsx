import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { //todo set better metadata for website when you know exact content
  title: {
      template: "%s | Driver Manager Website",
      default: "Drier Manager Website | Logistics, Training & Tracking"
  },
    description:
        "Premier trucking company providing expert driver training, reliable logistics and hauling, and state-of-the-art real-time freight tracking.",
    keywords: ["trucking", "logistics", "driver training", "freight tracking", "hauling services"],
    openGraph: {
        title: "Driver Manager Website | Professional Logistics",
        description: "Expert driver training, reliable logistics, and real-time tracking.",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <Navbar />
        <main className="flex-grow flex flex-col">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}