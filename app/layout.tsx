// import { GoogleTagManager } from "@next/third-parties/google";
import ScrollToTop from "./components/helper/scroll-to-top";
import ToastProvider from "./components/ToastProvider";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ReactNode } from "react";
import "./css/globals.scss";
import "./css/card.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://vidushimalik.netlify.app";
export const metadata = {
  title: "Vidushi Malik | Software Engineer",
  description:
    "Software Engineer specializing in React & Next.js. Focused on high-performance frontend architecture and scalable web applications.",

  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vidushi Malik | Software Engineer",
    description:
      "Software Engineer specializing in React & Next.js. Focused on high-performance frontend architecture and scalable web applications.",
    url: baseUrl,

    images: [
      {
        url: "https://vidushimalik.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vidushi Malik Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body cz-shortcut-listen="true">
        <ToastProvider />
        <main className="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM || ""} /> */}

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vidushi Malik",
            jobTitle: [
              "Frontend Developer",
              "Software Engineer",
              "Web Developer",
            ],
            knowsAbout: [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Zustand",
              "Frontend Architecture",
              "Performance Optimization",
            ],
            url: "https://vidushimalik.netlify.app/",
            sameAs: [
              "https://www.linkedin.com/in/vidushi-malik-11263b1ab/",
              "https://github.com/Vidushi33",
            ],
          }),
        }}
      />
    </html>
  );
}
