import type React from "react";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const _merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const bodyClassName = `${_inter.variable} ${_merriweather.variable} font-sans antialiased`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClassName}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
