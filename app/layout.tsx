import { GoogleTagManager } from "@next/third-parties/google";
import ScrollToTop from "./components/helper/scroll-to-top";
import ToastProvider from "./components/ToastProvider";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ReactNode } from "react";
import "./css/globals.scss";
import "./css/card.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vidushi Malik - Software Engineer",
  description:
    "Portfolio of Vidushi Malik, a frontend developer specializing in building responsive, user-friendly web applications using modern technologies like Next.js, React, and TypeScript.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body cz-shortcut-listen="true" >
        <ToastProvider />
        <main className="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM || ""} /> */}
    </html>
  );
}
