import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["cyrillic", "latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "село Паскалевец",
  description: "Официален сайт на село Паскалевец, община Павликени",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${oswald.className} flex flex-col min-h-screen h-full antialiased bg-green-900 text-white`}
      >
        {/*Enable snowfall component next winter */}
        {/* <SnowfallComponent /> */}

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
