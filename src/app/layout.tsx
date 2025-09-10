import type { Metadata } from "next";
import {
  Cookie,
  Geist,
  Geist_Mono,
  Imperial_Script,
  Italiana,
  Lobster,
  Pacifico,
  Poppins,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import { SheetProvider } from "@/contexts/SheetContext";
import { ToastContainer, toast } from "react-toastify";
import AOSInit from "@/components/AOSInit";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
  subsets: ["latin"],
});

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cookie",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const robotoSlab = Roboto_Slab({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const imperial = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-imperial-script",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "Wedding Invitation (Rikha & Solihin)",
  description: "Jum'at, 26 September 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${robotoSlab.variable} ${italiana.variable}  ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${cookie.variable} ${imperial.variable} ${lobster.variable} flex min-h-screen justify-center bg-color`}
      >
        <div className="w-full max-w-[500px] min-h-screen shadow-md overflow-hidden relative">
          <Suspense fallback={<div></div>}>
            <AOSInit />
            <SheetProvider>{children}</SheetProvider>
            <ToastContainer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
