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
  title: "Portfolio of Vidushi Malik - Software Engineer",
  description:
    "This portfolio showcases the work of Vidushi Malik, a frontend engineer and self-taught developer passionate about building intuitive and engaging user experiences. I thrive on learning new technologies, embracing challenges, and continuously improving my craft. Always open to collaboration, I bring a quick-learning mindset and a drive to create impactful digital solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={inter.className}>
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
