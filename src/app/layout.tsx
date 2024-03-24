"use client";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <Blog />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
